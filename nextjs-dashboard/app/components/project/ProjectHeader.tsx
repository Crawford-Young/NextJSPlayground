"use client";
import { BackButton } from "../buttons/BackButton";
import { useRouter } from "next/navigation";

export default function ProjectHeader() {
  const router = useRouter();
  return (
    <div>
      <BackButton handleBack={() => router.back()} />
    </div>
  );
}
