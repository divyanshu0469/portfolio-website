import { ReactNode } from "react";
import { opacity, expand } from "./anim";
import { motion } from "motion/react";

export const Stairs = ({
  children,
  backgroundColor,
}: {
  children: ReactNode;
  backgroundColor?: string;
}) => {
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
    <div className={"page stairs"} style={{ backgroundColor }}>
      <motion.div {...anim(opacity)} className="transition-background" />

      <div className="transition-container">
        {[...Array(nbOfColumns)].map((_, i) => {
          return <motion.div key={i} {...anim(expand, i)} />;
        })}
      </div>

      {children}
    </div>
  );
};
