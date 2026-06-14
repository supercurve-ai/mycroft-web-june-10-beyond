import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, pageSchema } from "@/lib/structured-data";
import { ProductSubpage } from "../_shared/product-subpage";
import { appSecurityContent } from "./content";

const TITLE = "App Security";
const DESCRIPTION = "Our platform identifies vulnerabilities early, continuously monitor threats, and keeps your apps protected around the clock.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: ["/assets/meta/appsecurity-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/meta/appsecurity-meta-img-v1.jpg"],
  },
};

const schema = pageSchema({
  name: TITLE,
  description: DESCRIPTION,
  path: "/product/app-security",
  appName: "Mycroft",
  featureList: [
    ...appSecurityContent.slides.map((s) => s.heading),
    ...appSecurityContent.platform.items.map((i) => i.title),
  ],
  faqs: extractFaqs(appSecurityContent.faq),
});

export default function ProductAppSecurityPage() {
  return (
    <>
      <JsonLd data={schema} />
      <ProductSubpage {...appSecurityContent} />
      <WebflowInteractions />
    </>
  );
}
