import type { Project } from "@/lib/projects";

export function Workflow({ project }: { project: Project }) {
  return (
    <figure className={`workflow workflow-${project.color}`}>
      <div className="workflow-top">
        <span className="eyebrow">{project.company}</span>
        <span aria-hidden="true">↗</span>
      </div>
      <ol className="workflow-steps">
        {project.diagram.map((step, index) => (
          <li key={step.label}>
            <span className="step-index">0{index + 1}</span>
            <strong>{step.label}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
      <figcaption>
        Conceptual workflow <span aria-hidden="true">/</span> No customer data
      </figcaption>
    </figure>
  );
}
