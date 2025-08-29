import { StarFourIcon } from "@phosphor-icons/react";
import { motion, useScroll } from "motion/react";
import { useRef } from "react";

export const Heading = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start -0.1", "center center"],
  });
  return (
    <motion.div
      ref={ref}
      style={{ opacity: scrollYProgress }}
      className="flex flex-col items-center gap-4"
    >
      <div className="p-3 overflow-hidden">
        <motion.p
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.3,
            type: "spring",
            damping: 13,
          }}
          className="w-fit font-deposta text-5xl text-center"
        >
          Divyanshu Yadav
        </motion.p>
      </div>
      <div className="flex flex-col whitespace-nowrap items-center text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-4xl max-[24rem]:text-2xl">
        <motion.div className="text-center flex justify-center items-center gap-4">
          <motion.div
            initial={{ scale: 0, rotate: "0deg" }}
            animate={{ scale: 1, rotate: "-90deg" }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex justify-center items-center -translate-y-2.5 max-sm:-translate-y-0.5 w-8 max-lg:w-7 max-md:w-6 max-sm:w-5 max-[24rem]:w-4"
          >
            <StarFourIcon size={30} weight="fill" />
          </motion.div>
          <div className="overflow-hidden flex items-end">
            <motion.p
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                type: "spring",
                damping: 13,
              }}
              className="w-fit"
            >
              A CREATIVE SOFTWARE
            </motion.p>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: "0deg" }}
            animate={{ scale: 1, rotate: "90deg" }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex justify-center items-center -translate-y-2.5 max-sm:-translate-y-0.5 w-8 max-lg:w-7 max-md:w-6 max-sm:w-5 max-[24rem]:w-4"
          >
            <StarFourIcon size={30} weight="fill" />
          </motion.div>
        </motion.div>
        <div className="overflow-hidden flex items-end">
          <motion.p
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.3,
              type: "spring",
              damping: 13,
            }}
            className="w-fit"
          >
            DEVELOPER
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};
