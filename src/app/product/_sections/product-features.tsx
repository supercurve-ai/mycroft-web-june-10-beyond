import type { ReactNode } from "react";
import { DotLottiePlayer } from "@/components/dot-lottie-player";
import { ProductFeatureRow } from "@/components/product-feature-row";

/** The five platform pillars, each linking to its /product/* subpage. */
const FEATURES: {
  id: string;
  href: string;
  title: ReactNode;
  copy: string;
  lottie: string;
}[] = [
  {
    id: "audit-compliance",
    href: "/product/audit-and-compliance",
    title: "Audit & compliance agents",
    copy: "Mycroft AI Agents continuously monitor your compliance posture against enterprise requirements for SOC 2, ISO 27001, GDPR, HIPAA, CMMC, FedRAMP, FedRAMP 20X and more. All integrated and cross-mapped to reduce unnecessary overhead.",
    lottie: "/lottie/68cb8abc1880145b8880ee64_AuditCompliance_v2.lottie",
  },
  {
    id: "cloud-security",
    href: "/product/cloud-security",
    title: "Cloud security",
    copy: "Gain deeper insights into your cloud security, focusing on key areas such as identity and access management, misconfigurations, secrets management, and database architecture – empowering you to scale with confidence.",
    lottie: "/lottie/68cb8bf5fbee380cfd1cc505_CloudSecurity_v2.lottie",
  },
  {
    id: "app-security",
    href: "/product/app-security",
    title: "Application security",
    copy: "Monitor your application attack surface through Mycroft to find what hackers are looking for to exploit your application. Identify, triage, and continually monitor your potential threats to ensure your application is protected from threats 24/7.",
    lottie: "/lottie/68cb8c56ad76da070bd27894_AppSecurity_v2.lottie",
  },
  {
    id: "threat-management",
    href: "/product/device-management",
    title: "Device management",
    copy: "Monitor and manage your endpoints to ensure security and compliance stays strong across all devices through managing your encryption, malware, and more.",
    lottie: "/lottie/68cb8c6691e1f0cbbf1d9550_ThreatManagement_v2.lottie",
  },
  {
    id: "agentic-ai",
    href: "/product/third-party-risk-management",
    // NBSP between "Third-party" and "risk" — preserved from the Webflow copy.
    title: "Third-party risk management",
    copy: "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.",
    lottie: "/lottie/68cb8c8fe1d100b0bcefb3d1_AgenticAI_v2.lottie",
  },
];

function lottieMedia(src: string) {
  return (
    <div
      data-is-ix2-target="1"
      className="product-feature-lottie"
      data-animation-type="lottie"
      data-src={src}
      data-loop="0"
      data-direction="1"
      data-autoplay="0"
      data-renderer="svg"
      data-default-duration="0"
      data-duration="8"
      data-loading="eager"
    >
      <DotLottiePlayer src={src} loop={false} autoplay={false} width={914} height={582} playOnReveal />
    </div>
  );
}

/** Product-features section of /product. Ported from Webflow by the Webflow Cloner agent. */
export function ProductFeatures() {
  return (
    <section id="product-features" className="section_v2 tint_40eg overflow_hidden">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
          <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
            <div className="container-flex vertical">
              <div className="eyebrow-label-small product">
                <div className="eyebrow-small color_rg">
                  PRoduct
                </div>
              </div>
              <h2 className="h2_v2 color_rg text_center">
                Mycroft’s versatility:
                <br />
                the 5-in-1 platform
              </h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-m text_center">
                  Mycroft is the first platform to combine security and compliance stack with AI Agents that operate as your teammate. Achieve enterprise grade security without the overhead and massive team.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--4-5rem) max-tablet:pb-(--sizing--rem--3-5rem) max-landscape:pb-(--sizing--rem--2-5rem) max-portrait:pb-(--sizing--rem--1-5rem)">
              <div className="product-container">
                {FEATURES.map((f, i) => (
                  <ProductFeatureRow
                    key={f.id}
                    id={f.id}
                    index={i}
                    count={FEATURES.length}
                    title={f.title}
                    copy={f.copy}
                    media={lottieMedia(f.lottie)}
                    cta={{ label: "Learn more" }}
                    href={f.href}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
