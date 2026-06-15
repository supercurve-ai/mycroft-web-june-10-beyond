import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { gdpr } from "./content";

export const metadata = frameworkMetadata(gdpr);

/**
 * /frameworks/gdpr page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksGdprPage() {
  return <FrameworkPage data={gdpr} />;
}
