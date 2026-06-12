import { FrameworkPage, frameworkMetadata } from "../_shared/FrameworkPage";
import { cpra } from "./content";

export const metadata = frameworkMetadata(cpra);

/**
 * /frameworks/cpra: a faithful React rebuild of the Webflow page, rendered
 * from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksCpraPage() {
  return <FrameworkPage data={cpra} />;
}
