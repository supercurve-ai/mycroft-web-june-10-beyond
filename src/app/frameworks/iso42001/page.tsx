import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { iso42001 } from "./content";

export const metadata = frameworkMetadata(iso42001);

/**
 * /frameworks/iso42001: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksIso42001Page() {
  return <FrameworkPage data={iso42001} />;
}
