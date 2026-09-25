import type { Metadata } from "next";
import { ComingSoon } from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Resources",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <ComingSoon
      title="Resources"
      description="Practical tools and companion material for Hafiz Rahman's books."
    />
  );
}
