import { ReactNode, useEffect, useState } from "react";
import { opacity, expand } from "./anim";
import { motion, AnimatePresence } from "motion/react";

export const Stairs = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloadImages = async () => {
      // Get all images in the document
      const images = Array.from(document.querySelectorAll("img"));
      
      // Also get background images from CSS
      const bgImages = Array.from(document.querySelectorAll("*"))
        .map((el) => {
          const style = window.getComputedStyle(el);
          const bgImage = style.backgroundImage;
          if (bgImage && bgImage !== "none") {
            const match = bgImage.match(/url\(["']?(.+?)["']?\)/);
            return match ? match[1] : null;
          }
          return null;
        })
        .filter(Boolean) as string[];

      const imagePromises = [
        // Preload <img> elements
        ...images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = () => resolve();
                img.onerror = () => resolve();
              }
            })
        ),
        // Preload background images
        ...bgImages.map(
          (src) =>
            new Promise<void>((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        ),
      ];

      // Wait for all images or timeout after 5 seconds
      await Promise.race([
        Promise.all(imagePromises),
        new Promise((resolve) => setTimeout(resolve, 5000)),
      ]);

      setIsLoading(false);
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(preloadImages, 100);
    return () => clearTimeout(timer);
  }, []);

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