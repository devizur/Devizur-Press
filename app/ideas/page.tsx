import type { Metadata } from "next";
import { ComingSoon } from "../components/ComingSoon";

export const metadata: Metadata = {
  title: "Ideas",
  alternates: { canonical: "/ideas" },
};

export default function IdeasPage() {
  return (
    <ComingSoon
      title="Ideas"
      description="Essays and notes from Hafiz Rahman on systems thinking, diagnosis, and better decisions—in organizations and in life."
    />
  );
}
