import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { pipeda } from "./content";

export const metadata = frameworkMetadata(pipeda);

/**
 * /frameworks/pipeda page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksPipedaPage() {
  return <FrameworkPage data={pipeda} />;
}
