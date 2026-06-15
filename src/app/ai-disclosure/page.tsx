import type { Metadata } from "next";
import { AiDisclosurePageContent } from "./_sections/ai-disclosure-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "AI Disclosure",
  description: "Transparency statement on AI functionality, data processing, and user responsibilities.",
  openGraph: {
    title: "AI Disclosure",
    description: "Transparency statement on AI functionality, data processing, and user responsibilities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Disclosure",
    description: "Transparency statement on AI functionality, data processing, and user responsibilities.",
  },
};

/**
 * /ai-disclosure page.
 */
export default function AiDisclosurePage() {
  return (
    <>
      <AiDisclosurePageContent />
      <WebflowInteractions />
    </>
  );
}
