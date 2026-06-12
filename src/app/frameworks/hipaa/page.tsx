import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { hipaa } from "./content";

export const metadata = frameworkMetadata(hipaa);

/**
 * /frameworks/hipaa: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksHipaaPage() {
  return <FrameworkPage data={hipaa} />;
}
