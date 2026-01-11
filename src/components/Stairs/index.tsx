import { ReactNode } from "react";
import { expand } from "./anim";
import { motion, AnimatePresence } from "motion/react";

export const Stairs = ({ children }: { children: ReactNode }) => {
  const isLoading = false;

  const anim = (
    variants: { initial: any; enter: any; exit: any },
    custom?: number
  ) => {
    return {
      initial: "initial",
      animate: isLoading ? "initial" : "enter",
      exit: "exit",
      custom,
      variants,
    };
  };

  const nbOfColumns = 5;

  return (
    <div className="h-full">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="fixed w-full h-full bg-black z-1 pointer-events-none top-0 left-0"
          />
        )}
      </AnimatePresence>

      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-2">
        {[...Array(nbOfColumns)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, nbOfColumns - i)}
              className="relative w-full h-full bg-light-cream"
            />
          );
        })}
      </div>

      {children}
    </div>
  );
};