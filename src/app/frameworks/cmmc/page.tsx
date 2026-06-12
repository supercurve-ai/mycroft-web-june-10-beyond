import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { cmmc } from "./content";

export const metadata = frameworkMetadata(cmmc);

/**
 * /frameworks/cmmc: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksCmmcPage() {
  return <FrameworkPage data={cmmc} />;
}
