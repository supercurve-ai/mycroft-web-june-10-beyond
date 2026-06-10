import type { Metadata } from "next";

// /style-guide is an internal design-system reference — never index it
// (deliberately NOT in sitemap.ts either).
export const metadata: Metadata = {
  title: "Style Guide — Mycroft",
  robots: { index: false, follow: false, nocache: true },
};

export default function StyleGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
