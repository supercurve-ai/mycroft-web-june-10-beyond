import type { Metadata } from "next";
import { FaqsPageContent } from "./_sections/faqs-page-content";
import { FaqsAccordion } from "./_sections/faqs-accordion";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { JsonLd } from "@/components/json-ld";
import { extractFaqs, faqPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Mycroft FAQs | Answers to all of your frequently asked cybersecurity questions",
  description: "Find clear answers to common cybersecurity questions—best practices, threat prevention, compliance tips, and incident response guidance to help your team stay secure and confident.",
  openGraph: {
    title: "Mycroft FAQs | Answers to all of your frequently asked cybersecurity questions",
    description: "Find clear answers to common cybersecurity questions—best practices, threat prevention, compliance tips, and incident response guidance to help your team stay secure and confident.",
    type: "website",
    images: ["/assets/meta/mycroft-meta-img-faqs.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mycroft FAQs | Answers to all of your frequently asked cybersecurity questions",
    description: "Find clear answers to common cybersecurity questions—best practices, threat prevention, compliance tips, and incident response guidance to help your team stay secure and confident.",
    images: ["/assets/meta/mycroft-meta-img-faqs.webp"],
  },
};

/**
 * /faqs page.
 */
const faqSchema = faqPageSchema(extractFaqs(FaqsAccordion()));

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <FaqsPageContent />
      <WebflowInteractions />
    </>
  );
}
