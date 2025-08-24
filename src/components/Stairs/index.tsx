import { ReactNode } from "react";
import { opacity, expand } from "./anim";
import { motion } from "motion/react";

export const Stairs = ({ children }: { children: ReactNode }) => {
  const anim = (
    variants: { initial: any; enter: any; exit: any },
    custom?: number
  ) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;
  return (
    <div className="h-full">
      <motion.div
        {...anim(opacity)}
        className="fixed w-full h-full bg-black z-1 pointer-events-none top-0 left-0"
      />

      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-2">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, i)}
              className="relative w-full h-full bg-black"
            />
          );
        })}
      </div>

      {children}
    </div>
  );
};
