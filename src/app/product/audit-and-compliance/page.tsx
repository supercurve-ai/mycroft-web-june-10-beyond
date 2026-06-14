import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, pageSchema } from "@/lib/structured-data";
import { ProductSubpage } from "../_shared/product-subpage";
import { auditAndComplianceContent } from "./content";

const TITLE = "Audit and compliance";
const DESCRIPTION = "Explore how Mycroft’s platform can get you compliant fast.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/meta/audit-compliance-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/meta/audit-compliance-meta-img-v1.jpg"],
  },
};

const schema = pageSchema({
  name: TITLE,
  description: DESCRIPTION,
  path: "/product/audit-and-compliance",
  appName: "Mycroft",
  featureList: [
    ...auditAndComplianceContent.slides.map((s) => s.heading),
    ...auditAndComplianceContent.platform.items.map((i) => i.title),
  ],
  faqs: extractFaqs(auditAndComplianceContent.faq),
});

export default function ProductAuditAndCompliancePage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductSubpage {...auditAndComplianceContent} />
      <WebflowInteractions />
    </>
  );
}
