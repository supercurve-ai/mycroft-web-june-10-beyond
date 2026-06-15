import type { Metadata } from "next";
import { PartnershipsPageContent } from "./_sections/partnerships-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft — Partnerships: Join the Mycroft partnership network",
  description: "Expand your business opportunities and empower your customers to thrive securely through Mycroft partnerships.",
  openGraph: {
    title: "Mycroft — Partnerships: Join the Mycroft partnership network",
    description: "Expand your business opportunities and empower your customers to thrive securely through Mycroft partnerships.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-partnerships.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft — Partnerships: Join the Mycroft partnership network",
    description: "Expand your business opportunities and empower your customers to thrive securely through Mycroft partnerships.",
    images: ["/assets/meta/mycroft-meta-img-partnerships.webp"],
  },
};

/**
 * /partnerships page.
 */
export default function PartnershipsPage() {
  return (
    <>
      <PartnershipsPageContent />
      <WebflowInteractions />
    </>
  );
}
