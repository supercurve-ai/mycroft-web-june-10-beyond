import { FaqItem } from "@/components/Accordion";
import { ProductHero } from "../_shared/ProductHero";
import { ProductBenefits } from "../_shared/ProductBenefits";
import type { ProductSubpageContent } from "../_shared/ProductSubpage";

/** Everything page-specific about /product/device-management. */
export const deviceManagementContent: ProductSubpageContent = {
  hero: (
    <ProductHero
      theme="devmng"
      eyebrow="Device Management"
      heading="Secure every endpoint, safeguard your business"
      dek="Our platform enforces security policies, monitors device health, and ensures compliance across all endpoints, keeping your business protected."
      lottieSrc="/lottie/6983fa2a5c7d48b337b1b7a1_9f43fdd189c1f55fd7c0c08b12f917cc_DeviceManagement-Hero_v2.lottie"
    />
  ),
  benefits: (
    <ProductBenefits
      heading="The foundation of strong cybersecurity"
      dek="Integrating device management into your security stack helps secure endpoints, prevent vulnerabilities, and strengthen your overall cybersecurity posture."
      features={[
        {
          icon: "/assets/icons/checkmark-icon.svg",
          title: "Vulnerability prevention",
          body: "MDM allows for the deployment of critical updates and patches remotely, which mitigates the risk of exploitation from known vulnerabilities.",
        },
        {
          icon: "/assets/icons/userlock-icon.svg",
          title: "Access control",
          body: "MDM ensures only authorized users and devices can access sensitive data and systems by allowing organizations to define specific permissions for users.",
        },
        {
          icon: "/assets/icons/datalock-icon.svg",
          title: "Data protection",
          body: "Effective device management safeguards data through encryption, remote wipe, and policy enforcement, safeguarding critical information and maintaining compliance.",
        },
      ]}
    />
  ),
  slides: [
    {
      heading: "Device dashboard",
      body: "Mycroft's platform feature offers a comprehensive dashboard with insights into each device, displaying specifications, status, and compliance. It conducts regular compliance checks to ensure all devices meet security standards.",
      image: {
        src: "/assets/screenshots/product-devicedashboard.webp",
        srcSet:
          "/assets/screenshots/product-devicedashboard-p-500.webp 500w, /assets/screenshots/product-devicedashboard-p-800.webp 800w, /assets/screenshots/product-devicedashboard-p-1080.webp 1080w, /assets/screenshots/product-devicedashboard.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Remote device locking",
      body: "Our platform lets you remotely lock a device in case of theft or security incidents, safeguarding sensitive data from unauthorized access. Quick remote lock actions help reduce data breach risks, protecting your company's information.",
      image: {
        src: "/assets/screenshots/product-devicelocking.webp",
        srcSet:
          "/assets/screenshots/product-devicelocking-p-500.webp 500w, /assets/screenshots/product-devicelocking-p-800.webp 800w, /assets/screenshots/product-devicelocking-p-1080.webp 1080w, /assets/screenshots/product-devicelocking.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
    {
      heading: "Remote device wipe",
      body: "Mycroft's platform feature allows users to  erase sensitive data from lost or stolen devices, ensuring data protection and regulatory compliance, while minimizing data breach risks. This tool empowers businesses to maintain control over mobile assets and enhance overall security.",
      image: {
        src: "/assets/screenshots/product-devicewipe.webp",
        srcSet:
          "/assets/screenshots/product-devicewipe-p-500.webp 500w, /assets/screenshots/product-devicewipe-p-800.webp 800w, /assets/screenshots/product-devicewipe-p-1080.webp 1080w, /assets/screenshots/product-devicewipe.webp 1352w",
        sizes: "(max-width: 767px) 100vw, 676px",
        width: 676,
      },
    },
  ],
  platform: {
    heading: "Secure your data with our comprehensive mobile device management solution",
    dek: "Our platform empowers organizations to safeguard sensitive information through strong encryption, remote wipe capabilities, and stringent policy enforcement",
    items: [
      {
        img: {
          src: "/assets/screenshots/feature-dataencryption-v1.webp",
          srcSet: "/assets/screenshots/feature-dataencryption-v1-p-500.webp 500w, /assets/screenshots/feature-dataencryption-v1-p-800.webp 800w, /assets/screenshots/feature-dataencryption-v1-p-1080.webp 1080w, /assets/screenshots/feature-dataencryption-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Data Encryption",
        body: "Ensures all sensitive data on devices are encrypted, protecting them from unauthorized access, even in the event of theft or loss.",
      },
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
          src: "/assets/screenshots/feature-policyenforcement-v1.webp",
          srcSet: "/assets/screenshots/feature-policyenforcement-v1-p-500.webp 500w, /assets/screenshots/feature-policyenforcement-v1-p-800.webp 800w, /assets/screenshots/feature-policyenforcement-v1-p-1080.webp 1080w, /assets/screenshots/feature-policyenforcement-v1.webp 1128w",
          width: "564",
          sizes: "(max-width: 767px) 100vw, 564px",
        },
        title: "Policy enforcement",
        body: "Mitigate risks associated with human error, unauthorized access, and potential data breaches.",
      },
    ],
  },
  pullquote: {
    labelTheme: "_75terra",
    theme: "_75terra",
    imgTint: "blueberry",
    img: {
      src: "/assets/customers/steve-cropped-mono-img.webp",
      srcSet: "/assets/customers/steve-cropped-mono-img-p-500.webp 500w, /assets/customers/steve-cropped-mono-img.webp 600w",
      sizes: "(max-width: 479px) 100vw, 215px",
    },
    quote: "Mycroft provided us with the best  guidance through our SOC 2 process. We knew we were in good hands from the beginning.”",
    name: "Steve Emmanuel",
    role: "CEO & Co-founder of integratrace",
    logo: { src: "/assets/logos/integratrace-logo.svg" },
  },
  faq: (
    <>
      <FaqItem question="What are the primary cybersecurity risks associated with device management?" first>
        The primary cybersecurity risks associated with device management include unauthorized access to sensitive data due to weak authentication practices, which can lead to data breaches. Malware and malicious applications pose further threats, as they can compromise device security and potentially access corporate networks. Additionally, the risk of lost or stolen devices increases the likelihood of sensitive information being exposed if proper security measures are not in place. Insecure Wi-Fi connections can also expose devices to attacks, while vulnerabilities in device operating systems and applications can be exploited by cybercriminals to gain unauthorized access.
      </FaqItem>
      <FaqItem question="How can we enforce security policies across all managed devices?">
        To enforce security policies across all managed devices, organizations should implement a Mobile Device Management (MDM) solution that allows for centralized policy configuration and management. This solution can automate the enforcement of security protocols such as password complexity, encryption requirements, and remote wipe capabilities. Regular audits and compliance checks should be conducted to ensure that devices adhere to security policies, while user training and awareness programs can help reinforce the importance of compliance among employees. Additionally, incorporating automated alerts and reporting can assist in quickly identifying and addressing any deviations from established security policies.
      </FaqItem>
      <FaqItem question="What is the best approach for managing device access controls?">
        The best approach for managing device access controls involves implementing a role-based access control (RBAC) system that grants users access to only those resources and applications necessary for their job functions. Organizations should use strong authentication methods, including multi-factor authentication (MFA), to verify user identities before granting access to devices and sensitive data. Regular reviews of access permissions are essential to ensure that they remain appropriate and that any unnecessary access is promptly revoked. Additionally, using device enrollment processes during onboarding can help establish secure access controls right from the start.
      </FaqItem>
      <FaqItem question="How do you handle updates and patch management for devices?">
        Handling updates and patch management for devices requires establishing a robust routine for monitoring, testing, and deploying updates to both operating systems and applications. Organizations should utilize mobile device management (MDM) solutions to automate the distribution of software updates and patches, ensuring that devices remain up to date without significant disruption to user productivity. Scheduled maintenance windows can be established to apply updates with minimal impact on users, while detailed communication plans can inform employees about upcoming changes. It is also vital to develop a process for promptly addressing any vulnerabilities that are discovered after updates are rolled out, ensuring that devices remain secured.
      </FaqItem>
      <FaqItem question="How should you approach incident response for security breaches related to devices?" last>
        To effectively approach incident response for security breaches related to devices, organizations should begin by creating a detailed incident response plan that outlines specific procedures for identifying, containing, and mitigating external threats on devices. This plan should assign clear roles and responsibilities to IT staff and ensure that communication protocols are established to notify relevant stakeholders during a breach. Training employees on recognizing security incidents and reporting them promptly is crucial for maintaining a proactive security posture. Additionally, conducting post-incident reviews will help identify lessons learned and opportunities for improvement, while continuous monitoring of devices allows for the early detection of potential issues and swift response to any breaches that may occur.
      </FaqItem>
    </>
  ),
  ctaVariant: "fireplace",
};
