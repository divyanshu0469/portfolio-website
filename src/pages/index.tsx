"use client";
import { Heading } from "@/components/Heading";
import { ImageParallax } from "@/components/ImageParallax";
import { Stairs } from "@/components/Stairs";
import { Work } from "@/components/Work";
import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 637 });
  return (
    <Stairs>
      <div className="font-lt leading-[1] h-screen gap-3 flex flex-col justify-center items-center">
        <Heading />
      </div>
      {!isMobile ? (
        <div className="bg-light-cream text-light-black h-screen max-md:h-100 text-8xl font-lt">
          <ImageParallax />
        </div>
      ) : null}
      <div className="bg-light-black text-light-cream min-h-screen">
        <Work />
      </div>
    </Stairs>
  );
}
