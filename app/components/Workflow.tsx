import type { Project } from "@/lib/projects";

export function Workflow({ project }: { project: Project }) {
  return (
    <figure className="workflow">
      <ol className="workflow-steps">
        {project.diagram.map((step, index) => (
          <li key={step.label}>
            <span className="step-index">0{index + 1}</span>
            <strong>{step.label}</strong>
            <span>{step.detail}</span>
          </li>
        ))}
      </ol>
      <figcaption>Conceptual workflow, no customer data</figcaption>
    </figure>
  );
}
