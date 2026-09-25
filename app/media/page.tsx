import type { Metadata } from "next";
import { ComingSoon } from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Media",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <ComingSoon
      title="Media"
      description="Interviews, talks, podcasts, and press featuring Hafiz Rahman."
    />
  );
}
