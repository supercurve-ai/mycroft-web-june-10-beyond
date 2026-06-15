import type { Metadata } from "next";
import { ProductPageContent } from "./_sections/product-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft Product | A fully integrated Security stack",
  description: "Learn more about Mycroft’s automated platform and how our robust stack of security products will save precious engineering time.",
  openGraph: {
    title: "Mycroft Product | A fully integrated Security stack",
    description: "Learn more about Mycroft’s automated platform and how our robust stack of security products will save precious engineering time.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-product.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft Product | A fully integrated Security stack",
    description: "Learn more about Mycroft’s automated platform and how our robust stack of security products will save precious engineering time.",
    images: ["/assets/meta/mycroft-meta-img-product.webp"],
  },
};

/**
 * /product page.
 */
export default function ProductPage() {
  return (
    <>
      <ProductPageContent />
      <WebflowInteractions />
    </>
  );
}
