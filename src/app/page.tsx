import type { Metadata } from "next";
import { HomePageContent } from "./_sections/home-page-content";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Mycroft | Security automated for enterprise standards",
  description: "Mycroft is the platform that serves as your virtual Security and Compliance officer, consolidating all your security needs, supported by experts.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Mycroft | Security automated for enterprise standards",
    description: "Mycroft is the platform that serves as your virtual Security and Compliance officer, consolidating all your security needs, supported by experts.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-home.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft | Security automated for enterprise standards",
    description: "Mycroft is the platform that serves as your virtual Security and Compliance officer, consolidating all your security needs, supported by experts.",
    images: ["/assets/meta/mycroft-meta-img-home.webp"],
  },
};

/**
 * /home page.
 */
export default function HomePage() {
  return (
    <>
      <HomePageContent />
      <WebflowInteractions />
    </>
  );
}
