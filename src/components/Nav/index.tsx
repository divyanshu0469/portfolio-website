import Link from "next/link";
import { motion, useAnimationFrame } from "motion/react";
import { ReactNode, useRef, useState } from "react";
const items = [
  { title: "Home", href: "/", subtitle: "I AM A SOFTWARE DEV" },
  { title: "About", href: "/about", subtitle: "AAAAAA" },
  { title: "Work", href: "/work", subtitle: "WWWWWW" },
  { title: "Contact", href: "/contact", subtitle: "CCCCCC" },
];

const Nav = () => {
  const [isHovered, setIsHovered] = useState<number>();
  return (
    <nav className="absolute right-0 flex w-fit justify-end text-light-black font-bold pt-4 pr-4 bg-light-cream">
      {items.map((item, index) => (
        <Link
          key={`nav-item-${index}`}
          onMouseEnter={() => setIsHovered(index)}
          onMouseLeave={() => setIsHovered(undefined)}
          href={item.href}
          className={`relative flex flex-col justify-center h-fit w-fit ${
            isHovered === index ? "items-start" : "items-end"
          }`}
        >
          <motion.p className="px-1">{item.title}</motion.p>
          <motion.div
            animate={{
              width: isHovered === index ? "100%" : 0,
            }}
            style={{ transition: "transform .5s cubic-bezier(1,0,0,1)" }}
            className="bottom-0.5 bg-light-black h-0.5 -translate-y-0.5"
          />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
