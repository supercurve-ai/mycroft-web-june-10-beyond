import type { Metadata } from "next";
import { SubscribePageContent } from "./_sections/subscribe-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to read in depth industry updates, deep dives, and Mike’s thoughts",
  openGraph: {
    title: "Subscribe",
    description: "Subscribe to read in depth industry updates, deep dives, and Mike’s thoughts",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-subscribe.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subscribe",
    description: "Subscribe to read in depth industry updates, deep dives, and Mike’s thoughts",
    images: ["/assets/meta/mycroft-meta-img-subscribe.webp"],
  },
};

/**
 * /subscribe page.
 */
export default function SubscribePage() {
  return (
    <>
      <SubscribePageContent />
      <WebflowInteractions />
    </>
  );
}
