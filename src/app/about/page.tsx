import type { Metadata } from "next";
import { AboutPageContent } from "./_sections/about-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";

export const metadata: Metadata = {
  title: "Mycroft — About: Redefine how modern businesses stay secure.",
  description: "Allow companies to achieve enterprise grade security without building massive teams.",
  openGraph: {
    title: "Mycroft — About: Redefine how modern businesses stay secure.",
    description: "Allow companies to achieve enterprise grade security without building massive teams.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-about.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft — About: Redefine how modern businesses stay secure.",
    description: "Allow companies to achieve enterprise grade security without building massive teams.",
    images: ["/assets/meta/mycroft-meta-img-about.webp"],
  },
};

/**
 * /about page
 */
export default function AboutPage() {
  return (
    <>
      <AboutPageContent />
      <WebflowInteractions />
    </>
  );
}
