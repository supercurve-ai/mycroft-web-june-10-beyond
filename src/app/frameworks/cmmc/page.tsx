import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
import { cmmc } from "./content";

export const metadata = frameworkMetadata(cmmc);

/**
 * /frameworks/cmmc page, rendered from the shared FrameworkPage template with this page's content.tsx.
 */
export default function FrameworksCmmcPage() {
  return <FrameworkPage data={cmmc} />;
}
