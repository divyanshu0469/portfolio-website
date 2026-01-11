import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const RepeatedImages = ({
  images,
  repeat = 1,
  className,
}: {
  images: string[];
  repeat?: number;
  className?: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      {Array(repeat)
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
        ))}
    </div>
  );
};

const images = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
  "/7.webp",
  "/8.webp",
  "/9.webp",
];

export const ImageParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 1.75]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * -0.2]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
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
        <motion.div style={{ y: y1 }} className="-translate-y-full">
          <RepeatedImages
            images={[images[0], images[3], images[6]]}
            className="rounded-md"
            repeat={4}
          />
        </motion.div>
        <motion.div style={{ y: y2 }}>
          <RepeatedImages
            images={[images[4], images[7], images[1]]}
            className="rounded-md"
            repeat={4}
          />
        </motion.div>
        <motion.div style={{ y: y3 }} className="-translate-y-full">
          <RepeatedImages
            images={[images[5], images[2], images[8]]}
            className="rounded-md"
            repeat={3}
          />
        </motion.div>
        <motion.div style={{ y: y4 }} className="-translate-y-full">
          <RepeatedImages
            images={[images[7], images[3], images[8]]}
            className="rounded-md"
            repeat={4}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
