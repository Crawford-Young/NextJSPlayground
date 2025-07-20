"use client";
import { BackButton } from "../buttons/BackButton";
import { useRouter } from "next/navigation";
import "./header.css";

export default function ProjectHeader() {
  const router = useRouter();
  return (
    <div className="projectHeaderContainer">
      <BackButton handleBack={() => router.back()} />
      <h3>My Projects</h3>
    </div>
  );
}
