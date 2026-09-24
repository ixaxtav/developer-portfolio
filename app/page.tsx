import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import profile from "@/content/profile.json";
import { projects } from "@/lib/projects";
import { Icon } from "./components/Icon";
import { Workflow } from "./components/Workflow";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero page-width" aria-labelledby="intro-title">
        <Image
          className="portrait"
          src="/avatar.jpg"
          alt="Ixax Tavarez"
          width={640}
          height={640}
          preload
          unoptimized
        />
        <div>
          <h1 id="intro-title">
            Hello World! I’m <strong>Ixax</strong>, a lead developer who turns
            complex workflows into useful products — from the interface people
            touch to the services that keep it running.
          </h1>
          <p className="hero-meta">
            South Florida, open to U.S. relocation. Currently at AllClear.ai.
          </p>
          <div className="hero-actions">
            <a className="button" href="#work">
              See my work
            </a>
            <a className="link" href="/resume.pdf">
              Résumé (PDF)
            </a>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="page-width section"
        aria-labelledby="experience-title"
      >
        <div className="section-head">
          <h2 id="experience-title" className="section-title">
            <Icon name="briefcase" />
            Work experience
          </h2>
          <a className="link" href="/resume.pdf">
            Full résumé (PDF)
          </a>
        </div>
        <div className="columns jobs">
          {profile.jobs.map((job, index) => (
            <article key={job.company}>
              <h3>
                {job.company}
                {index === 0 && <span className="badge">Current</span>}
              </h3>
              <p className="meta">
                {job.title}
                <br />
                {job.period}
              </p>
              <p>{job.summary}</p>
              {job.progression && (
                <ul className="meta job-progression">
                  {job.progression.split("; ").map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              )}
              {job.company === "JobCore Talent" && (
                <p className="meta">
                  React employer tools, Django/PostgreSQL APIs, payroll
                  corrections, and React Native worker features.
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section
        id="work"
        className="page-width section"
        aria-labelledby="work-title"
      >
        <h2 id="work-title" className="section-title">
          <Icon name="box" />
          Projects
        </h2>
        <div className="columns projects">
          {projects.map((project) => (
            <article key={project.slug}>
              <Workflow project={project} />
              <p className="meta">
                {project.company} ({project.period})
              </p>
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
              <Link className="link" href={`/work/${project.slug}`}>
                Read the {project.company} case study
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        className="page-width section approach"
        aria-labelledby="approach-title"
      >
        <h2 id="approach-title">The details are the work.</h2>
        <div>
          <p>
            I care about what happens after the happy path: the slow request,
            the unexpected response, the workflow that takes one click too many.
          </p>
          <p>
            My work spans customer-facing products, connected devices, staffing
            platforms, and college recruiting. The common thread is connecting a
            useful interface to dependable services.
          </p>
        </div>
      </section>

      <section
        className="page-width section"
        aria-labelledby="skills-title"
      >
        <h2 id="skills-title" className="section-title">
          <Icon name="layers" />
          Skills
        </h2>
        <div className="columns skills">
          {profile.skills.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="meta education">{profile.education}</p>
      </section>

      <section
        className="page-width section"
        aria-labelledby="side-projects-title"
      >
        <h2 id="side-projects-title" className="section-title">
          <Icon name="code" />
          Side projects
        </h2>
        <ul className="side-projects">
          <li>
            <a className="link" href="https://link-sprout.web.app">
              Link Sprout
            </a>{" "}
            <span>
              A single home for professional links. SvelteKit, TypeScript,
              Tailwind CSS, Firebase.
            </span>{" "}
            <a className="link" href="https://github.com/ixaxtav/link-sprout">
              Source
            </a>
          </li>
        </ul>
      </section>

      <section
        id="contact"
        className="contact"
        aria-labelledby="contact-title"
      >
        <div className="page-width">
          <h2 id="contact-title" className="section-title">
            <Icon name="mail" />
            Contact
          </h2>
          <p className="contact-lead">
            Have a role, a product, or a difficult problem in mind? Let’s talk.
          </p>
          <div className="contact-links">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="link" href={profile.linkedin}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
