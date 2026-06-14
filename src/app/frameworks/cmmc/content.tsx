import type { FrameworkPageData } from "../_shared/framework-page";
import { adamWeave } from "../_shared/testimonials";

export const cmmc: FrameworkPageData = {
  meta: {
    path: "/frameworks/cmmc",
    title: "Mycroft Frameworks | CMMC compliance, built for defense contractors",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet all CMMC requirements and secure DoD contracts with confidence.",
    image: "/assets/meta/frameworks-cmmc-meta-v1.jpg",
  },
  hero: {
    title: "CMMC compliance, built for defense contractors",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet all CMMC requirements and secure DoD contracts with confidence.",
    badge: { src: "/assets/badges/cmmc-badge-2.svg", alt: "" },
    whyTitle: "Why CMMC matters to you",
    whyDek: "CMMC compliance is required to work with the U.S. Department of Defense and its contractors, ensuring your organization protects controlled unclassified information.",
    features: [
      {
        icon: "/assets/icons/stamp.svg",
        title: "Protect contract eligibility",
        copy: "Without CMMC compliance, you cannot bid on or maintain DoD contracts. Certification at Level 1, 2, or 3 is required depending on the sensitivity of the work.",
      },
      {
        icon: "/assets/icons/lock-icon.svg",
        title: "Safeguard sensitive data",
        copy: "CMMC enforces strict controls to protect controlled unclassified information from breaches and unauthorized access.",
      },
      {
        icon: "/assets/icons/hands-icon.svg",
        title: "Strengthen competitive positioning",
        copy: "Organizations that achieve compliance faster gain an advantage in securing and retaining government contracts.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for CMMC",
    dek: "A unified platform designed to operationalize CMMC requirements without adding internal workload.",
    cards: [
      {
        title: "Risk assessment",
        copy: "Identify, evaluate, and track organizational risks through a centralized platform designed to simplify remediation planning, ownership tracking, and ongoing risk management.",
        img: { base: "risk-assessment", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Cloud Security",
        copy: "Monitor cloud environments for security gaps, compliance risks, and misconfigurations with continuous visibility designed to strengthen your overall cloud security posture.",
        img: { base: "cloud-security", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Security training",
        copy: "Deliver security awareness and compliance training programs that help employees reduce human risk while supporting audit and regulatory requirements.",
        img: { base: "security-training", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
    ],
  },
  grid: {
    heading: "Additional features for CMMC",
    dek: "Integrated capabilities to manage security, compliance, and risk across your organization.",
    tiles: [
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "Custom controls", copy: "Create controls and tests tailored to your journey" },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      { title: "Policy center", copy: <>Centralized, versioned compliance<br />policies</> },
      {
        title: "Automatic evidence collection",
        copy: "Gathers and stores evidence",
        nodeId: "w-node-_1b2fe5c6-a70e-9c4b-3dd7-973228bc51e1-2b3ece4e",
        oddLastChild: true,
      },
    ],
  },
  testimonial: adamWeave,
  unlock: {
    blurb: "Achieve CMMC compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/fedramp", label: "FedRAMP", lottie: "/lottie/6a024deb9a47cda7c321c5a3_Compliance-Dial_45.json" },
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024deb01ab375d7de27c3b_Compliance-Dial_85.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb473b0519f94adf43_Compliance-Dial_20.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with CMMC compliance",
    items: [
      {
        question: "What is CMMC?",
        answer: "CMMC (Cybersecurity Maturity Model Certification) is a framework required by the U.S. Department of Defense to ensure contractors protect federal contract information and controlled unclassified information.",
      },
      {
        question: "What are the CMMC levels?",
        answer: <>CMMC has three levels:<br />Level 1 focuses on basic safeguarding of federal contract information<br />Level 2 aligns with NIST SP 800-171 for controlled unclassified information<br />Level 3 adds advanced security requirements for higher-risk environments</>,
      },
      {
        question: "Do we need CMMC certification?",
        answer: "If you work with the Department of Defense or its contractors, you must achieve the required CMMC level to bid on or maintain contracts.",
      },
      {
        question: "How long does CMMC certification take?",
        answer: "Timelines vary by level and readiness, but most organizations take several months. With the right approach, timelines can be significantly reduced.",
      },
      {
        question: "How does Mycroft help with CMMC?",
        answer: "Mycroft supports compliance across Levels 1, 2, and 3 by handling policy creation, control implementation, and evidence collection so your team is not burdened with execution.",
      },
    ],
  },
  ctaVariant: "fireplace",
};
