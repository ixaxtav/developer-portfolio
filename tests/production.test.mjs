import assert from "node:assert/strict";
import { before, after, test } from "node:test";
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { once } from "node:events";
import { readFile } from "node:fs/promises";

let server;
let base;
let output = "";
const pagePaths = [
  "/",
  "/work/allclear",
  "/work/dataremote",
  "/work/imrecruitable",
  "/privacy",
];

before(async () => {
  const portProbe = createServer();
  portProbe.listen(0, "127.0.0.1");
  await once(portProbe, "listening");
  const port = portProbe.address().port;
  await new Promise((resolve) => portProbe.close(resolve));
  base = `http://127.0.0.1:${port}`;
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    {
      env: { ...process.env, NODE_ENV: "production" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );
  server.stdout.on("data", (chunk) => {
    output = (output + chunk).slice(-8000);
  });
  server.stderr.on("data", (chunk) => {
    output = (output + chunk).slice(-8000);
  });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null)
      throw new Error(`Production server exited: ${output}`);
    try {
      if ((await fetch(base)).ok) return;
    } catch {
      /* Server is starting. */
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Production server did not start: ${output}`);
});

after(async () => {
  if (server && server.exitCode === null) {
    const exited = once(server, "exit");
    server.kill("SIGTERM");
    await exited;
  }
});

test("pages render current content, one main heading, and their own canonical URL", async () => {
  for (const path of pagePaths) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    assert.match(html, /id="main-content"/);
    assert.ok(
      html.includes(
        `rel="canonical" href="https://www.ixaxtavarez.com${path === "/" ? "" : path}"`,
      ),
      path,
    );
    assert.doesNotMatch(
      html,
      /googletagmanager\.com|google-analytics\.com|_vercel\/insights|_vercel\/speed-insights/,
    );
  }
  const home = await (await fetch(base)).text();
  assert.match(home, /Lead Developer/);
  assert.match(home, /Aug 2026/);
  assert.match(home, /Jan 2018/);
  assert.ok(
    home.indexOf("AllClear.ai</h3>") < home.indexOf("DataRemote, Inc.</h3>"),
  );
  assert.doesNotMatch(
    home,
    /35,000|task-management-app|bmi-calculator|tic-tac-toe/,
  );
});

test("CSP binds all executable scripts to fresh server-generated nonces", async () => {
  const nonces = [];
  for (let attempt = 0; attempt < 2; attempt++) {
    const response = await fetch(base, {
      headers: {
        "x-nonce": "attacker-supplied",
        "Content-Security-Policy": "script-src *",
      },
    });
    const policy = response.headers.get("content-security-policy");
    const nonce = policy.match(/'nonce-([^']+)'/)[1];
    nonces.push(nonce);
    assert.notEqual(nonce, "attacker-supplied");
    assert.doesNotMatch(
      policy.split(";").find((rule) => rule.trim().startsWith("script-src")),
      /unsafe-inline|unsafe-eval/,
    );
    for (const directive of [
      "object-src 'none'",
      "base-uri 'none'",
      "frame-ancestors 'none'",
      "form-action 'none'",
    ])
      assert.ok(policy.includes(directive));
    const html = await response.text();
    const scripts = html.match(/<script\b[^>]*>/g) || [];
    assert.ok(scripts.length > 0);
    for (const script of scripts)
      assert.ok(script.includes(`nonce="${nonce}"`), script);
    assert.match(response.headers.get("cache-control"), /private|no-store/);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("x-powered-by"), null);
  }
  assert.notEqual(nonces[0], nonces[1]);
});

test("every internal page link and in-page destination resolves", async () => {
  const pages = new Map(
    await Promise.all(
      pagePaths.map(async (path) => [
        path,
        await (await fetch(base + path)).text(),
      ]),
    ),
  );
  const checked = new Set();
  for (const html of pages.values()) {
    for (const match of html.matchAll(
      /<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,
    )) {
      const [, href, label] = match;
      assert.ok(label.replace(/<[^>]*>/g, "").trim(), `Unnamed link: ${href}`);
      if (!href.startsWith("/") && !href.startsWith("#")) continue;
      const url = new URL(href, base);
      if (url.hash) {
        const target =
          pages.get(url.pathname) ||
          (await (await fetch(url.origin + url.pathname)).text());
        assert.ok(target.includes(`id="${url.hash.slice(1)}"`), href);
      }
      if (!checked.has(url.pathname)) {
        assert.equal(
          (await fetch(url.origin + url.pathname)).status,
          200,
          href,
        );
        checked.add(url.pathname);
      }
    }
  }
});

test("old operational screenshots and unknown projects are unavailable", async () => {
  for (const path of [
    "/dataremote.png",
    "/jobcore.png",
    "/ida.jpeg",
    "/imrecruitable.png",
    "/work/unknown-project",
    "/missing-page",
  ]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 404, path);
  }
});

test("public PDF is served as a PDF with noindex and current shared profile is phone-free", async () => {
  const response = await fetch(base + "/resume.pdf");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type"), /application\/pdf/);
  assert.match(response.headers.get("x-robots-tag"), /noindex/);
  const pdf = Buffer.from(await response.arrayBuffer());
  assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  assert.deepEqual(pdf, await readFile("public/resume.pdf"));
  const profile = JSON.parse(await readFile("content/profile.json", "utf8"));
  assert.equal(profile.title, "Lead Developer");
  assert.equal(profile.location, "South Florida");
  assert.doesNotMatch(
    JSON.stringify(profile),
    /\+?1?\s*\(?\d{3}\)?[ .-]*\d{3}[ .-]*\d{4}/,
  );
});

test("robots and sitemap expose current pages while letting crawlers see PDF noindex", async () => {
  const robots = await (await fetch(base + "/robots.txt")).text();
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /Sitemap: https:\/\/www\.ixaxtavarez\.com\/sitemap.xml/);
  assert.doesNotMatch(robots, /Disallow: \/resume.pdf/);
  const sitemap = await (await fetch(base + "/sitemap.xml")).text();
  for (const path of pagePaths.slice(1))
    assert.ok(sitemap.includes(`https://www.ixaxtavarez.com${path}`));
  assert.doesNotMatch(sitemap, /resume.pdf/);
});

test("social preview images and icon are available", async () => {
  for (const path of ["/opengraph-image", "/twitter-image", "/icon.svg"]) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type"), /image\//);
  }
});
