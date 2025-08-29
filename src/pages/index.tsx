"use client";
import { Heading } from "@/components/Heading";
import { ImageParallax } from "@/components/ImageParallax";
import { Stairs } from "@/components/Stairs";
import { Work } from "@/components/Work";

export default function About() {
  return (
    <Stairs>
      <div className="font-lt leading-[1] h-screen gap-3 flex flex-col justify-center items-center">
        <Heading />
      </div>
      <div className="bg-light-cream text-light-black h-screen text-8xl font-lt">
        <ImageParallax />
      </div>
      <div className="bg-light-black text-light-cream min-h-screen">
        <Work />
      </div>
    </Stairs>
  );
}
