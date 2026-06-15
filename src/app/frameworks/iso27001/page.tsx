import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { iso27001 } from "./content";

export const metadata = frameworkMetadata(iso27001);

/**
 * /frameworks/iso27001 page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksIso27001Page() {
  return <FrameworkPage data={iso27001} />;
}
