import type { FrameworkPageData } from "../_shared/framework-page";
import { jorgeSmashsend } from "../_shared/testimonials";

export const cpra: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | CPRA compliance, built on CCPA, ready for what’s next",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet CPRA requirements and manage consumer data with confidence.",
    image: "/assets/meta/frameworks-crpa-meta-v2.jpg",
  },
  hero: {
    title: "CPRA compliance, built on CCPA, ready for what’s next",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet CPRA requirements and manage consumer data with confidence.",
    badge: { src: "/assets/badges/crpa-badge-2.svg", alt: "" },
    whyTitle: "Why CPRA/CCPA matters to you",
    whyDek: "CPRA builds on the foundation of CCPA, expanding consumer rights, increasing enforcement, and introducing stricter requirements for data governance and accountability.",
    features: [
      {
        icon: "/assets/icons/datalock-icon.svg",
        title: "Expanded beyond CCPA",
        copy: "CPRA enhances CCPA by introducing new rights such as correction of personal data, limits on sensitive data use, and stronger obligations for businesses handling consumer information.",
      },
      {
        icon: "/assets/icons/eye-icon.svg",
        title: "Stronger enforcement and accountability",
        copy: "The California Privacy Protection Agency enforces CPRA requirements, increasing regulatory scrutiny and the need for operational readiness.",
      },
      {
        icon: "/assets/icons/settings.svg",
        title: "Operational complexity at scale",
        copy: "Managing consumer rights, disclosures, and data usage across systems requires structured processes beyond what CCPA alone demanded.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for CPRA",
    dek: "A unified platform designed to operationalize both CCPA and CPRA requirements without adding internal workload.",
    cards: [
      {
        title: "Security training",
        copy: "Deliver security awareness and compliance training programs that help employees reduce human risk while supporting audit and regulatory requirements.",
        img: { base: "security-training", sizes: "(max-width: 767px) 100vw, 680px", width: 680 },
      },
      {
        title: "Automatic evidence collection",
        copy: "Automatically collect and organize audit evidence from your cloud infrastructure, apps, and systems to reduce manual tasks and maintain continuous compliance visibility.",
        img: { base: "automatic-evidence-collection", sizes: "(max-width: 767px) 100vw, 680px", width: 680 },
      },
      {
        title: "Risk assessment",
        copy: "Identify, evaluate, and track organizational risks through a centralized platform designed to simplify remediation planning, ownership tracking, and ongoing risk management.",
        img: { base: "risk-assessment", sizes: "(max-width: 767px) 100vw, 680px", width: 680 },
      },
    ],
  },
  grid: {
    heading: "Additional features for CPRA",
    dek: "Integrated capabilities to manage consumer privacy and regulatory requirements across California’s evolving framework.",
    tiles: [
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      {
        title: "Policy center",
        copy: <>Centralized, versioned compliance<br />policies</>,
        nodeId: "w-node-c19d2f72-b1b0-549e-dfe5-6457fd784c0d-3ed0707c",
        oddLastChild: true,
      },
      { title: "Custom controls", copy: "Create controls and tests tailored to your journey" },
    ],
  },
  testimonial: jorgeSmashsend,
  unlock: {
    blurb: "Achieve CPRA compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/gdpr", label: "GDPR", lottie: "/lottie/6a024debde8e8bdd03fd4005_Compliance-Dial_75.json" },
      { href: "/frameworks/pipeda", label: "PIPEDA", lottie: "/lottie/6a024deb01ab375d7de27c3b_Compliance-Dial_85.json" },
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024deb9a47cda7c321c5a3_Compliance-Dial_45.json" },
    ],
  },
  faq: {
    dek: <>Answers that help customers with <span className="whitespace-nowrap">CPRA/CCPA</span> compliance</>,
    items: [
      {
        question: "What is CPRA?",
        answer: "CPRA (California Privacy Rights Act) expands on CCPA by introducing stronger privacy protections and new consumer rights.",
      },
      {
        question: "What is the difference between CPRA and CCPA?",
        answer: "CCPA established baseline privacy rights, while CPRA enhances them with additional requirements like data correction rights, limits on sensitive data use, and stronger enforcement.",
      },
      {
        question: "Who needs to comply with CPRA?",
        answer: "Businesses that collect or process personal data of California residents and meet certain revenue or data thresholds.",
      },
      {
        question: "What are consumer rights under CPRA?",
        answer: "Consumers can access, delete, correct, and limit the use of their personal and sensitive information.",
      },
      {
        question: "How does Mycroft help with CPRA?",
        answer: "Mycroft helps you operationalize both CCPA and CPRA by managing data rights, policies, and compliance processes in one platform.",
      },
    ],
  },
  ctaVariant: "fireplace",
};
