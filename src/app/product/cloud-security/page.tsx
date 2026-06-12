import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { ProductSubpage } from "../_shared/product-subpage";
import { cloudSecurityContent } from "./content";

export const metadata: Metadata = {
  title: "Cloud Security",
  description: "Our platform prioritizes deep, proactive security measures specifically designed for cloud-native architectures.",
  openGraph: {
    title: "Cloud Security",
    description: "Our platform prioritizes deep, proactive security measures specifically designed for cloud-native architectures.",
    type: "website",
    images: ["/assets/meta/cloudsecurity-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Security",
    description: "Our platform prioritizes deep, proactive security measures specifically designed for cloud-native architectures.",
    images: ["/assets/meta/cloudsecurity-meta-img-v1.jpg"],
  },
};

export default function ProductCloudSecurityPage() {
  return (
    <>
      <ProductSubpage {...cloudSecurityContent} />
      <WebflowInteractions />
    </>
  );
}
