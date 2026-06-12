import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { fedramp } from "./content";

export const metadata = frameworkMetadata(fedramp);

/**
 * /frameworks/fedramp: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksFedrampPage() {
  return <FrameworkPage data={fedramp} />;
}
