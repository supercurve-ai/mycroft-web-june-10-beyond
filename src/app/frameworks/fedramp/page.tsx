import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { fedramp } from "./content";

export const metadata = frameworkMetadata(fedramp);

/**
 * /frameworks/fedramp page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksFedrampPage() {
  return <FrameworkPage data={fedramp} />;
}
