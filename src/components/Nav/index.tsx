import Link from "next/link";
import { motion } from "motion/react";

const Nav = () => {
  const items = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Work", href: "/work" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <nav className="header">
      {items.map((item, index) => {
        return (
          <motion.div className="items">
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};
export default Nav;
