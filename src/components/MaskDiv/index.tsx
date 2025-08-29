import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export const MaskDiv = ({
  heading,
  marqueeHeading,
  className,
  duration = 7,
  repeat = 4,
  handleClick,
}: {
  heading: ReactNode;
  marqueeHeading?: ReactNode;
  repeat?: number;
  duration?: number;
  className?: string;
  handleClick?: () => void;
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
    <motion.div
      ref={divRef}
      animate={{
        paddingLeft: hover.enter?.x ? "0.5rem" : 0,
        paddingRight: hover.enter?.x ? "0.5rem" : 0,
      }}
      onMouseEnter={(e) => setHover({ enter: { x: e.clientX, y: e.clientY } })}
      onMouseLeave={(e) => setHover({ exit: { x: e.clientX, y: e.clientY } })}
      onClick={handleClick}
      className={`relative cursor-default w-full flex justify-center overflow-hidden ${className}`}
    >
      {heading}
      <motion.div
        animate={{
          height: hover.enter?.x ? "100%" : 0,
        }}
        transition={{ duration: 0.13 }}
        className={`absolute w-full bg-light-orange overflow-hidden flex ${maskDirection}`}
      >
        {marqueeHeading && (
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
        )}
      </motion.div>
    </motion.div>
  );
};
