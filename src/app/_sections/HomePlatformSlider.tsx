import { ProductSlider } from "../_shared/ProductSlider";
import type { ProductSlide } from "../_shared/ProductSlideCard";

const SLIDES: ProductSlide[] = [
  {
    title: "Audit & compliance agents",
    body: "Mycroft AI Agents continuously monitor your compliance posture against enterprise requirements for SOC 2, ISO 27001, GDPR, HIPAA, CMMC, FedRAMP, FedRAMP 20X and more. All integrated and cross-mapped to reduce unnecessary overhead.",
    href: "/product",
    lottieSrc: "/lottie/68cb8abc1880145b8880ee64_AuditCompliance_v2.lottie",
    image: 1,
  },
  {
    title: "Cloud security",
    body: "Gain deeper insights into your cloud security, focusing on key areas such as identity and access management, misconfigurations, secrets management, and database architecture – empowering you to scale with confidence.",
    href: "/product",
    lottieSrc: "/lottie/68cb8bf5fbee380cfd1cc505_CloudSecurity_v2.lottie",
    image: 2,
  },
  {
    title: "Application security",
    body: "Monitor your application attack surface through Mycroft to find what hackers are looking for to exploit your application. Identify, triage, and continually monitor your potential threats to ensure your application is protected from threats 24/7.",
    href: "/product",
    lottieSrc: "/lottie/68cb8c56ad76da070bd27894_AppSecurity_v2.lottie",
    image: 3,
  },
  {
    title: "Device management",
    body: "Monitor and manage your endpoints to ensure security and compliance stays strong across all devices through managing your encryption, malware, and more.",
    href: "/product",
    lottieSrc: "/lottie/68cb8c6691e1f0cbbf1d9550_ThreatManagement_v2.lottie",
    image: 4,
  },
  {
    title: "Third-Party Risk Management",
    body: "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.",
    href: "/product",
    lottieSrc: "/lottie/68cb8c8fe1d100b0bcefb3d1_AgenticAI_v2.lottie",
    image: 5,
  },
];

/** Platform-slider section of /home. Ported from Webflow by the Webflow Cloner agent. */
export function HomePlatformSlider() {
  return (
    <section id="platform" className="section_v2 tint_40eg overflow_hidden">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-208 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
          <div className="w-full pt-(--sizing--rem--10rem) max-tablet:pt-(--sizing--rem--8rem) max-landscape:pt-(--sizing--rem--6rem) max-portrait:pt-(--sizing--rem--4-5rem)">
            <div className="container-flex vertical">
              <h2 className="h2_v2 color_rg text_center">
                Mycroft’s versatility:
                <br />
                your security stack in{" "}
                <span className="whitespace-nowrap">
                  5 pillars
                </span>
              </h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-s text_center">
                  Mycroft is the only platform that combines your entire security stack and gets you compliant while automating your workflows. All powered by your AI Security and Compliance Officer.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
        <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
          <div className="custom-page-padding">
            <div className="w-full max-w-300 ml-auto mr-auto">
              <ProductSlider slides={SLIDES} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
