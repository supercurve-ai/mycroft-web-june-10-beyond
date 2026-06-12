import { FaqItem } from "@/components/Accordion";
import { ProductHero } from "../_shared/ProductHero";
import { ProductBenefits } from "../_shared/ProductBenefits";
import type { ProductSubpageContent } from "../_shared/ProductSubpage";

/** Everything page-specific about /product/cloud-security. */
export const cloudSecurityContent: ProductSubpageContent = {
  hero: (
    <ProductHero
      theme="cloudsec"
      eyebrow="Cloud Security"
      heading="Authentic cloud security, not just for compliance"
      dek="Our platform prioritizes deep, proactive security measures specifically designed for cloud-native architectures."
      lottieSrc="/lottie/6967d1f25c21a54fda6b48d5_data3.lottie"
    />
  ),
  benefits: (
    <ProductBenefits
      heading="Why cloud security isn’t just an option — it’s essential"
      dek="While many solutions claim to secure your cloud environment, our product delivers true cloud security built for today’s dynamic, multi-cloud world."
      features={[
        {
          icon: "/assets/icons/checkmark-icon.svg",
          title: "Protection of sensitive data",
          body: "Cloud services often handle sensitive information such as customer data, intellectual property, and financial records.",
        },
        {
          icon: "/assets/icons/warning-icon.svg",
          title: "Regulatory compliance",
          body: "Cloud security is essential to meet the legal requirements for industry compliance, avoiding hefty fines or legal penalties.",
        },
        {
          icon: "/assets/icons/lock-icon.svg",
          title: "Preventing unauthorized access",
          body: (
            <>
              Adequate security controls reduce the risk of unauthorized access, data theft, or malicious activities by cybercriminals.
              <br />
            </>
          ),
        },
      ]}
    />
  ),
  slides: [
    {
      heading: "Cloud scan",
      body: "Our platform continuously scans your cloud environment, delivering comprehensive security findings, providing clear insights into your security posture, allowing you to quickly identify and prioritize vulnerabilities based on their importance and scope.",
      image: {
        src: "/assets/screenshots/product-automatedscan.webp",
        srcSet:
          "/assets/screenshots/product-automatedscan-p-500.webp 500w, /assets/screenshots/product-automatedscan-p-800.webp 800w, /assets/screenshots/product-automatedscan-p-1080.webp 1080w, /assets/screenshots/product-automatedscan.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Automated scan",
      body: "Configure our platform to automatically scan your cloud security environment regularly, providing continuous oversight without manual effort. It features a customized dashboard that consolidates findings, displaying security issues, severity, and affected regions or services.",
      image: {
        src: "/assets/screenshots/product-automatedscan-2.webp",
        srcSet:
          "/assets/screenshots/product-automatedscan-p-500-2.webp 500w, /assets/screenshots/product-automatedscan-p-800-2.webp 800w, /assets/screenshots/product-automatedscan-p-1080-2.webp 1080w, /assets/screenshots/product-automatedscan-2.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Remediation",
      body: "Our platform not only identifies cloud security failed findings but also provides actionable remediation suggestions tailored to each issue. With our proactive recommendations, you can streamline your remediation process and ensure your cloud environment remains secure, compliant, and resilient.",
      image: {
        src: "/assets/screenshots/product-remediation.webp",
        srcSet:
          "/assets/screenshots/product-remediation-p-500.webp 500w, /assets/screenshots/product-remediation-p-800.webp 800w, /assets/screenshots/product-remediation-p-1080.webp 1080w, /assets/screenshots/product-remediation.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
  ],
  platform: {
    heading: "Unlock robust cloud security with our customizable features",
    dek: (
      <>
        Ensure the protection of sensitive cloud data with real-time monitoring, remediation, and reporting.
        <br />
      </>
    ),
    items: [
      {
        img: {
          src: "/assets/screenshots/features-img2.webp",
          srcSet: "/assets/screenshots/features-img2-p-500.webp 500w, /assets/screenshots/features-img2-p-800.webp 800w, /assets/screenshots/features-img2-p-1080.webp 1080w, /assets/screenshots/features-img2.webp 1125w",
          width: "562.5",
          sizes: "(max-width: 767px) 100vw, 563px",
        },
        title: "Monitoring",
        body: "Provides real-time alerts to identify and fix issues quickly, keeping you on track.",
      },
      {
        img: {
          src: "/assets/screenshots/features-img3.webp",
          srcSet: "/assets/screenshots/features-img3-p-500.webp 500w, /assets/screenshots/features-img3-p-800.webp 800w, /assets/screenshots/features-img3-p-1080.webp 1080w, /assets/screenshots/features-img3.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Remediation",
        body: "Automates issue resolution for tight cloud security without delays.",
      },
      {
        img: {
          src: "/assets/screenshots/feature-reporting-v1.webp",
          srcSet: "/assets/screenshots/feature-reporting-v1-p-500.webp 500w, /assets/screenshots/feature-reporting-v1-p-800.webp 800w, /assets/screenshots/feature-reporting-v1-p-1080.webp 1080w, /assets/screenshots/feature-reporting-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Reporting",
        body: "Download scan reports for real-time updates on provider statuses and problems",
      },
    ],
  },
  pullquote: {
    labelTheme: "_75mint",
    theme: "_75mint",
    imgTint: "_30terra",
    img: {
      src: "/assets/customers/ilya-cropped-mono-img.webp",
      srcSet: "/assets/customers/ilya-cropped-mono-img-p-500.webp 500w, /assets/customers/ilya-cropped-mono-img.webp 600w",
      sizes: "(max-width: 479px) 100vw, 215px",
    },
    quote: "Effortless SOC 2 compliance, worry-free experience. They handle all the parts of SOC 2, so I don’t have to worry about the details.”",
    name: "Ilya Tkachov",
    role: "Co-founder of wispbit",
    logo: { src: "/assets/logos/wispbit-mono-v2.svg" },
  },
  faq: (
    <>
      <FaqItem question="What are the main security risks associated with cloud computing?" first>
        The main security risks associated with cloud computing include data breaches, which can occur due to unauthorized access to sensitive information when security measures are inadequate. Additionally, organizations may face a loss of data control, as data can be stored across multiple locations, making it challenging to manage and protect. Insider threats also pose significant risks since employees or contractors may intentionally or accidentally compromise security. Insecure interfaces and APIs are another concern, as weaknesses in these components can be exploited by attackers. Furthermore, account hijacking is a risk, as compromised credentials can allow unauthorized access to resources, while malicious attacks such as DDoS and malware can disrupt cloud services and result in data loss.
      </FaqItem>
      <FaqItem question="What strategies or technologies can help protect sensitive information stored in the cloud?">
        To protect sensitive information stored in the cloud, organizations should consider employing various strategies and technologies. Strong encryption should be used for both data at rest and in transit to maintain data confidentiality. Implementing multi-factor authentication (MFA) enhances access security by requiring users to provide multiple verification methods. Data loss prevention (DLP) solutions can be utilized to monitor and control data transmission, thus preventing unauthorized sharing. Conducting regular security assessments, including vulnerability assessments and penetration testing, helps identify and address security gaps. It is also essential to implement role-based access control (RBAC) to restrict user access to only what is necessary, and to regularly review and update security configurations of cloud services.
      </FaqItem>
      <FaqItem question="How do we manage access control in the cloud?">
        Managing access control in the cloud can be effectively accomplished through several practices. First, organizations should utilize identity and access management (IAM) solutions to handle user identities and permissions comprehensively. Implementing role-based access control (RBAC) allows organizations to define specific roles with assigned permissions based on job responsibilities. Adopting the least privilege principle is crucial, as it involves granting users the minimum necessary access to perform their tasks, thereby reducing exposure. Conducting regular access reviews ensures that user permissions remain appropriate and allows for the revocation of unnecessary access. Finally, automation of provisioning and de-provisioning processes can help maintain up-to-date access controls when users join or leave the organization.
      </FaqItem>
      <FaqItem question="How can we implement effective incident response strategies for cloud breaches?">
        To implement effective incident response strategies in the event of cloud breaches, organizations should begin by developing a comprehensive incident response plan that includes defined roles, responsibilities, and procedures for responding to incidents. Establishing clear communication channels is essential to facilitate effective coordination among IT teams, management, and cloud service providers during an incident. Regular training and simulation drills should be conducted to ensure that staff remains prepared and familiar with the incident response plan. Implementing monitoring and detection tools, such as security information and event management (SIEM) systems, can help identify anomalies within cloud environments. After an incident occurs, conducting a thorough post-incident analysis is critical to ascertain the root cause of the breach and enhance future response efforts.
      </FaqItem>
      <FaqItem question="What measures should we adopt to protect APIs that interact with cloud services?">
        To protect APIs that interact with cloud services, organizations should implement several key measures. Strong authentication mechanisms, such as OAuth and JSON Web Tokens (JWT), should be utilized to verify user identities and control access to the APIs effectively. Ensuring proper input validation is essential to prevent common vulnerabilities like SQL injection and cross-site scripting (XSS) attacks. Rate limiting and throttling should be applied to control the number of API requests, thereby mitigating the risk of DDoS attacks. Additionally, maintaining detailed logs of API access and transactions is critical for monitoring suspicious activities and facilitating audit trails. Finally, deploying API gateways can help enforce security policies, manage traffic effectively, and provide an additional layer of protection against potential threats.
      </FaqItem>
      <FaqItem question="Which regulations (e.g., GDPR, HIPAA, PCI DSS) apply to our cloud usage, and how can we ensure compliance?" last>
        When considering cloud usage, various regulations may apply based on the type of data being stored and processed, the industry, and geographical locations. Key regulations include the General Data Protection Regulation (GDPR), which applies to organizations that handle personal data of European Union citizens and mandates strict data protection and privacy measures. The Health Insurance Portability and Accountability Act (HIPAA) is relevant for healthcare organizations in the United States, requiring safeguards to protect sensitive patient information. The Payment Card Industry Data Security Standard (PCI DSS) applies to businesses that handle credit card transactions and establishes standards for secure handling of payment card data.
      </FaqItem>
    </>
  ),
  ctaVariant: "fireplace",
};
