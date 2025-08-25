import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
const items = [
  { title: "About", href: "/" },
  { title: "Contact", href: "/contact" },
];

const NavItem = ({ item }: { item: { href: string; title: string } }) => {
  const pathname = usePathname();
  const ref = useRef<HTMLAnchorElement>(null);
  const [directionEnd, setDirectionEnd] = useState(false);
  const [hover, setHover] = useState<{
    enter?: { x: number; y: number };
    exit?: { x: number; y: number };
  }>({ enter: undefined, exit: undefined });
  useEffect(() => {
    if (!ref.current) return;
    const { left, width } = ref.current.getBoundingClientRect();
    const divStart = left;
    const divEnd = left + width;
    const mid = (divEnd + divStart) / 2;
    if (
      (hover.enter?.x && hover.enter?.x > mid) ||
      (hover.exit?.x && hover.exit?.x > mid)
    ) {
      setDirectionEnd(true);
    } else {
      setDirectionEnd(false);
    }
  }, [hover]);
  return (
    <Link
      ref={ref}
      onMouseEnter={(e) => setHover({ enter: { x: e.clientX, y: e.clientY } })}
      onMouseLeave={(e) => setHover({ exit: { x: e.clientX, y: e.clientY } })}
      href={item.href}
      className={`relative flex flex-col justify-center h-fit w-fit ${
        directionEnd ? "items-end" : ""
      }`}
    >
      <motion.p
        className={`px-1 ${pathname === item.href ? "text-light-orange" : ""}`}
      >
        {item.title}
      </motion.p>
      <motion.div
        animate={{
          width: hover.enter?.x ? "100%" : 0,
        }}
        transition={{ duration: 0.2 }}
        className="bottom-0.5 bg-light-orange h-0.5 -translate-y-0.5"
      />
    </Link>
  );
};

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 637 });
  const fontSize = isMobile ? "0.9rem" : "1rem";
  return (
    <nav
      style={{ fontSize }}
      className="z-1 fixed uppercase px-4 pt-4 flex w-full justify-between text-light-cream font-bold"
    >
      <p>Divyanshu Yadav</p>
      <div className="flex">
        {items.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
