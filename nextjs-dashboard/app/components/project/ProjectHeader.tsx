"use client";
import { BackButton } from "../buttons/BackButton";
import { useRouter } from "next/navigation";
import "./ProjectHeader.css";

export default function ProjectHeader() {
  const router = useRouter();
  return (
    <div className="projectHeaderContainer">
      <BackButton handleBack={() => router.back()} />
    </div>
  );
}
