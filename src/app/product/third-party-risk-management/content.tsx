import { FaqItem } from "@/app/_shared/Accordion";
import { ProductHero } from "../_shared/ProductHero";
import { ProductBenefits } from "../_shared/ProductBenefits";
import type { ProductSubpageContent } from "../_shared/ProductSubpage";

/** Everything page-specific about /product/third-party-risk-management. */
export const thirdPartyRiskManagementContent: ProductSubpageContent = {
  hero: (
    <ProductHero
      theme="tprm"
      eyebrow="Third-Party Risk Management"
      heading="Keep external threats at bay with strong TPRM"
      dek="Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats."
      lottieSrc="/lottie/6984b2bb36f61e2d79a1dd3f_3rdPartyRisk-Hero_v1.lottie"
    />
  ),
  benefits: (
    <ProductBenefits
      heading="How strong third-party risk management shields your business"
      dek="Strong third-party risk management identifies vulnerabilities, enforces security standards, and monitors risks continuously to protect your organization from external threats."
      features={[
        {
          icon: "/assets/folder-icon.svg",
          title: "Early identification of vulnerabilities",
          body: "It helps you assess and identify potential security gaps in third-party vendors before they can be exploited, reducing the risk of breaches.",
        },
        {
          icon: "/assets/seal-icon.svg",
          title: "Enforcement of security standards",
          body: "It ensures that all external partners adhere to your company's security protocols and compliance requirements, preventing weak links in your security chain.",
        },
        {
          icon: "/assets/eye-icon.svg",
          title: "Continuous monitoring",
          body: "Ongoing oversight of third parties allows proactive detection of emerging threats or changes in risk levels, enabling timely responses to minimize potential security incidents.",
        },
      ]}
    />
  ),
  slides: [
    {
      heading: "TPRM dashboard",
      body: "Our dashboard provides an overview of assessment statuses, showing the number of completed versus incomplete evaluations and includes a breakdown of vendor criticality to prioritize your focus –helping you efficiently monitor, prioritize, and manage third-party risks.",
      image: {
        src: "/assets/product-dashboard.webp",
        srcSet:
          "/assets/product-dashboard-p-500.webp 500w, /assets/product-dashboard-p-800.webp 800w, /assets/product-dashboard-p-1080.webp 1080w, /assets/product-dashboard.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Assessment checklist",
      body: "Our platform allows users to select a vendor and access a tailored checklist of actionable steps. Completing these actions ensures the vendor meets your security and compliance standards, streamlining the onboarding and risk mitigation processes.",
      image: {
        src: "/assets/product-checklist.webp",
        srcSet:
          "/assets/product-checklist-p-500.webp 500w, /assets/product-checklist-p-800.webp 800w, /assets/product-checklist-p-1080.webp 1080w, /assets/product-checklist.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
  ],
  platform: {
    heading: "Manage TPRM risks effectively with our platform",
    dek: "Prioritize your high-risk relationships with our platform by providing clear insights into vendor assessment statuses, criticality levels, and compliance metrics.",
    items: [
      {
        img: {
          src: "/assets/features-img2.webp",
          srcSet: "/assets/features-img2-p-500.webp 500w, /assets/features-img2-p-800.webp 800w, /assets/features-img2-p-1080.webp 1080w, /assets/features-img2.webp 1125w",
          width: "562.5",
          sizes: "(max-width: 767px) 100vw, 563px",
        },
        title: "Monitoring",
        body: "Real-time signals from your vendor ecosystem—security, compliance, access, and changes that matter—without manual check-ins.",
      },
      {
        img: {
          src: "/assets/feature-risktriage-v1.webp",
          srcSet: "/assets/feature-risktriage-v1-p-500.webp 500w, /assets/feature-risktriage-v1-p-800.webp 800w, /assets/feature-risktriage-v1-p-1080.webp 1080w, /assets/feature-risktriage-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Risk triage & prioritization",
        body: "A clear view of your highest-risk vendors, why they’re risky, and what to do next—ranked by impact and criticality.",
      },
      {
        img: {
          src: "/assets/feature-automatedworkflows-v1.webp",
          srcSet: "/assets/feature-automatedworkflows-v1-p-500.webp 500w, /assets/feature-automatedworkflows-v1-p-800.webp 800w, /assets/feature-automatedworkflows-v1-p-1080.webp 1080w, /assets/feature-automatedworkflows-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Automated workflows",
        body: "Kick off reviews, collect evidence, request attestations, and track remediation with automated tasks, reminders, and approvals.",
      },
    ],
  },
  pullquote: {
    labelTheme: "_75mint",
    theme: "_75mint",
    imgTint: "_30terra",
    img: {
      src: "/assets/ilya-cropped-mono-img.webp",
      srcSet: "/assets/ilya-cropped-mono-img-p-500.webp 500w, /assets/ilya-cropped-mono-img.webp 600w",
      sizes: "(max-width: 479px) 100vw, 215px",
    },
    quote: "Effortless SOC 2 compliance, worry-free experience. They handle all the parts of SOC 2, so I don’t have to worry about the details.”",
    name: "Ilya Tkachov",
    role: "Co-founder of wispbit",
    logo: { src: "/assets/wispbit-mono-v2.svg" },
  },
  faq: (
    <>
      <FaqItem question="What specific cybersecurity threats do we face when working with third-party vendors?" first>
        When working with third-party vendors, organizations face specific cybersecurity threats such as unauthorized access to sensitive data due to inadequate security practices by the vendor, which can lead to data breaches. Additionally, third-party vendors may introduce vulnerabilities through insecure systems or software, making them a potential target for cyber attacks. The risk of supply chain attacks also increases, where malicious actors exploit weaknesses in a vendor’s infrastructure to gain access to clients’ systems. Furthermore, compliance risks arise if vendors fail to adhere to applicable regulations or security standards, potentially placing the organization at risk of penalties and reputational damage.
      </FaqItem>
      <FaqItem question="What ongoing monitoring practices are necessary for third-party vendors?">
        Ongoing monitoring practices for third-party vendors should include regular assessments of their security posture through audits, reviews, and performance evaluations to ensure they continue to meet established security standards. Utilizing continuous monitoring solutions such as security ratings services can provide real-time insights into vendors’ security practices and any emerging vulnerabilities. Organizations should also monitor the vendor's compliance with relevant regulations and contractual obligations, along with establishing communication channels to promptly address any security incidents or changes in the vendor's risk profile. Lastly, conducting periodic reviews of the data shared with vendors helps to ensure ongoing appropriateness and security of sensitive information.
      </FaqItem>
      <FaqItem question="How can we manage data sharing and access with third-party vendors securely?">
        To manage data sharing and access with third-party vendors securely, organizations should adopt strict data governance policies that specify what data can be shared and under what conditions. Implementing role-based access controls limits vendor access to only the information necessary for their operations, while encryption should be used to protect sensitive data both in transit and at rest. Establishing secure communication protocols, such as VPNs or secure file transfer methods, helps to safeguard the data exchange process. Additionally, regularly reviewing data-sharing agreements and ensuring that they include adequate data protection measures is crucial for maintaining a secure partnership with vendors.
      </FaqItem>
      <FaqItem question="What are best practices for risk assessments and audits of third-party vendors?">
        Best practices for risk assessments and audits of third-party vendors include conducting comprehensive due diligence during the vendor selection process, which involves assessing their security policies, compliance history, and incident response capabilities. Organizations should standardize their risk assessment methodology to ensure that all vendors are evaluated consistently and adequately. A risk-based approach should be applied by classifying vendors into criticality tiers (for example: Critical, High, Medium, and Low) based on factors such as data sensitivity, system access, and business impact. This tiering should drive the depth of assessment and review cadence such as annual reviews for Critical vendors, semi-annual or annual reviews for High-risk vendors, and periodic or event-driven reviews for Medium and Low-risk vendors. Rather than relying on blanket audit schedules, organizations should leverage targeted reassessments, external assurance artifacts (e.g., SOC reports), and ongoing monitoring signals to validate continued alignment with security and compliance expectations. All assessment results, identified gaps, and remediation actions should be documented and tracked over time to demonstrate oversight, support risk decisions, and identify systemic trends.
      </FaqItem>
      <FaqItem question="What actions should we take if a vendor is found to have significant security vulnerabilities?">
        If a vendor is found to have significant security vulnerabilities, organizations should first engage in open communication with the vendor to understand the nature and potential impact of the issues. Collaboratively develop a remediation plan with specific timelines and resources to address the vulnerabilities effectively. During this period, organizations may need to enforce temporary access restrictions or implement additional security measures to safeguard sensitive data until the vendor resolves the issues. Continuous monitoring should be implemented to assess the vendor's progress toward remediation, and a follow-up assessment should be conducted to evaluate the effectiveness of the implemented fixes. If necessary, organizations should be prepared to evaluate alternative vendors or contingency plans in case the vulnerabilities pose an ongoing risk.
      </FaqItem>
      <FaqItem question="What are fourth parties, and how do they impact our TPRM efforts related to cybersecurity, particularly concerning Critical User Entity Controls (CUECs)?" last>
        Fourth parties, often referred to as "sub-vendors" or vendors of vendors, are organizations that provide services or products to third parties that, in turn, serve your organization. They can significantly impact your TPRM efforts since vulnerabilities or security weaknesses at this level can introduce risks that cascade through the supply chain and potentially affect your organization’s security posture. To manage these risks effectively, it is important to identify which fourth parties are connected to your third-party vendors and to assess the security controls and practices they have in place. Critical User Entity Controls (CUECs) refer to the key security measures that organizations implement to mitigate risks associated with third parties, including fourth parties. These controls serve to protect critical assets and data, ensuring that third and fourth parties comply with established security standards. It is essential to include CUECs in your risk assessments and monitoring practices to create a comprehensive view of the security landscape involving all levels of suppliers in your supply chain. This holistic approach helps to ensure that you are not only protecting your data from third-party risks but also extending that protection to the entire vendor ecosystem.
      </FaqItem>
    </>
  ),
  ctaVariant: "lamp",
};
