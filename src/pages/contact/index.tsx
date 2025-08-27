import { Stairs } from "@/components/Stairs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useMediaQuery } from "react-responsive";
import {
  BasketballIcon,
  BeachBallIcon,
  FilePyIcon,
  FileTsIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PaintBrushIcon,
  PaletteIcon,
  TwitterLogoIcon,
  XIcon,
} from "@phosphor-icons/react";

const MaskDiv = ({
  heading,
  marqueeHeading,
  className,
  duration = 7,
  repeat = 4,
}: {
  heading: ReactNode;
  marqueeHeading: ReactNode;
  repeat?: number;
  duration?: number;
  className?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [maskDirection, setMaskDirection] = useState("");
  const [hover, setHover] = useState<{
    enter?: { x: number; y: number };
    exit?: { x: number; y: number };
  }>({ enter: undefined, exit: undefined });
  useEffect(() => {
    if (!divRef.current) return;
    const { top, height } = divRef.current.getBoundingClientRect();
    const divStart = top;
    const divEnd = top + height;
    const mid = (divEnd + divStart) / 2;
    if (
      (hover.enter?.y && hover.enter?.y > mid) ||
      (hover.exit?.y && hover.exit?.y > mid)
    ) {
      setMaskDirection("bottom-0 items-end");
    } else {
      setMaskDirection("");
    }
  }, [hover]);

  return (
    <div
      ref={divRef}
      onMouseEnter={(e) => setHover({ enter: { x: e.clientX, y: e.clientY } })}
      onMouseLeave={(e) => setHover({ exit: { x: e.clientX, y: e.clientY } })}
      className={`relative cursor-default w-full flex justify-center overflow-hidden ${className}`}
    >
      {heading}
      <motion.div
        animate={{
          height: hover.enter?.x ? "100%" : 0,
        }}
        transition={{ duration: 0.13 }}
        className={`absolute w-full overflow-hidden flex ${maskDirection}`}
      >
        <div className="absolute whitespace-nowrap flex justify-center items-center w-full overflow-x-hidden">
          {Array(repeat)
            .fill(0)
            .map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {marqueeHeading}
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const heightOver = useMediaQuery({ maxHeight: 767 });
  const fontSize = isMobile ? (heightOver ? "5vh" : "8vw") : "4vw";
  return (
    <Stairs>
      <div className="w-full h-screen whitespace-nowrap  flex flex-col justify-center items-center pt-13 font-redhawk font-extrabold">
        <MaskDiv
          heading={<h1 style={{ fontSize }}>GITHUB</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className="flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>@divyanshu0469</p>
              <GithubLogoIcon />
            </div>
          }
          repeat={6}
          duration={6}
          className="border-y-2 border-black"
        />
        <MaskDiv
          heading={<h1 style={{ fontSize }}>LINKEDIN</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className=" flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>reach out</p>
              <LinkedinLogoIcon weight="bold" />
            </div>
          }
          repeat={6}
          duration={6}
          className="border-b-2 border-black"
        />

        <MaskDiv
          heading={<h1 style={{ fontSize }}>X / TWITTER</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className="flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>@divyyadav31</p>
            </div>
          }
          repeat={6}
          duration={6}
          className="border-b-2 border-black"
        />
      </div>
    </Stairs>
  );
}
