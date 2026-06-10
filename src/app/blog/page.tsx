import { redirect } from "next/navigation";

/** The original site has no blog index: mycroft.io/blog 301s to /resources. */
export default function BlogIndex() {
  redirect("/resources");
}
