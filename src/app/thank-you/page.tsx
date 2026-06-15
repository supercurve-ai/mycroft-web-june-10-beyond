import type { Metadata } from "next";
import { ThankYouPageContent } from "./_sections/thank-you-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Thank you",
  openGraph: {
    title: "Thank you",
  },
  twitter: {
    title: "Thank you",
  },
};

/**
 * /thank-you page.
 */
export default function ThankYouPage() {
  return (
    <>
      <ThankYouPageContent />
      <WebflowInteractions />
    </>
  );
}
