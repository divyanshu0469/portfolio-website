import { useState } from "react";
import { MaskDiv } from "../MaskDiv";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const accordionItems = [
  {
    title: "Tutor booking platform",
    time: "June 2025",
    link: undefined,
    content:
      "Created a UI flow for a client which required basic auth and a flow to book tutor and have a 1-1 session",
  },
  {
    title: "AI first Conversion rate optimization platform",
    time: "May 2025",
    link: "/link",
    content:
      "Worked with a lean team in building a platform which can be used to generate campaigns for CRO. Using AI generated code for getting variants",
  },
  {
    title: "AI powered Social media content calendar",
    time: "Apr 2025",
    link: "/link2",
    content:
      "Created a class using selenium based automation for scraping brand data and persona creation with text and image generation",
  },
];

const CustomLink = ({ url }: { url: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Link
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href={url}
        className="text-lg relative whitespace-nowrap"
      >
        <motion.div
          animate={{
            color: isHovered ? "var(--light-orange)" : "var(--light-cream)",
          }}
          className="flex items-center"
        >
          Check out <ArrowUpRightIcon />
        </motion.div>
        <div className="absolute flex justify-between left-1/2 -translate-x-1/2 bottom-0 w-full h-0.5">
          <motion.div
            animate={{
              backgroundColor: isHovered
                ? "var(--light-orange)"
                : "var(--light-cream)",
            }}
            className="w-full"
          />
        </div>
      </Link>
    </>
  );
};

const CustomAccordion = ({
  items,
}: {
  items: {
    title: string;
    time: string;
    link?: string;
    content: string;
  }[];
}) => {
  const [open, setOpen] = useState<number>();
  return items.map((i, index) => (
    <div key={index} className="w-full h-fit">
      <MaskDiv
        handleClick={() => setOpen((v) => (v === index ? undefined : index))}
        heading={
          <div className="z-2 flex flex-1 justify-between cursor-pointer select-none">
            <p>{i.title}</p>
            <p className="max-md:hidden">{i.time}</p>
          </div>
        }
        className={`border-light-cream ${
          index === items.length - 1 ? "border-y" : "border-t"
        }`}
      />
      <motion.div
        animate={{ height: open === index ? "fit-content" : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-hidden relative text-xl"
      >
        <div className="w-full h-fit px-4 flex justify-between items-center max-md:flex-col py-2">
          <div className="w-4/5 max-md:w-full">{i.content}</div>
          {i.link ? <CustomLink url={i.link} /> : null}
        </div>
      </motion.div>
    </div>
  ));
};

export const Work = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-10 text-2xl">
      <p className="font-lt uppercase text-center text-3xl">
        Excited to showcase my past work & experience
      </p>
      <p className="text-xl">{"Jumbaya (Jun 24 - Jun 25)"}</p>
      <CustomAccordion items={accordionItems} />
    </div>
  );
};
