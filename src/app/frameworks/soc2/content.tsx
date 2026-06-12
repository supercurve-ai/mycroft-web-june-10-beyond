import type { FrameworkPageData } from "../_shared/framework-page";
import { steveIntegratrace } from "../_shared/testimonials";

const Soc2 = ({ children = "SOC 2" }: { children?: string }) => (
  <span className="whitespace-nowrap">{children}</span>
);

export const soc2: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | Proper SOC 2 compliance, accredited auditor approved",
    description: "Mycroft’s Risk Operations Center eliminates the busywork, helping you achieve SOC 2 compliance the right way.",
    image: "/assets/meta/frameworks-soc2-meta-v1.jpg",
  },
  hero: {
    title: <>Proper <Soc2 /> compliance, accredited auditor approved</>,
    dek: <>Mycroft’s Risk Operations Center eliminates the busywork, helping you achieve <Soc2 /> compliance the right way.</>,
    badge: { src: "/assets/badges/soc-badge.svg", alt: "Mycroft SOC 2 compliance badge." },
    whyTitle: "Why SOC 2 matters to you",
    whyDek: "Achieving SOC 2 compliance proves your organization takes data security, privacy, and operational controls seriously.",
    features: [
      {
        icon: "/assets/icons/megaphone.svg",
        title: "Customer and market demand",
        copy: "Many SaaS customers and enterprise buyers explicitly request SOC 2 reports as part of vendor risk assessments or procurement.",
      },
      {
        icon: "/assets/icons/stamp.svg",
        title: "Attestation by an independent CPA",
        copy: "SOC 2 is an auditor attestation (AICPA) issued by licensed CPA firms. That third‑party attestation is trusted by risk and finance teams.",
      },
      {
        icon: "/assets/icons/settings.svg",
        title: "Flexibile, criteria-based controls",
        copy: "SOC 2 lets you design controls appropriate to your environment and business risks rather than following rigid technical mandates.",
      },
    ],
  },
  solutions: {
    heading: <>Mycroft’s AI platform solutions to <Soc2 /></>,
    dek: <>A snapshot on how our platform features answer specific needs for <Soc2 /></>,
    cards: [
      {
        title: "AI policy generator",
        copy: "Generate tailored security and compliance policies in minutes using AI-powered automation designed to align with industry frameworks, reduce manual work, and accelerate audit readiness.",
        img: { base: "ai-policy-generator", sizes: "(max-width: 1360px) 100vw, 1360px" },
      },
      {
        title: "Custom controls",
        copy: "Create and manage custom security controls tailored to your organization’s operational, regulatory, and customer requirements while simplifying compliance mapping across frameworks.",
        img: { base: "custom-controls", sizes: "(max-width: 1360px) 100vw, 1360px" },
      },
      {
        title: "Automatic evidence collection",
        copy: "Automatically collect and organize audit evidence from your cloud infrastructure, apps, and systems to reduce manual tasks and maintain continuous compliance visibility.",
        img: { base: "automatic-evidence-collection", sizes: "100vw" },
      },
    ],
  },
  grid: {
    heading: <>Additional features for <Soc2 /></>,
    dek: "Mycroft’s Risk Operations Center provides the most integrated features that optimize your security and compliance posture.",
    tiles: [
      { title: "Risk assessment", copy: <>Identify and prioritize security risks<br /></> },
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      { title: "Security training", copy: <>Interactive employee cybersecurity<br />education</> },
      {
        title: "Policy center",
        copy: <>Centralized, versioned compliance<br />policies</>,
        nodeId: "w-node-_656a9537-9b07-d16e-8808-2341370145db-6fca5e94",
        oddLastChild: true,
      },
    ],
  },
  testimonial: steveIntegratrace,
  unlock: {
    blurb: "Achieve SOC 2 with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/69ebbfa0ca4351761bab59f1_Compliance-Dial_35.json" },
      { href: "/frameworks/hipaa", label: "HIPAA", lottie: "/lottie/69ebcb3ae646a22194c4af4d_Compliance-Dial_65.json" },
      { href: "/frameworks/fedramp", label: "FedRAMP", lottie: "/lottie/69ebcb579b02affc99069e64_Compliance-Dial_55.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with SOC 2 compliance",
    items: [
      {
        question: <>What is <Soc2 /> and who needs it?</>,
        answer: "SOC 2 is an independent CPA attestation that a service organization’s controls meet Trust Services Criteria (security, availability, processing integrity, confidentiality, privacy). SaaS/cloud providers, managed service providers, and any vendor that stores or processes customer data commonly pursue SOC 2 to meet buyer and contractual expectations.",
      },
      {
        question: <>What’s the difference between <Soc2 /> Type I and <Soc2 /> Type II?</>,
        answer: "Type I reports on control design at a specific point in time. Type II reports on control operating effectiveness over a period (commonly 3–12 months). Customers and enterprise buyers usually request Type II for stronger assurance.",
      },
      {
        question: <>How long and costly is <Soc2 /> compliance?</>,
        answer: "Time and cost vary by scope and maturity. Typical timelines: 1–3 months to prepare baseline controls and Type I; 6–12+ months to collect evidence for a Type II. Costs include internal effort, tooling, and external CPA audit fees; automation and focused scope lower both time and expense.",
      },
      {
        question: <>What features of a <Soc2 /> solution speed compliance?</>,
        answer: "Automated evidence collection and testing, control templates mapped to Trust Services Criteria, policy and control generators, integrations with cloud and security tooling, centralized evidence storage with tamper-evident metadata, and auditor-ready reporting — all reduce manual work and audit friction.",
      },
      {
        question: <>Will <Soc2 /> replace other regulatory requirements (PCI, HIPAA, FedRAMP)?</>,
        answer: <>No. SOC 2 provides buyer assurance but does not substitute for mandatory, prescriptive regulations like PCI or HIPAA. Use SOC 2 alongside or mapped to those frameworks where appropriate; some controls can be reused across reports.<br /></>,
      },
    ],
  },
  ctaVariant: "lamp",
};
