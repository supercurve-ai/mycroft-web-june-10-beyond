import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { gdpr } from "./content";

export const metadata = frameworkMetadata(gdpr);

/**
 * /frameworks/gdpr: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksGdprPage() {
  return <FrameworkPage data={gdpr} />;
}
