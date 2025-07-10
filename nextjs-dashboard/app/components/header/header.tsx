"use client";
import { HomeButton } from "../buttons/HomeButton";
import { ProfileButton } from "../buttons/ProfileButton";
import { WorkButton } from "../buttons/WorkButton";
import { ProjectButton } from "../buttons/ProjectButton";
import { ContactButton } from "../buttons/ContactButton";
import "./header.css";
import { useRouter } from "next/navigation";

interface HeaderProps {
  profileHeight: number;
  workHeight: number;
  projectHeight: number;
  contactHeight: number;
}

export default function Header({
  profileHeight,
  workHeight,
  projectHeight,
  contactHeight,
}: HeaderProps) {
  const router = useRouter();
  return (
    <div className="headerButtonContainer">
      <HomeButton
        handleHome={() => {
          smoothScroll(0, 750);
        }}
      />
      <ProfileButton
        handleProfile={() => {
          smoothScroll(profileHeight, 750);
        }}
      />
      <WorkButton
        handleWork={() => {
          smoothScroll(workHeight, 750);
        }}
      />
      <ProjectButton
        handleProjects={() => {
          router.push("/project");
        }}
      />
      <ContactButton
        handleContact={() => {
          smoothScroll(contactHeight, 750);
        }}
      />
    </div>
  );

  function smoothScroll(targetY: number, duration: number) {
    const start = window.scrollY;
    const distance = targetY - start;
    const startTime = performance.now();

    function scrollStep(currentTime: number) {
      const timeElapsed = currentTime - startTime;
      const run = easeInOut(timeElapsed, start, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    }

    function easeInOut(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(scrollStep);
  }
}
