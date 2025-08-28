"use client";
import { Stairs } from "@/components/Stairs";
import { StarFourIcon } from "@phosphor-icons/react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Heading = () => {
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

const RepeatedImages = ({
  images,
  repeat = 1,
  className,
}: {
  images: string[];
  repeat?: number;
  className?: string;
}) => {
  return Array(repeat)
    .fill(0)
    .map((_, idx) => (
      <div key={idx} className="flex flex-col gap-4">
        {images.map((src, index) => (
          <Image
            width={2268}
            height={4032}
            src={src}
            key={index}
            alt="parallax-image"
            className={className}
          />
        ))}
      </div>
    ));
};

const images = [
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "/5.jpg",
  "/6.jpg",
  "/7.jpg",
  "/8.jpg",
  "/9.jpg",
  "/10.jpg",
];

const ImageParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.89]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 0.89]);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <div className="w-full h-full overflow-hidden">
      <motion.div ref={ref} className="w-full h-full relative flex gap-4 px-4">
        <motion.div style={{ y: y1 }}>
          <RepeatedImages images={[images[0], images[3], images[6]]} />
        </motion.div>
        <motion.div style={{ y: y2 }}>
          <RepeatedImages images={[images[4], images[7], images[1]]} />
        </motion.div>
        <motion.div style={{ y: y3 }}>
          <RepeatedImages images={[images[5], images[2], images[8]]} />
        </motion.div>
        <motion.div style={{ y: y4 }}>
          <RepeatedImages images={[images[7], images[3], images[8]]} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default function About() {
  return (
    <Stairs>
      <div className="font-lt leading-[1] h-screen gap-3 flex flex-col justify-center items-center">
        <Heading />
      </div>
      <div className="bg-light-cream text-light-black h-screen text-8xl font-lt">
        <ImageParallax />
      </div>
      <div className="bg-light-black text-light-black h-screen text-8xl font-lt"></div>
    </Stairs>
  );
}
