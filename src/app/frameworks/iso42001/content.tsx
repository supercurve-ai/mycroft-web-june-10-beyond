import type { FrameworkPageData } from "../_shared/framework-page";
import { adamWeave } from "../_shared/testimonials";

const Iso42001 = ({ children = "ISO 42001" }: { children?: string }) => (
  <span className="whitespace-nowrap">{children}</span>
);

export const iso42001: FrameworkPageData = {
  meta: {
    path: "/frameworks/iso42001",
    title: "Mycroft Frameworks | ISO 42001 compliance, built for AI governance",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you implement responsible AI practices and meet ISO 42001 requirements.",
    image: "/assets/meta/frameworks-iso42001-meta-v1.jpg",
  },
  hero: {
    title: <><Iso42001 /> compliance, built for AI governance</>,
    dek: <>Mycroft’s Risk Operations Center removes the operational burden, helping you implement responsible AI practices and meet <Iso42001 /> requirements.</>,
    badge: { src: "/assets/badges/iso42-badge.svg", alt: "" },
    whyTitle: <>Why <Iso42001 /> matters to you</>,
    whyDek: <><Iso42001 /> provides a framework for managing AI systems responsibly, addressing risk, transparency, and governance.</>,
    features: [
      {
        icon: "/assets/icons/seal-icon.svg",
        title: "Responsible AI practices",
        copy: "Ensure your AI systems are developed and used ethically and transparently.",
      },
      {
        icon: "/assets/icons/folder-icon.svg",
        title: "Risk management for AI",
        copy: "Identify and mitigate risks associated with AI models and data.",
      },
      {
        icon: "/assets/icons/datalock-icon.svg",
        title: "Regulatory readiness",
        copy: "Prepare for emerging AI regulations and standards globally.",
      },
    ],
  },
  solutions: {
    heading: <>Mycroft’s AI platform solutions for <Iso42001 /></>,
    dek: "A unified platform designed to operationalize AI governance requirements without adding internal workload.",
    cards: [
      {
        title: "App security",
        copy: "Improve application security by identifying vulnerabilities, monitoring configurations, and supporting secure development practices across your software environment.",
        img: { base: "app-security", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Custom controls",
        copy: "Create and manage custom security controls tailored to your organization’s operational, regulatory, and customer requirements while simplifying compliance mapping across frameworks.",
        img: { base: "custom-controls", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Policy center",
        copy: "Centralize policies, approvals, procedures, and compliance documentation in one secure location with version control and employee acknowledgment tracking.",
        img: { base: "policy-center", sizes: "(max-width: 1360px) 100vw, 1360px" },
      },
    ],
  },
  grid: {
    heading: <>Additional features for <Iso42001 /></>,
    dek: "Integrated capabilities to manage AI governance and risk.",
    tiles: [
      { title: "Risk assessment", copy: <>Identify and prioritize security risks<br /></> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      {
        title: "Support and live chat",
        copy: "Real-time assistance for security issues",
        nodeId: "w-node-_6f7e722d-ff3f-dcad-9216-5980739986cc-1d972c65",
        oddLastChild: true,
      },
      { title: "Automatic evidence collection", copy: "Gathers and stores evidence" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      { title: "Security training", copy: "Interactive employee cybersecurity education" },
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
    ],
  },
  testimonial: adamWeave,
  unlock: {
    blurb: <>Achieve <Iso42001 /> compliance with Mycroft and take advantage of the head start gained in other industry frameworks.</>,
    dials: [
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024deb018a84831eff1a49_Compliance-Dial_25.json" },
      { href: "/frameworks/gdpr", label: "GDPR", lottie: "/lottie/6a024deb9a47cda7c321c5a3_Compliance-Dial_45.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb4cd221655fea0562_Compliance-Dial_70.json" },
    ],
  },
  faq: {
    dek: <>Answers that help customers with <Iso42001 /> compliance</>,
    items: [
      {
        question: <>What is <Iso42001>ISO 42001?</Iso42001></>,
        answer: <><Iso42001 /> is a framework for managing artificial intelligence systems responsibly, focusing on governance, risk, and transparency.</>,
      },
      {
        question: <>Who needs <Iso42001>ISO 42001?</Iso42001></>,
        answer: "Organizations developing or using AI systems that need to demonstrate responsible AI practices and prepare for emerging regulations.",
      },
      {
        question: <>What does <Iso42001 /> cover?</>,
        answer: "It covers AI risk management, model governance, data usage, and oversight of AI systems.",
      },
      {
        question: <>Is <Iso42001 /> required?</>,
        answer: "While not yet mandatory, it is becoming increasingly important as governments introduce AI regulations.",
      },
      {
        question: <>How does Mycroft help with <Iso42001>ISO 42001?</Iso42001></>,
        answer: "Mycroft helps operationalize AI governance by managing policies, controls, and evidence so your organization can demonstrate responsible AI practices.",
      },
    ],
  },
  ctaVariant: "fireplace",
};
