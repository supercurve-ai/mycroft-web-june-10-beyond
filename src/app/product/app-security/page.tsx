import type { Metadata } from "next";
import { WebflowInteractions } from "../../_shared/WebflowInteractions";
import { ProductSubpage } from "../_shared/ProductSubpage";
import { appSecurityContent } from "./content";

export const metadata: Metadata = {
  title: "App Security",
  description: "Our platform identifies vulnerabilities early, continuously monitor threats, and keeps your apps protected around the clock.",
  openGraph: {
    title: "App Security",
    description: "Our platform identifies vulnerabilities early, continuously monitor threats, and keeps your apps protected around the clock.",
    type: "website",
    images: ["/assets/appsecurity-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "App Security",
    description: "Our platform identifies vulnerabilities early, continuously monitor threats, and keeps your apps protected around the clock.",
    images: ["/assets/appsecurity-meta-img-v1.jpg"],
  },
};

export default function ProductAppSecurityPage() {
  return (
    <>
      <ProductSubpage {...appSecurityContent} />
      <WebflowInteractions />
    </>
  );
}
