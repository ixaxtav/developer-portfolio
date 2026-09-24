import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import profile from "@/content/profile.json";
import { projects } from "@/lib/projects";
import { Workflow } from "./components/Workflow";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero page-width" aria-labelledby="intro-title">
        <div className="edition-line">
          <span>Independent thinking. Full-stack execution.</span>
          <span>South Florida / Open to U.S. relocation</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Lead developer · 8+ years of building
            </p>
            <h1 id="intro-title">
              Software for
              <br />
              the way people
              <br />
              <em>actually work.</em>
            </h1>
            <p className="hero-description">
              I’m Ixax. I turn complex workflows into useful products — from the
              interface people touch to the services that keep it running.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href="/resume.pdf">
                Read my résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <aside className="portrait-card" aria-label="About Ixax">
            <div className="portrait-frame">
              <Image
                src="/avatar.png"
                alt="Ixax Tavarez"
                width={460}
                height={460}
                preload
                unoptimized
              />
              <span className="portrait-mark" aria-hidden="true">
                IT.
              </span>
            </div>
            <div className="portrait-caption">
              <span className="eyebrow">The person behind the code</span>
              <span aria-hidden="true">↳</span>
            </div>
            <p>
              Currently leading development at <strong>AllClear.ai.</strong>{" "}
              Working across product interfaces, backend systems, and practical
              AI integration.
            </p>
          </aside>
        </div>
        <div className="expertise-strip" aria-label="Core technologies">
          <span className="eyebrow">Across the stack</span>
          <p>
            React <span>/</span> TypeScript <span>/</span> Python <span>/</span>{" "}
            Go <span>/</span> Node.js
          </p>
        </div>
      </section>

      <section
        id="work"
        className="work-section page-width"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Selected work</p>
            <h2 id="work-title">Built with purpose.</h2>
          </div>
          <p>
            Three projects. Different challenges.
            <br /> Ownership across the stack.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.slug}>
              <Workflow project={project} />
              <div className="project-meta">
                <span>
                  0{index + 1} / {project.company}
                </span>
                <span>{project.period}</span>
              </div>
              <h3>
                <Link href={`/work/${project.slug}`}>{project.title}</Link>
              </h3>
              <p>{project.intro}</p>
              <ul
                className="tags"
                aria-label={`${project.company} technologies`}
              >
                {project.stack.slice(0, 4).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="project-link" href={`/work/${project.slug}`}>
                Read the {project.company} case study{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-title">
        <div className="approach-inner page-width">
          <div>
            <p className="eyebrow">A little about how I work</p>
            <h2 id="approach-title">
              The details are
              <br />
              <em>the work.</em>
            </h2>
          </div>
          <div className="approach-copy">
            <p>
              I care about what happens after the happy path: the slow request,
              the unexpected response, the workflow that takes one click too
              many.
            </p>
            <p>
              My work spans customer-facing products, connected devices,
              staffing platforms, and college recruiting. The common thread is
              connecting a useful interface to dependable services.
            </p>
            <a className="text-link" href="#experience">
              The experience behind it <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="experience-section page-width"
        aria-labelledby="experience-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / Experience</p>
            <h2 id="experience-title">A track record of shipping.</h2>
          </div>
          <a className="text-link" href="/resume.pdf">
            Full résumé (PDF) <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="experience-list">
          {profile.jobs.map((job, index) => (
            <article className="experience-row" key={job.company}>
              <p className="experience-date">
                {job.period}
                {index === 0 && <span className="current-label">Current</span>}
              </p>
              <div>
                <h3>{job.company}</h3>
                <p className="job-title">{job.title}</p>
                {job.progression && (
                  <p className="job-progression">{job.progression}</p>
                )}
              </div>
              <div>
                <p>{job.summary}</p>
                {job.company === "JobCore Talent" && (
                  <p className="job-detail">
                    React employer tools, Django/PostgreSQL APIs, payroll
                    corrections, and React Native worker features.
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="skills-grid">
          {profile.skills.map((group) => (
            <div key={group.label}>
              <h3 className="eyebrow">{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <p className="education">{profile.education}</p>
      </section>

      <section
        className="side-project page-width"
        aria-labelledby="side-project-title"
      >
        <div>
          <p className="eyebrow">Outside the day job</p>
          <h2 id="side-project-title">A smaller experiment: Link Sprout.</h2>
          <p>
            A single home for professional links, built with SvelteKit,
            TypeScript, Tailwind CSS, and Firebase.
          </p>
        </div>
        <div className="side-project-links">
          <a className="text-link" href="https://link-sprout.web.app">
            Explore Link Sprout ↗
          </a>
          <a
            className="text-link"
            href="https://github.com/ixaxtav/link-sprout"
          >
            View source on GitHub ↗
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="page-width contact-inner">
          <p className="eyebrow">03 / What’s next?</p>
          <h2 id="contact-title">
            Good work starts
            <br />
            with a <em>conversation.</em>
          </h2>
          <p>
            Have a role, a product, or a difficult problem in mind?
            <br />
            Let’s see what we can build.
          </p>
          <div className="contact-links">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              Email Ixax <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.linkedin}>Connect on LinkedIn ↗</a>
          </div>
          <span className="contact-stamp" aria-hidden="true">
            Let’s
            <br />
            make it
            <br />
            <em>work.</em>
          </span>
        </div>
      </section>
    </main>
  );
}
