import type { Metadata } from "next";
import { PricingPageContent } from "./_sections/pricing-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft Pricing | Find the right pricing package for your security program",
  description: "Mycroft offers pricing packages to help you achieve and maintain your security and compliance program with enterprise level standards across the board.",
  openGraph: {
    title: "Mycroft Pricing | Find the right pricing package for your security program",
    description: "Mycroft offers pricing packages to help you achieve and maintain your security and compliance program with enterprise level standards across the board.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-pricing.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft Pricing | Find the right pricing package for your security program",
    description: "Mycroft offers pricing packages to help you achieve and maintain your security and compliance program with enterprise level standards across the board.",
    images: ["/assets/meta/mycroft-meta-img-pricing.webp"],
  },
};

/**
 * /pricing page.
 */
export default function PricingPage() {
  return (
    <>
      <PricingPageContent />
      <WebflowInteractions />
    </>
  );
}
