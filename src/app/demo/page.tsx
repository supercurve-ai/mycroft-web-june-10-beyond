import type { Metadata } from "next";
import { DemoPageContent } from "./_sections/demo-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft Book a Demo | Learn more about how our platform can optimize your security and compliance posture",
  description: "Book a personalized demo of Mycroft’s security and compliance platform to see threat prevention, compliance tools, automated incident response, and team workflows in action. Schedule a free walkthrough today.",
  openGraph: {
    title: "Mycroft Book a Demo | Learn more about how our platform can optimize your security and compliance posture",
    description: "Book a personalized demo of Mycroft’s security and compliance platform to see threat prevention, compliance tools, automated incident response, and team workflows in action. Schedule a free walkthrough today.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-demo.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft Book a Demo | Learn more about how our platform can optimize your security and compliance posture",
    description: "Book a personalized demo of Mycroft’s security and compliance platform to see threat prevention, compliance tools, automated incident response, and team workflows in action. Schedule a free walkthrough today.",
    images: ["/assets/meta/mycroft-meta-img-demo.webp"],
  },
};

/**
 * /demo page.
 */
export default function DemoPage() {
  return (
    <>
      <DemoPageContent />
      <WebflowInteractions />
    </>
  );
}
