import type { FrameworkPageData } from "../_shared/FrameworkPage";
import { adamWeave } from "../_shared/testimonials";

const Iso27001 = ({ children = "ISO 27001" }: { children?: string }) => (
  <span className="whitespace-nowrap">{children}</span>
);

export const iso27001: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | ISO 27001 compliance, built for global organizations",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you achieve ISO 27001 certification and strengthen your information security program.",
    image: "/assets/meta/frameworks-iso27001-meta-v1.jpg",
  },
  hero: {
    title: <><Iso27001 /> compliance, built for global organizations</>,
    dek: <>Mycroft’s Risk Operations Center removes the operational burden, helping you achieve <Iso27001 /> certification and strengthen your information security program.</>,
    badge: { src: "/assets/badges/iso27-badge.svg", alt: "" },
    whyTitle: <>Why <Iso27001 /> matters to you</>,
    whyDek: <><Iso27001 /> provides a globally recognized framework for managing information security risks and protecting sensitive data.</>,
    features: [
      {
        icon: "/assets/icons/megaphone.svg",
        title: "Global credibility",
        copy: <><Iso27001 /> certification demonstrates strong security practices to customers and partners worldwide.</>,
      },
      {
        icon: "/assets/icons/folder-icon.svg",
        title: "Structured risk management",
        copy: "Identify, assess, and mitigate information security risks systematically.",
      },
      {
        icon: "/assets/icons/datalock-icon.svg",
        title: "Enterprise readiness",
        copy: "Certification is often required to work with large organizations and international clients.",
      },
    ],
  },
  solutions: {
    heading: <>Mycroft’s AI platform solutions for <Iso27001 /></>,
    dek: <>A unified platform designed to operationalize <Iso27001 /> requirements without adding internal workload.</>,
    cards: [
      {
        title: "Custom controls",
        copy: "Create and manage custom security controls tailored to your organization’s operational, regulatory, and customer requirements while simplifying compliance mapping across frameworks.",
        img: { base: "custom-controls", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "App secruity",
        copy: "Improve application security by identifying vulnerabilities, monitoring configurations, and supporting secure development practices across your software environment.",
        img: { base: "app-security", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Support and live chat",
        copy: "Access live support and hands-on guidance from compliance and security specialists to resolve issues quickly and keep your compliance program moving forward.",
        img: { base: "support-and-live-chat", sizes: "(max-width: 1360px) 100vw, 1360px" },
      },
    ],
  },
  grid: {
    heading: <>Additional features for <Iso27001 /></>,
    dek: "Integrated capabilities to support your information security management system.",
    tiles: [
      { title: "Risk assessment", copy: <>Identify and prioritize security risks<br /></> },
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "Automatic evidence collection", copy: "Gathers and stores evidence" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      { title: "Security training", copy: "Interactive employee cybersecurity education" },
      {
        title: "Policy center",
        copy: "Centralized, versioned compliance policies",
        nodeId: "w-node-_69496a4e-1d7b-f4fe-5c19-98e703066505-ea549414",
        oddLastChild: true,
      },
    ],
  },
  testimonial: adamWeave,
  unlock: {
    blurb: <>Achieve <Iso27001 /> compliance with Mycroft and take advantage of the head start gained in other industry frameworks.</>,
    dials: [
      { href: "/frameworks/gdpr", label: "GDPR", lottie: "/lottie/69ebcb579b02affc99069e64_Compliance-Dial_55.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb5cd92f1d32fe0c3d_Compliance-Dial_90.json" },
      { href: "/frameworks/fedramp", label: "FedRAMP", lottie: "/lottie/6a024debde8e8bdd03fd3fe5_Compliance-Dial_10.json" },
    ],
  },
  faq: {
    dek: <>Answers that help customers with <Iso27001 /> compliance</>,
    items: [
      {
        question: <>What is <Iso27001>ISO 27001?</Iso27001></>,
        answer: <><Iso27001 /> is an international standard for information security management systems (ISMS), focused on managing and reducing risk.</>,
      },
      {
        question: <>Who needs <Iso27001 /> certification?</>,
        answer: <>Organizations working with enterprise or global clients often require <Iso27001 /> to demonstrate strong security practices.</>,
      },
      {
        question: "What is an ISMS?",
        answer: "An ISMS is a structured system for managing sensitive information, including policies, controls, and risk management processes.",
      },
      {
        question: <>How long does <Iso27001 /> certification take?</>,
        answer: "Typically 3–9 months depending on organizational maturity and scope.",
      },
      {
        question: <>How does Mycroft help with <Iso27001>ISO 27001?</Iso27001></>,
        answer: "Mycroft helps you build and operationalize your ISMS, manage controls, and maintain audit readiness without overwhelming internal teams.",
      },
    ],
  },
  ctaVariant: "fireplace",
};
