import { Stairs } from "@/components/Stairs";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "motion/react";
import { BeachBallIcon, IslandIcon } from "@phosphor-icons/react";

const MaskDiv = ({
  heading,
  marqueeHeading,
  className,
  duration = 7,
}: {
  heading: ReactNode;
  marqueeHeading: ReactNode;
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
        <div className="bg-light-green text-light-cream absolute whitespace-nowrap flex justify-center items-center w-full overflow-x-hidden">
          {Array(5)
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
          heading={<h1 style={{ fontSize: "6vw" }}>Divyanshu</h1>}
          marqueeHeading={
            <div
              style={{ fontSize: "6vw" }}
              className="flex justify-center items-center gap-5 px-5"
            >
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <BeachBallIcon />
              </motion.div>
              <p>SOFTWARE-DEVELOPER</p>
              <motion.div
                animate={{ rotate: "-360deg" }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <BeachBallIcon />
              </motion.div>
              <p>OPEN-SOURCE-CONTRIBUTOR</p>
            </div>
          }
          duration={7}
          className="border-y-2 border-gray-400"
        />
        <MaskDiv
          heading={<h1 style={{ fontSize: "6vw" }}>Yadav</h1>}
          marqueeHeading={
            <div
              style={{ fontSize: "6vw" }}
              className="flex justify-center items-center gap-5 px-5"
            >
              <motion.div>
                <IslandIcon />
              </motion.div>
              <p>FREELANCER</p>
              <motion.div>
                <IslandIcon />
              </motion.div>
              <p>EXPLORER</p>
            </div>
          }
          duration={3.5}
          className="border-b-2 border-gray-400"
        />
      </div>
    </Stairs>
  );
}
