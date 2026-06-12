import type { FrameworkPageData } from "../_shared/FrameworkPage";
import { adamWeave } from "../_shared/testimonials";

export const hipaa: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | HIPAA compliance, built for healthcare organizations",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet HIPAA requirements and protect sensitive health information with confidence.",
    image: "/assets/meta/frameworks-hipaa-meta-v1.jpg",
  },
  hero: {
    title: "HIPAA compliance, built for healthcare organizations",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet HIPAA requirements and protect sensitive health information with confidence.",
    badge: { src: "/assets/badges/hipaa-badge-2.svg", alt: "" },
    whyTitle: "Why HIPAA matters to you",
    whyDek: "HIPAA compliance ensures the protection of protected health information (PHI), reduces regulatory risk, and enables you to work with healthcare providers and partners.",
    features: [
      {
        icon: "/assets/icons/userlock-icon.svg",
        title: "Protect sensitive health data",
        copy: "HIPAA establishes strict safeguards for PHI, reducing the risk of breaches and unauthorized access.",
      },
      {
        icon: "/assets/icons/warning-icon.svg",
        title: "Avoid costly penalties",
        copy: "HIPAA violations can result in significant financial penalties and reputational damage. Strong compliance reduces exposure.",
      },
      {
        icon: "/assets/icons/hands-icon.svg",
        title: "Enable healthcare partnerships",
        copy: "Healthcare providers, payers, and partners require HIPAA compliance before engaging with vendors and platforms.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for HIPAA",
    dek: "A unified platform designed to operationalize HIPAA requirements without adding internal workload.",
    cards: [
      {
        title: "Third party risk management",
        copy: "Manage third-party vendor risk assessments, documentation, and ongoing monitoring through a centralized platform built to improve visibility and reduce risk exposure.",
        img: { base: "tprm", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Cloud Security",
        copy: "Monitor cloud environments for security gaps, compliance risks, and misconfigurations with continuous visibility designed to strengthen your overall cloud security posture.",
        img: { base: "cloud-security", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "AI policy generator",
        copy: "Generate tailored security and compliance policies in minutes using AI-powered automation designed to align with industry frameworks, reduce manual work, and accelerate audit readiness.",
        img: { base: "ai-policy-generator", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
    ],
  },
  grid: {
    heading: "Additional features for HIPAA",
    dek: "Integrated capabilities to manage privacy, security, and compliance across healthcare environments.",
    tiles: [
      { title: "Risk assessment", copy: "Identify and prioritize security risks" },
      { title: "Automatic evidence collection", copy: "Gathers and stores evidence" },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "Security training", copy: <>Interactive employee cybersecurity<br />education</> },
      { title: "Policy center", copy: <>Centralized, versioned compliance<br />policies</> },
      {
        title: "Custom controls",
        copy: "Create controls and tests tailored to your journey",
        nodeId: "w-node-f16271c7-d4eb-66ab-7a83-2cab94f1a188-23d6f4b4",
        oddLastChild: true,
      },
    ],
  },
  testimonial: adamWeave,
  unlock: {
    blurb: "Achieve HIPAA compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb018a84831eff1a49_Compliance-Dial_25.json" },
      { href: "/frameworks/iso42001", label: "ISO 42001", lottie: "/lottie/69ebcb3ae646a22194c4af4d_Compliance-Dial_65.json" },
      { href: "/frameworks/cmmc", label: "CMMC", lottie: "/lottie/6a024deb473b0519f94adf43_Compliance-Dial_20.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with HIPAA compliance",
    items: [
      {
        question: "What is HIPAA?",
        answer: "HIPAA (Health Insurance Portability and Accountability Act) is a U.S. regulation that governs the protection of protected health information (PHI).",
      },
      {
        question: "Who needs to comply with HIPAA?",
        answer: "Healthcare providers, payers, and any vendors or partners that handle PHI.",
      },
      {
        question: "What is PHI?",
        answer: "Protected health information includes any data that identifies a patient and relates to their health, treatment, or payment.",
      },
      {
        question: "What are HIPAA safeguards?",
        answer: "HIPAA requires administrative, physical, and technical safeguards to protect sensitive health data.",
      },
      {
        question: "How does Mycroft help with HIPAA?",
        answer: "Mycroft helps you implement safeguards, manage policies, and maintain audit readiness without overloading your team.",
      },
    ],
  },
  ctaVariant: "lamp",
};
