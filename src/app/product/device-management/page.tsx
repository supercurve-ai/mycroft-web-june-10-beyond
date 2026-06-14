import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, pageSchema } from "@/lib/structured-data";
import { ProductSubpage } from "../_shared/product-subpage";
import { deviceManagementContent } from "./content";

const TITLE = "Device Management";
const DESCRIPTION = "Our platform enforces security policies, monitors device health, and ensures compliance across all endpoints, keeping your business protected.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/meta/devicemanagement-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/meta/devicemanagement-meta-img-v1.jpg"],
  },
};

const schema = pageSchema({
  name: TITLE,
  description: DESCRIPTION,
  path: "/product/device-management",
  appName: "Mycroft",
  featureList: [
    ...deviceManagementContent.slides.map((s) => s.heading),
    ...deviceManagementContent.platform.items.map((i) => i.title),
  ],
  faqs: extractFaqs(deviceManagementContent.faq),
});

export default function ProductDeviceManagementPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductSubpage {...deviceManagementContent} />
      <WebflowInteractions />
    </>
  );
}
