import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, pageSchema } from "@/lib/structured-data";
import { ProductSubpage } from "../_shared/product-subpage";
import { thirdPartyRiskManagementContent } from "./content";

const TITLE = "Third-Party Risk Management";
const DESCRIPTION = "Our platform provides visibility and control over external vulnerabilities, helping your organization stay secure, compliant, and protected from outside threats.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/meta/3rdpartyrisk-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/meta/3rdpartyrisk-meta-img-v1.jpg"],
  },
};

const schema = pageSchema({
  name: TITLE,
  description: DESCRIPTION,
  path: "/product/third-party-risk-management",
  appName: "Mycroft",
  featureList: [
    ...thirdPartyRiskManagementContent.slides.map((s) => s.heading),
    ...thirdPartyRiskManagementContent.platform.items.map((i) => i.title),
  ],
  faqs: extractFaqs(thirdPartyRiskManagementContent.faq),
});

export default function ProductThirdPartyRiskManagementPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductSubpage {...thirdPartyRiskManagementContent} />
      <WebflowInteractions />
    </>
  );
}
