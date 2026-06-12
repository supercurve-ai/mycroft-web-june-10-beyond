import { FaqItem } from "@/components/accordion";
import { AuditHero } from "./audit-hero";
import { ComplianceCarousel } from "./compliance-carousel";
import type { ProductSubpageContent } from "../_shared/product-subpage";

/** Everything page-specific about /product/audit-and-compliance. */
export const auditAndComplianceContent: ProductSubpageContent = {
  hero: <AuditHero />,
  benefits: <ComplianceCarousel />,
  slides: [
    {
      heading: "Frameworks dashboard",
      body: "Our security frameworks dashboard offers a clear view of various security frameworks and their completion statuses. Track progress across standards like SOC 2, GDPR, HIPAA, and ISO 27001 to ensure compliance with industry requirements.",
      image: {
        src: "/assets/screenshots/product-frameworks.webp",
        srcSet:
          "/assets/screenshots/product-frameworks-p-500.webp 500w, /assets/screenshots/product-frameworks-p-800.webp 800w, /assets/screenshots/product-frameworks-p-1080.webp 1080w, /assets/screenshots/product-frameworks.webp 1352w",
        sizes: "(max-width: 479px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Custom controls",
      body: "Our platform lets users create custom security controls with Mycroft AI, enabling GRC engineers to design unique security measures beyond standard compliance. This feature addresses your organization's specific risks, enhancing your security posture compared to competitors.",
      image: {
        src: "/assets/screenshots/product-controls.webp",
        srcSet:
          "/assets/screenshots/product-controls-p-500.webp 500w, /assets/screenshots/product-controls-p-800.webp 800w, /assets/screenshots/product-controls-p-1080.webp 1080w, /assets/screenshots/product-controls.webp 1352w",
        sizes: "(max-width: 479px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Automated tests and evidence",
      body: "Our platform automatically generates tailored tests for your custom controls and seamlessly collects evidence, simplifying compliance validation and ensuring your controls are consistently verified without manual effort.",
      image: {
        src: "/assets/screenshots/product-automation.webp",
        srcSet:
          "/assets/screenshots/product-automation-p-500.webp 500w, /assets/screenshots/product-automation-p-800.webp 800w, /assets/screenshots/product-automation-p-1080.webp 1080w, /assets/screenshots/product-automation.webp 1352w",
        sizes: "(max-width: 479px) 100vw, 676px",
        width: 676,
      },
    },
  ],
  platform: {
    heading: "Accelerate your path to compliance with our advanced features",
    dek: "Our platform accelerates compliance through customizable controls, real-time dashboards, and streamlined workflows – enabling efficient and rapid growth.",
    items: [
      {
        img: {
          src: "/assets/screenshots/features-img1.webp",
          srcSet: "/assets/screenshots/features-img1-p-500.webp 500w, /assets/screenshots/features-img1-p-800.webp 800w, /assets/screenshots/features-img1-p-1080.webp 1080w, /assets/screenshots/features-img1.webp 1128w",
          width: "564",
          sizes: "(max-width: 479px) 100vw, 564px",
        },
        title: "Integrations",
        body: "Connects with existing tools to automate data collection and speed up compliance efforts.",
      },
      {
        img: {
          src: "/assets/screenshots/features-img2.webp",
          srcSet: "/assets/screenshots/features-img2-p-500.webp 500w, /assets/screenshots/features-img2-p-800.webp 800w, /assets/screenshots/features-img2-p-1080.webp 1080w, /assets/screenshots/features-img2.webp 1125w",
          width: "562.5",
          sizes: "(max-width: 479px) 100vw, 563px",
        },
        title: "Monitoring",
        body: "Provides real-time alerts to identify and fix issues quickly, keeping you on track.",
      },
      {
        img: {
          src: "/assets/screenshots/features-img3.webp",
          srcSet: "/assets/screenshots/features-img3-p-500.webp 500w, /assets/screenshots/features-img3-p-800.webp 800w, /assets/screenshots/features-img3-p-1080.webp 1080w, /assets/screenshots/features-img3.webp 1128w",
          width: "564",
          sizes: "(max-width: 479px) 100vw, 564px",
        },
        title: "Remediation",
        body: "Automates issue resolution for fast, efficient compliance without delays.",
      },
    ],
  },
  pullquote: {
    labelTheme: "lavender",
    img: {
      src: "/assets/customers/jorge-cropped-mono-img.webp",
      srcSet: "/assets/customers/jorge-cropped-mono-img-p-500.webp 500w, /assets/customers/jorge-cropped-mono-img.webp 600w",
      sizes: "215px",
    },
    quote: "With Mycroft, they have a deep expertise in security, which is not a feature but a core foundation of their platform.”",
    name: "Jorge Ferreiro",
    role: "CEO of Smashsend",
    logo: { src: "/assets/logos/smashsend-logo-mono.svg" },
  },
  faq: (
    <>
      <FaqItem question={<>What are the primary objectives of a cybersecurity audit?
                <br /></>} first>
        The primary objectives include assessing the effectiveness of security controls, identifying vulnerabilities, ensuring compliance with regulations and standards, and improving overall risk management practices.
      </FaqItem>
      <FaqItem question="How can our organization prepare for a cybersecurity audit?">
        Preparation can involve conducting internal assessments, ensuring all documentation is up-to-date, training staff on security policies, and reviewing compliance with relevant regulations. It’s also helpful to ensure that all security controls are functioning and that any identified issues are addressed before the audit.
      </FaqItem>
      <FaqItem question="What is the difference between a compliance audit and a security audit?">
        A compliance audit focuses on assessing adherence to specific laws, regulations, or standards, while a security audit examines the overall effectiveness of security measures and practices in protecting information systems and data from threats.
      </FaqItem>
      <FaqItem question="What regulations and standards should our organization be compliant with?">
        This depends on the industry and the type of data being processed. Common standards include GDPR, HIPAA, PCI DSS, and NIST frameworks. Organizations should assess their regulatory landscape and ensure compliance with applicable requirements.
      </FaqItem>
      <FaqItem question="How can we effectively communicate audit findings to stakeholders?">
        Effective communication involves presenting findings in a clear, concise manner, highlighting both risks and recommended actions. Use visual aids, such as charts and dashboards, to convey the state of compliance and security clearly, and tailor the message based on the audience's technical understanding and interests.
      </FaqItem>
      <FaqItem question="What steps should we take if we fail an audit?" last>
        If an audit reveals non-compliance or vulnerabilities, organizations should develop an action plan to address the issues identified. This includes remediating the findings, implementing necessary changes to policies and controls, and scheduling follow-up reviews to ensure compliance improvements are sustained.
      </FaqItem>
    </>
  ),
  ctaVariant: "lamp",
};
