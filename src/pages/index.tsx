import { Stairs } from "@/components/Stairs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import {
  BasketballIcon,
  BeachBallIcon,
  FilePyIcon,
  FileTsIcon,
  GraphIcon,
  IslandIcon,
  PaintBrushIcon,
  PaletteIcon,
  TreePalmIcon,
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
      className={`relative cursor-pointer w-full flex justify-center overflow-hidden ${className}`}
    >
      {heading}
      <motion.div
        animate={{
          height: hover.enter?.x ? "100%" : 0,
        }}
        transition={{ duration: 0.17 }}
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

export default function Home() {
  return (
    <Stairs>
      <div className="w-full h-full flex flex-col items-center justify-center font-shinko font-extrabold">
        <MaskDiv
          heading={
            <h1 className="font-light" style={{ fontSize: "6vw" }}>
              A Creative
            </h1>
          }
          marqueeHeading={
            <div
              style={{ fontSize: "6vw" }}
              className="font-light flex justify-center items-center gap-5 px-5 bg-light-cream text-light-black"
            >
              <PaintBrushIcon />
              <p>ANIMATIONS</p>
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <PaletteIcon />
              </motion.div>
              <p>FRAMER MOTION</p>
            </div>
          }
          duration={5.5}
          className="border-y-2 border-gray-400"
        />
        <MaskDiv
          heading={
            <h1 className="font-light" style={{ fontSize: "6vw" }}>
              Full Stack Developer
            </h1>
          }
          marqueeHeading={
            <div
              style={{ fontSize: "6vw" }}
              className="font-light flex justify-center items-center gap-5 px-5 bg-light-cream text-light-black"
            >
              <FilePyIcon />
              <p>PYTHON FLASK</p>
              <FileTsIcon />
              <p>TYPESCRIPT REACT</p>
              <GraphIcon />
              <p>LANGCHAIN AI-WORKFLOWS</p>
            </div>
          }
          repeat={3}
          duration={11.5}
          className="border-b-2 border-gray-400"
        />

        <MaskDiv
          heading={
            <h1
              className="font-redhawk font-extralight"
              style={{ fontSize: "6vw" }}
            >
              DIVYANSHU YADAV
            </h1>
          }
          marqueeHeading={
            <div
              style={{ fontSize: "6vw" }}
              className="font-redhawk flex justify-center items-center gap-5 px-5 bg-light-cream text-light-black"
            >
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <BeachBallIcon />
              </motion.div>
              <p>TREKKING</p>
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <BasketballIcon />
              </motion.div>
              <p>CASUAL SPORTS</p>
            </div>
          }
          duration={5}
          className="border-b-2 border-gray-400"
        />
      </div>
    </Stairs>
  );
}
