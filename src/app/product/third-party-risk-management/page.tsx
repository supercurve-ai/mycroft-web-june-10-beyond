import type { Metadata } from "next";
import { WebflowInteractions } from "../../_shared/WebflowInteractions";
import { ProductSubpage } from "../_shared/ProductSubpage";
import { thirdPartyRiskManagementContent } from "./content";

export const metadata: Metadata = {
  title: "Third-Party Risk Management",
  description: "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.",
  openGraph: {
    title: "Third-Party Risk Management",
    description: "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.",
    type: "website",
    images: ["/assets/meta/3rdpartyrisk-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Third-Party Risk Management",
    description: "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.",
    images: ["/assets/meta/3rdpartyrisk-meta-img-v1.jpg"],
  },
};

export default function ProductThirdPartyRiskManagementPage() {
  return (
    <>
      <ProductSubpage {...thirdPartyRiskManagementContent} />
      <WebflowInteractions />
    </>
  );
}
