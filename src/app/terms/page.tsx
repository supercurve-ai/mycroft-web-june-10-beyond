import type { Metadata } from "next";
import { TermsPageContent } from "./_sections/terms-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "terms",
  openGraph: {
    title: "terms",
  },
  twitter: {
    title: "terms",
  },
};

/**
 * /terms page.
 */
export default function TermsPage() {
  return (
    <>
      <TermsPageContent />
      <WebflowInteractions />
    </>
  );
}
