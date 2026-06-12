import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/WebflowInteractions";
import { ProductSubpage } from "../_shared/ProductSubpage";
import { auditAndComplianceContent } from "./content";

export const metadata: Metadata = {
  title: "Audit and compliance",
  description: "Explore how Mycroft’s platform can get you compliant fast.",
  openGraph: {
    title: "Audit and compliance",
    description: "Explore how Mycroft’s platform can get you compliant fast.",
    type: "website",
    images: ["/assets/meta/audit-compliance-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Audit and compliance",
    description: "Explore how Mycroft’s platform can get you compliant fast.",
    images: ["/assets/meta/audit-compliance-meta-img-v1.jpg"],
  },
};

export default function ProductAuditAndCompliancePage() {
  return (
    <>
      <ProductSubpage {...auditAndComplianceContent} />
      <WebflowInteractions />
    </>
  );
}
