import type { FrameworkPageData } from "../_shared/FrameworkPage";
import { jorgeSmashsend } from "../_shared/testimonials";

export const gdpr: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | GDPR compliance, built for real-world execution",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you achieve and maintain GDPR compliance with confidence.",
    image: "/assets/meta/frameworks-gdpr-meta-v1.jpg",
  },
  hero: {
    title: "GDPR compliance, built for real-world execution",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you achieve and maintain GDPR compliance with confidence.",
    badge: { src: "/assets/badges/gdpr-badge-2.svg", alt: "" },
    whyTitle: "Why GDPR matters to you",
    whyDek: "GDPR compliance demonstrates your commitment to data privacy, reduces regulatory risk, and enables you to operate confidently in global markets.",
    features: [
      {
        icon: "/assets/icons/warning-icon.svg",
        title: "Regulatory and financial risk",
        copy: "GDPR violations can result in fines of up to 4% of global annual revenue. Strong compliance reduces exposure and protects your business.",
      },
      {
        icon: "/assets/icons/checkmark-icon.svg",
        title: "Customer trust and data protection",
        copy: "Customers expect transparency and control over their data. GDPR compliance strengthens trust and supports enterprise sales.",
      },
      {
        icon: "/assets/icons/markets-icon.svg",
        title: "Global market access",
        copy: "GDPR is the standard for handling EU data. Compliance enables expansion into European markets and partnerships.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for GDPR",
    dek: "A unified platform designed to operationalize GDPR requirements without adding internal workload.",
    cards: [
      {
        title: "Risk assessment",
        copy: "Identify, evaluate, and track organizational risks through a centralized platform designed to simplify remediation planning, ownership tracking, and ongoing risk management.",
        img: { base: "risk-assessment", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
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
    ],
  },
  grid: {
    heading: "Additional features for GDPR",
    dek: "Mycroft’s Risk Operations Center provides integrated capabilities to manage privacy, security, and compliance at scale.",
    tiles: [
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "Custom controls", copy: "Create controls and tests tailored to your journey" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "Automatic evidence collection", copy: "Gathers and stores evidence" },
      { title: "Security training", copy: <>Interactive employee cybersecurity<br />education</> },
      {
        title: "Policy center",
        copy: <>Centralized, versioned compliance<br />policies</>,
        nodeId: "w-node-_4afd8643-4fd1-646b-2573-ed51cc410131-0667ae30",
        oddLastChild: true,
      },
    ],
  },
  testimonial: jorgeSmashsend,
  unlock: {
    blurb: "Achieve GDPR compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024debde8e8bdd03fd4005_Compliance-Dial_75.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024debb2691dc79f35fad4_Compliance-Dial_50.json" },
      { href: "/frameworks/cmmc", label: "CMMC", lottie: "/lottie/6a024deb827e31fd875d4056_Compliance-Dial_40.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with GDPR compliance",
    items: [
      {
        question: "What is GDPR?",
        answer: "GDPR (General Data Protection Regulation) is a European Union law that governs how organizations collect, use, and protect personal data of EU residents.",
      },
      {
        question: "Who needs to comply with GDPR?",
        answer: "Any organization that processes personal data of individuals in the EU, regardless of where the company is located.",
      },
      {
        question: "What are the key requirements of GDPR?",
        answer: "GDPR requires lawful data processing, clear consent, data subject rights management, data protection by design, and strong security measures.",
      },
      {
        question: "What are data subject rights under GDPR?",
        answer: "Individuals have the right to access, correct, delete, and transfer their personal data, as well as restrict or object to its processing.",
      },
      {
        question: "What are the penalties for non-compliance?",
        answer: "GDPR fines can reach up to €20 million or 4% of global annual revenue, whichever is higher.",
      },
      {
        question: "How long does it take to become GDPR compliant?",
        answer: "Timelines vary based on your current data practices, but most organizations require several months to fully operationalize compliance.",
      },
      {
        question: "How does Mycroft help with GDPR?",
        answer: "Mycroft helps you manage data mapping, consent, policies, and data subject requests while automating evidence collection so your team stays compliant without added operational burden.",
      },
    ],
  },
  ctaVariant: "fireplace",
};
