import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, pageSchema } from "@/lib/structured-data";
import { ProductSubpage } from "../_shared/product-subpage";
import { cloudSecurityContent } from "./content";

const TITLE = "Cloud Security";
const DESCRIPTION = "Our platform prioritizes deep, proactive security measures specifically designed for cloud-native architectures.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/meta/cloudsecurity-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/meta/cloudsecurity-meta-img-v1.jpg"],
  },
};

const schema = pageSchema({
  name: TITLE,
  description: DESCRIPTION,
  path: "/product/cloud-security",
  appName: "Mycroft",
  featureList: [
    ...cloudSecurityContent.slides.map((s) => s.heading),
    ...cloudSecurityContent.platform.items.map((i) => i.title),
  ],
  faqs: extractFaqs(cloudSecurityContent.faq),
});

export default function ProductCloudSecurityPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductSubpage {...cloudSecurityContent} />
      <WebflowInteractions />
    </>
  );
}
