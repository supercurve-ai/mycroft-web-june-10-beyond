import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { cpra } from "./content";

export const metadata = frameworkMetadata(cpra);

/**
 * /frameworks/cpra page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksCpraPage() {
  return <FrameworkPage data={cpra} />;
}
