import type { FrameworkPageData } from "../_shared/FrameworkPage";
import { adamWeave } from "../_shared/testimonials";

export const pipeda: FrameworkPageData = {
  meta: {
    title: "Mycroft Frameworks | PIPEDA compliance, built for Canadian businesses",
    description: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet PIPEDA requirements and manage personal data responsibly at scale.",
    image: "/assets/meta/frameworks-pipeda-meta-v1.jpg",
  },
  hero: {
    title: "PIPEDA compliance, built for Canadian businesses",
    dek: "Mycroft’s Risk Operations Center removes the operational burden, helping you meet PIPEDA requirements and manage personal data responsibly at scale.",
    badge: { src: "/assets/badges/pipeda-badge-2.svg", alt: "" },
    whyTitle: "Why PIPEDA matters to you",
    whyDek: "PIPEDA compliance ensures responsible data handling, builds customer trust, and protects your organization from regulatory and reputational risk.",
    features: [
      {
        icon: "/assets/icons/warning-icon.svg",
        title: "Legal and regulatory obligation",
        copy: "PIPEDA governs how organizations collect, use, and disclose personal information in Canada. Compliance reduces risk of investigations, penalties, and enforcement actions.",
      },
      {
        icon: "/assets/icons/checkmark-icon.svg",
        title: "Customer trust and transparency",
        copy: "Customers expect clear data practices and control over their information. PIPEDA compliance strengthens credibility and supports long-term relationships.",
      },
      {
        icon: "/assets/icons/markets-icon.svg",
        title: "Business and partnership readiness",
        copy: "Organizations working with enterprise clients or handling sensitive data are expected to demonstrate strong privacy practices aligned with PIPEDA.",
      },
    ],
  },
  solutions: {
    heading: "Mycroft’s AI platform solutions for PIPEDA",
    dek: "A unified platform designed to operationalize PIPEDA requirements without adding internal workload.",
    cards: [
      {
        title: "App security",
        copy: "Improve application security by identifying vulnerabilities, monitoring configurations, and supporting secure development practices across your software environment.",
        img: { base: "app-security", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Support and live chat",
        copy: "Access live support and hands-on guidance from compliance and security specialists to resolve issues quickly and keep your compliance program moving forward.",
        img: { base: "support-and-live-chat", sizes: "(max-width: 479px) 100vw, 680px", width: 680 },
      },
      {
        title: "Security training",
        copy: "Deliver security awareness and compliance training programs that help employees reduce human risk while supporting audit and regulatory requirements.",
        img: { base: "security-training", sizes: "(max-width: 1360px) 100vw, 1360px" },
      },
    ],
  },
  grid: {
    heading: "Additional features for PIPEDA",
    dek: "Mycroft’s Risk Operations Center provides integrated capabilities to manage privacy, security, and compliance at scale.",
    tiles: [
      { title: "Risk assessment", copy: <>Identify and prioritize security risks<br /></> },
      { title: "Cloud security", copy: <>Protect cloud infrastructure<br />and services</> },
      { title: "Risk insight reports", copy: "Delivers reports prioritizing risks, actioned by Mycroft Agents" },
      { title: "Security questionnaires", copy: "Streamline vendor security assessments" },
      { title: "AI policy generator", copy: "Produce and iterate clear, auditable policy documents" },
      { title: "Custom controls", copy: "Create controls and tests tailored to your journey" },
      { title: "Third party risk management", copy: "Assess and monitor vendor risk" },
      { title: "Policy center", copy: <>Centralized, versioned compliance<br />policies</> },
      {
        title: "Automatic evidence collection",
        copy: "Gathers and stores evidence",
        nodeId: "w-node-f8b50be1-53bf-706e-0f7d-77d4881b70b1-90845d46",
        oddLastChild: true,
      },
    ],
  },
  testimonial: adamWeave,
  unlock: {
    blurb: "Achieve PIPEDA compliance with Mycroft and take advantage of the head start gained in other industry frameworks.",
    dials: [
      { href: "/frameworks/gdpr", label: "GDPR", lottie: "/lottie/6a024deb258a325bf770f90a_Compliance-Dial_80.json" },
      { href: "/frameworks/soc2", label: "SOC 2", lottie: "/lottie/6a024deb4cd221655fea0562_Compliance-Dial_70.json" },
      { href: "/frameworks/iso27001", label: "ISO 27001", lottie: "/lottie/6a024deb6496e3c316c4eb82_Compliance-Dial_30.json" },
    ],
  },
  faq: {
    dek: "Answers that help customers with PIPEDA compliance",
    items: [
      {
        question: "What is PIPEDA?",
        answer: "PIPEDA (Personal Information Protection and Electronic Documents Act) is Canada’s federal privacy law that governs how organizations collect, use, and disclose personal information.",
      },
      {
        question: "Who needs to comply with PIPEDA?",
        answer: "Most private-sector organizations in Canada that handle personal information in the course of commercial activities.",
      },
      {
        question: "What are the key principles of PIPEDA?",
        answer: "PIPEDA is based on principles such as accountability, consent, limiting collection, safeguarding information, and openness.",
      },
      {
        question: "What is considered personal information under PIPEDA?",
        answer: "Any information about an identifiable individual, including names, contact details, financial data, and other identifying information.",
      },
      {
        question: "What are the consequences of non-compliance?",
        answer: "Non-compliance can result in investigations, reputational damage, and legal consequences, especially as enforcement continues to evolve.",
      },
      {
        question: "How is PIPEDA different from GDPR?",
        answer: "PIPEDA is principles-based and less prescriptive than GDPR, but both focus on protecting personal data and ensuring accountability.",
      },
    ],
  },
  ctaVariant: "lamp",
};
