import type { Metadata } from "next";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { ProductSubpage } from "../_shared/product-subpage";
import { deviceManagementContent } from "./content";

export const metadata: Metadata = {
  title: "Device Management",
  description: "Our platform enforces security policies, monitors device health, and ensures compliance across all endpoints, keeping your business protected.",
  openGraph: {
    title: "Device Management",
    description: "Our platform enforces security policies, monitors device health, and ensures compliance across all endpoints, keeping your business protected.",
    type: "website",
    images: ["/assets/meta/devicemanagement-meta-img-v1.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Device Management",
    description: "Our platform enforces security policies, monitors device health, and ensures compliance across all endpoints, keeping your business protected.",
    images: ["/assets/meta/devicemanagement-meta-img-v1.jpg"],
  },
};

export default function ProductDeviceManagementPage() {
  return (
    <>
      <ProductSubpage {...deviceManagementContent} />
      <WebflowInteractions />
    </>
  );
}
