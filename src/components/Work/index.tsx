import { useState } from "react";
import { MaskDiv } from "../MaskDiv";
import { motion } from "motion/react";
import Link from "next/link";

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
          <div className="z-2 flex flex-1 justify-between cursor-pointer">
            <p>{i.title}</p>
            <p>{i.time}</p>
          </div>
        }
        className={`border-light-cream ${
          index === 0 ? "border-y" : "border-b"
        }`}
      />
      <motion.div
        animate={{ height: open === index ? "fit-content" : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-hidden relative text-xl px-4 gap-2 flex justify-between items-center"
      >
        <div className="w-4/5">{i.content}</div>
        {i.link && (
          <Link
            href={i.link}
            className="text-lg h-6 whitespace-nowrap px-2 outline outline-dark-orange rounded-sm hover:bg-light-orange flex items-center"
          >
            Check out
          </Link>
        )}
      </motion.div>
    </div>
  ));
};

export const Work = () => {
  return (
    <div className="w-full h-full flex flex-col items-center p-10 text-3xl">
      <p className="font-lt uppercase">
        Excited to showcase my past work & experience
      </p>
      <p>{"Jumbaya (Jun 24 - Jun 25)"}</p>
      <CustomAccordion items={accordionItems} />
    </div>
  );
};
