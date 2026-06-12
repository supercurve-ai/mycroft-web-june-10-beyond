import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { soc2 } from "./content";

export const metadata = frameworkMetadata(soc2);

/**
 * /frameworks/soc2: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksSoc2Page() {
  return <FrameworkPage data={soc2} />;
}
