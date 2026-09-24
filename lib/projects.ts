export type Project = {
  slug: string;
  company: string;
  title: string;
  category: string;
  period: string;
  intro: string;
  outcome: string;
  stack: string[];
  challenge: string;
  contributions: { title: string; text: string }[];
  considerations: string;
  diagram: { label: string; detail: string }[];
};

export const projects: Project[] = [
  {
    slug: "allclear",
    company: "AllClear.ai",
    title: "Less friction. Better workflows.",
    category: "Workflow engineering & AI integration",
    period: "2024 – Present",
    intro:
      "Onboarding, qualification, and lead routing across an embedded partner app, customer portal, and backend services.",
    outcome:
      "Reduced repeated backend work and helped improve the path from lead to customer contact.",
    stack: ["React", "TypeScript", "NestJS", "Go", "Google Cloud"],
    challenge:
      "Qualification flows spanned several applications and services. Repeated backend operations slowed those flows, while different partners needed configurable ways to distribute leads.",
    contributions: [
      {
        title: "Make repeated work smaller",
        text: "I reworked Cloud Functions and NestJS qualification flows by batching rule execution, reusing authentication tokens, and consolidating Firestore writes.",
      },
      {
        title: "Make routing configurable",
        text: "I designed and implemented lead distribution with partner-specific routing and weighted allocation across providers.",
      },
      {
        title: "Give AI output a contract",
        text: "I integrated OpenAI models into a NestJS classification service with JSON response validation, error handling, request tracing, and automated API tests.",
      },
      {
        title: "Connect the operational details",
        text: "I delivered CRM document generation and e-signature workflows with live status updates, and integrated Cloud KMS encryption into applicant-data storage.",
      },
    ],
    considerations:
      "Performance, data protection, and predictable integration boundaries all matter in this work. My contributions cover both the user-facing flow and the services behind it. The descriptions here stay at the implementation-pattern level; partner rules and applicant data remain private.",
    diagram: [
      { label: "Onboard", detail: "Partner & customer apps" },
      { label: "Qualify", detail: "Validated service workflows" },
      { label: "Route", detail: "Configurable distribution" },
    ],
  },
  {
    slug: "dataremote",
    company: "DataRemote",
    title: "Device events, made useful.",
    category: "Connected devices & real-time interfaces",
    period: "2022 – 2024",
    intro:
      "Device-management interfaces that connect telecom hardware, backend services, and the people operating them.",
    outcome:
      "Connected backend device events to live interface updates and delivered local web UI with firmware engineers.",
    stack: ["React", "TypeScript", "Python", "Flask", "WebSockets", "Docker"],
    challenge:
      "Telecom device management spans hardware and software. The interface needs to surface device state while supporting the workflows exposed by the underlying services.",
    contributions: [
      {
        title: "Build close to the hardware",
        text: "I developed React and TypeScript device-management interfaces, collaborating with firmware engineers on the local web UI shipped with telecom devices.",
      },
      {
        title: "Support the workflow end to end",
        text: "I built and maintained Python/Flask APIs with SQLAlchemy for device-management workflows and packaged services with Docker.",
      },
      {
        title: "Bring state into the interface",
        text: "I implemented live device-status updates with Node.js and WebSockets, connecting backend events to the user interface.",
      },
    ],
    considerations:
      "This work sits at the boundary between firmware, API behavior, and interface design. My role involved coordinating across those boundaries rather than treating the UI as a disconnected layer. Internal device configurations and operational screenshots are not published here.",
    diagram: [
      { label: "Device", detail: "Telecom hardware" },
      { label: "Events", detail: "API & WebSocket services" },
      { label: "Interface", detail: "Live device status" },
    ],
  },
  {
    slug: "imrecruitable",
    company: "ImRecruitable",
    title: "From idea to recruiting platform.",
    category: "Founding development & product delivery",
    period: "2018 – 2020",
    intro:
      "The initial college recruiting application: athlete profiles, college discovery, and tools for coaches.",
    outcome:
      "Built and launched the initial application, including authentication, subscriptions, media, and administration.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    challenge:
      "The initial application needed to support distinct athlete and coach experiences while bringing profiles, search, subscriptions, and administrative workflows into one product.",
    contributions: [
      {
        title: "Start with the core product",
        text: "I built the initial application from scratch with React, Node.js, Express, and MongoDB, delivering athlete profiles, college search, and coach recruiting tools.",
      },
      {
        title: "Build the supporting workflows",
        text: "I implemented athlete and coach authentication, Stripe subscriptions, profile media uploads, and administrative approval workflows.",
      },
      {
        title: "Own delivery across the stack",
        text: "As founding developer, I worked across the frontend and backend to build and launch the initial recruiting application.",
      },
    ],
    considerations:
      "This case study covers the original application I built between 2018 and 2020. Bringing discovery, identity, subscriptions, and administration together gave athletes and coaches a working product and gave me ownership of delivery across the stack.",
    diagram: [
      { label: "Athletes", detail: "Profiles & discovery" },
      { label: "Platform", detail: "Identity & subscriptions" },
      { label: "Coaches", detail: "Recruiting tools" },
    ],
  },
];

export function findProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
