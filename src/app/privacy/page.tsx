import type { Metadata } from "next";
import { PrivacyPageContent } from "./_sections/privacy-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft Privacy Policy | Our privacy policy details how we collect, use, and share information",
  description: "Mycroft is committed to protecting your privacy.",
  openGraph: {
    title: "Mycroft Privacy Policy | Our privacy policy details how we collect, use, and share information",
    description: "Mycroft is committed to protecting your privacy.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-privacy.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft Privacy Policy | Our privacy policy details how we collect, use, and share information",
    description: "Mycroft is committed to protecting your privacy.",
    images: ["/assets/meta/mycroft-meta-img-privacy.webp"],
  },
};

/**
 * /privacy page.
 */
export default function PrivacyPage() {
  return (
    <>
      <PrivacyPageContent />
      <WebflowInteractions />
    </>
  );
}
