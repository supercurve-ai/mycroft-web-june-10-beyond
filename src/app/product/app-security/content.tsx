import { FaqItem } from "@/app/_shared/Accordion";
import { ProductHero } from "../_shared/ProductHero";
import { ProductBenefits } from "../_shared/ProductBenefits";
import type { ProductSubpageContent } from "../_shared/ProductSubpage";

/** Everything page-specific about /product/app-security. */
export const appSecurityContent: ProductSubpageContent = {
  hero: (
    <ProductHero
      theme="appsec"
      eyebrow="App Security"
      heading="Protect your apps, protect your business"
      dek="Our platform identifies vulnerabilities early, continuously monitor threats, and keeps your apps protected around the clock."
      lottieSrc="/lottie/6983ebfba8c65ffb32948f63_AppSecurity-Hero_v1.lottie"
    />
  ),
  benefits: (
    <ProductBenefits
      heading="Secure your applications, stay one step ahead of hackers"
      dek="Mycroft's platform continuously monitors your applications for vulnerabilities, providing real-time insights and prioritized alerts to help you identify and fix security issues quickly."
      features={[
        {
          icon: "/assets/lock-icon.svg",
          title: "Protect customer data",
          body: "Securing your applications protects sensitive customer information, including financial details, contact information, and identity credentials, from breaches and theft.",
        },
        {
          icon: "/assets/hands-icon.svg",
          title: "Maintain trust",
          body: "Strong application security protects sensitive data from threats and demonstrates a commitment to user safety, reinforcing long-term relationships with your brand.",
        },
        {
          icon: "/assets/markets-icon.svg",
          title: "Ensure business continuity",
          body: "Comprehensive app security prevents disruptions caused by attacks, keeping your operations running smoothly.",
        },
      ]}
    />
  ),
  slides: [
    {
      heading: "Application scan",
      body: "Mycroft's platform scans applications for security vulnerabilities, providing detailed, severity-categorized descriptions and tracking issues over time, helping your team prioritize fixes and strengthen application security.",
      image: {
        src: "/assets/product-appscan.webp",
        srcSet:
          "/assets/product-appscan-p-500.webp 500w, /assets/product-appscan-p-800.webp 800w, /assets/product-appscan-p-1080.webp 1080w, /assets/product-appscan.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Automated scan",
      body: "Mycroft's platform automatically scans your applications on a regular schedule and generates a centralized dashboard that displays all the latest security issues, prioritized by severity and current status, enabling your team to easily identify critical vulnerabilities and track their resolution progress.",
      image: {
        src: "/assets/product-autoscan.webp",
        srcSet:
          "/assets/product-autoscan-p-500.webp 500w, /assets/product-autoscan-p-800.webp 800w, /assets/product-autoscan-p-1080.webp 1080w, /assets/product-autoscan.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Scan jobs",
      body: "Mycroft's platform enables you to create custom scans tailored to your application’s specific needs and risk areas, then consolidates the results into an easy-to-review dashboard, giving you clear visibility into vulnerabilities and security posture in one centralized location.",
      image: {
        src: "/assets/product-scanjobs.webp",
        srcSet:
          "/assets/product-scanjobs-p-500.webp 500w, /assets/product-scanjobs-p-800.webp 800w, /assets/product-scanjobs-p-1080.webp 1080w, /assets/product-scanjobs.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
  ],
  platform: {
    heading: "Essential features for unmatched application security",
    dek: "Our platform protects your applications from vulnerabilities and ensure the safety of sensitive data, allowing you to focus on innovation with peace of mind.",
    items: [
      {
        img: {
          src: "/assets/features-img2.webp",
          srcSet: "/assets/features-img2-p-500.webp 500w, /assets/features-img2-p-800.webp 800w, /assets/features-img2-p-1080.webp 1080w, /assets/features-img2.webp 1125w",
          width: "562.5",
          sizes: "(max-width: 767px) 100vw, 563px",
        },
        title: "Monitoring",
        body: "Provides real-time alerts to identify and fix issues quickly, keeping you on track.",
      },
      {
        img: {
          src: "/assets/features-img3.webp",
          srcSet: "/assets/features-img3-p-500.webp 500w, /assets/features-img3-p-800.webp 800w, /assets/features-img3-p-1080.webp 1080w, /assets/features-img3.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Remediation",
        body: "Generates issue resolution for comprehensive application security.",
      },
      {
        img: {
          src: "/assets/feature-reporting-v1.webp",
          srcSet: "/assets/feature-reporting-v1-p-500.webp 500w, /assets/feature-reporting-v1-p-800.webp 800w, /assets/feature-reporting-v1-p-1080.webp 1080w, /assets/feature-reporting-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Reporting",
        body: "Download scan reports for real-time updates on provider statuses and problems",
      },
    ],
  },
  pullquote: {
    labelTheme: "tint_50bw",
    theme: "tint_50bw",
    imgTint: "tint_75mint",
    img: {
      src: "/assets/adam-cropped-mono-img.webp",
      srcSet: "/assets/adam-cropped-mono-img-p-500.webp 500w, /assets/adam-cropped-mono-img.webp 600w",
      sizes: "(max-width: 479px) 100vw, 215px",
    },
    quote: "Mycroft's 5-in-1 platform seamlessly consolidated our entire security stack, eliminating the need for multiple point solutions and endless checklists.”",
    name: "Adam Cohen",
    role: "CEO of WEAVE",
    logo: { src: "/assets/weave-logo.svg", width: "114" },
  },
  faq: (
    <>
      <FaqItem question="How can we ensure data privacy within applications?" first>
        To ensure data privacy within applications, organizations should implement strong data protection measures such as data encryption, which secures sensitive information both at rest and in transit. Additionally, incorporating strict access controls ensures that only authorized users can interact with personal data. Regularly conducting privacy assessments can help identify potential risks and vulnerabilities, while implementing data anonymization techniques can further protect sensitive information. Furthermore, it is crucial to develop and enforce data privacy policies that comply with relevant regulations, ensuring responsible handling of user data throughout the application lifecycle.
      </FaqItem>
      <FaqItem question="What are the main security risks associated with applications?">
        The main security risks associated with applications include vulnerabilities such as injection attacks, where malicious code is injected into application inputs; cross-site scripting (XSS), which allows attackers to execute scripts in a user’s browser; and insecure APIs, which can expose sensitive data if not properly secured. Additionally, applications may be at risk from improper authentication practices, leading to unauthorized access, as well as inadequate session management that can allow session hijacking. Insider threats from employees or contractors with access to application data and infrastructure also represent a significant risk. Finally, failure to keep applications updated can lead to exploitation of known vulnerabilities by attackers.
      </FaqItem>
      <FaqItem question="How can we implement effective incident response strategies for application breaches?">
        To implement effective incident response strategies for application breaches, organizations should first develop a comprehensive incident response plan that outlines clear roles, responsibilities, and procedures for handling security incidents. Regular training and simulation exercises should be conducted to ensure that all team members are familiar with the plan and can respond quickly in an actual incident. Establishing communication protocols that outline how to notify stakeholders and affected users during a breach is vital for maintaining transparency. It is also important to have monitoring and detection systems in place to quickly identify breaches, as well as conducting post-incident reviews to analyze the cause, improve response efforts, and prevent future incidents.
      </FaqItem>
      <FaqItem question="What is the best approach for managing data encryption in our applications?">
        The best approach for managing data encryption in applications involves implementing strong encryption algorithms to protect sensitive data both at rest and in transit. This can include using secure protocols such as HTTPS for data in transit and employing database encryption technologies for stored data. Organizations should also ensure that encryption keys are managed securely, using dedicated key management solutions that control access to and rotation of keys. It is essential to conduct regular audits to verify that encryption measures are being applied consistently across all applications and to stay informed about the latest encryption standards and best practices.
      </FaqItem>
      <FaqItem question="How can you handle security management across multiple applications?" last>
        Handling security management across multiple applications requires a unified approach that includes implementing an organization-wide security framework or policy that applies to all applications consistently. Utilizing centralized security management tools can help monitor and enforce security policies across various applications, ensuring compliance and simplifying incident response efforts. Regularly conducting security assessments and audits for each application can help identify vulnerabilities and ensure best practices are being followed. Additionally, providing training and resources to development teams across the organization will promote a security-first mindset in the application development process, allowing for proactive management of security risks across the entire application portfolio.
      </FaqItem>
    </>
  ),
  ctaVariant: "lamp",
};
