import type { FrameworkPageData } from "../_shared/FrameworkPage";
import { jorgeSmashsend } from "../_shared/testimonials";

export const fedramp: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | FedRAMP compliance, built for cloud providers",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you achieve FedRAMP authorization and operate securely in the public sector.",
    image: "/assets/meta/frameworks-fedramp-meta-v1.jpg",
  },
  hero: {
    title: "FedRAMP compliance, built for cloud providers",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you achieve FedRAMP authorization and operate securely in the public sector.",
    badge: { src: "/assets/badges/fedramp-badge-2.svg", alt: "" },
    whyTitle: "Why FedRAMP matters to you",
    whyDek: "FedRAMP compliance is required for cloud service providers working with U.S. federal agencies, ensuring consistent security standards.",
    features: [
      {
        icon: "/assets/icons/markets-icon.svg",
        title: "Access federal markets",
        copy: "FedRAMP authorization is mandatory to sell cloud services to government agencies.",
      },
      {
        icon: "/assets/icons/seal-icon.svg",
        title: "Standardized security framework",
        copy: "Align with NIST-based controls to demonstrate strong security posture.",
      },
      {
        icon: "/assets/icons/stamp.svg",
        title: "Accelerate procurement cycles",
        copy: "Pre-approved compliance reduces friction in government sales.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for FedRAMP",
    dek: "A unified platform designed to operationalize FedRAMP requirements without adding internal workload.",
    cards: [
      {
        title: "Third party risk management",
        copy: "Manage third-party vendor risk assessments, documentation, and ongoing monitoring through a centralized platform built to improve visibility and reduce risk exposure.",
        img: { base: "tprm", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Policy center",
        copy: "Centralize policies, approvals, procedures, and compliance documentation in one secure location with version control and employee acknowledgment tracking.",
        img: { base: "policy-center", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Security questionnaires",
        copy: "Streamline customer and vendor security questionnaire responses with centralized documentation, reusable answers, and faster collaboration across teams.",
        img: { base: "security-questionnaires", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
    ],
  },
  grid: {
    heading: "Additional features for FedRAMP",
    dek: "Integrated capabilities to support authorization and continuous monitoring.",
    tiles: [
      { title: "Risk assessment", copy: "Identify and prioritize security risks" },
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "App security", copy: "Secure application code and runtime" },
      { title: "Support and live chat", copy: "Real-time assistance for security issues" },
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "Security training", copy: <>Interactive employee cybersecurity<br />education</> },
      { title: "Custom controls", copy: "Create controls and tests tailored to your journey" },
      {
        title: "Automatic evidence collection",
        copy: "Gathers and stores evidence",
        nodeId: "w-node-_9ffdca44-32f0-4f95-e450-6a4dcac243b8-f5893c38",
        oddLastChild: true,
      },
    ],
  },
  testimonial: jorgeSmashsend,
  unlock: {
    blurb: "Achieve FedRAMP compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/cmmc", label: "CMMC", lottie: "/lottie/6a024debf8f4c2f14b879e15_Compliance-Dial_60.json" },
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024deb018a84831eff1a49_Compliance-Dial_25.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb1effe22026547e2f_Compliance-Dial_15.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with FedRAMP compliance",
    items: [
      {
        question: "What is FedRAMP?",
        answer: "FedRAMP (Federal Risk and Authorization Management Program) is a U.S. government framework that standardizes security requirements for cloud service providers working with federal agencies.",
      },
      {
        question: "Who needs FedRAMP authorization?",
        answer: "Any cloud provider selling services to U.S. federal agencies must obtain FedRAMP authorization.",
      },
      {
        question: "What is the difference between FedRAMP and NIST?",
        answer: "FedRAMP is based on NIST SP 800-53 controls but includes additional requirements for authorization and continuous monitoring.",
      },
      {
        question: "How long does FedRAMP authorization take?",
        answer: "FedRAMP can take 6–18 months depending on complexity and readiness.",
      },
      {
        question: "How does Mycroft help with FedRAMP?",
        answer: "Mycroft streamlines documentation, control implementation, and ongoing monitoring, helping you move faster toward authorization and maintain compliance over time.",
      },
    ],
  },
  ctaVariant: "lamp",
};
