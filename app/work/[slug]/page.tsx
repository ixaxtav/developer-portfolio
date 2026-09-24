import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findProject, projects } from "@/lib/projects";
import { Workflow } from "@/app/components/Workflow";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "Project not found", robots: { index: false } };
  return {
    title: `${project.company} — ${project.title}`,
    description: project.intro,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: `${project.company} — ${project.title}`,
      description: project.intro,
      url: `/work/${slug}`,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();
  const nextProject =
    projects[
      (projects.findIndex((item) => item.slug === slug) + 1) % projects.length
    ];
  return (
    <main id="main-content" className="case-study page-width">
      <Link className="back-link" href="/#work">
        ← All selected work
      </Link>
      <header className="case-header">
        <p className="eyebrow">
          {project.company} / {project.period}
        </p>
        <h1>{project.title}</h1>
        <p className="case-intro">{project.intro}</p>
        <p className="case-category">{project.category}</p>
        <ul className="tags" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </header>
      <Workflow project={project} />
      <div className="case-body">
        <section>
          <p className="eyebrow">01 / The challenge</p>
          <h2>The problem behind the product.</h2>
          <p>{project.challenge}</p>
        </section>
        <section>
          <p className="eyebrow">02 / My contribution</p>
          <h2>What I built.</h2>
          <div className="contributions">
            {project.contributions.map((item, index) => (
              <article key={item.title}>
                <span className="eyebrow">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section>
          <p className="eyebrow">03 / The outcome</p>
          <h2>{project.outcome}</h2>
          <p>{project.considerations}</p>
        </section>
        <aside className="case-note">
          <strong>A note on the work</strong>
          <p>
            These are professional projects with private source code. The
            diagrams illustrate the workflow; they contain no customer records
            or internal configuration.
          </p>
        </aside>
      </div>
      <nav className="case-next" aria-label="More work">
        <div>
          <p className="eyebrow">Keep exploring</p>
          <Link href={`/work/${nextProject.slug}`}>
            {nextProject.company} <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <Link className="text-link" href="/#contact">
          Discuss my work ↗
        </Link>
      </nav>
    </main>
  );
}
