import { useState } from "react";
import { MaskDiv } from "../MaskDiv";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const doxperItems = [
  {
    title: "Doxper Blu 2.0",
    type: "Development, Design",
    time: "2025",
    content:
      "Worked at a product based startup with a lean team in building a app that can streamline hospital management, My work here was heavy on frontend and requirement based backend. I have shipped pixel perfect responsive components for our new app, developed multiples screens and flows like template CRUD, appointment registration, order creation and history, role based flows for receptionist and doctor. I have also utilised my past research on different design choices and animations to bring flows to life.",
  },
  {
    title: "Webflow based production website management",
    type: "Development, Design",
    time: "2025",
    link: "https://uncover.co.in/",
    content:
      "I have helped manage and create multiple templates and components for webflow website, handled CMS collections. Deployed responsive and animated pages while working with the rest of the team in refining the design",
  },
];

const jumbayaItems = [
  {
    title: "AI first Conversion rate optimization platform",
    type: "Development",
    time: "2025",
    link: "https://medium.com/@divyyanshu/how-i-reduced-ai-workflow-time-from-15-minutes-to-5-minutes-using-langgraph-dynamic-n-sends-abed1dda84ae",
    content:
      "Worked with a lean team in building a platform which can be used to generate campaigns for CRO. Using AI generated code for getting variants. For this I also optimized the AI workflow by orchestrating a new approach - parallelisation of stateless nodes (Resulting in a reduced time from 15 mins to 3-5mins)",
  },
  {
    title: "AI powered Social media content calendar",
    type: "Development",
    time: "2025",
    link: "https://medium.com/@divyyadav31/building-an-ai-powered-social-media-marketing-calendar-7b6b7be4491a",
    content:
      "Created a class using selenium based automation for scraping brand data and persona creation with text and image generation. Over a glance this was a project which required me to use AI for understanding the brand's tone and type of content posted which was analysed and later used to generate competitors in similar industry and generating popular relevant hashtags. All this information is later used for generation of caption and images (configurable amount)",
  },
  {
    title: "Jumbaya Schools",
    type: "Development",
    time: "2024",
    content:
      "Worked on a platform pre-pivot. For this, I implemented admin panel and CRUD annotaions(image, text and voice notes) on responsive canvas. These are some of the features I took ownership, aside from this I also worked on fixing prod bugs and shipping minor features.",
  },
];

const personalItems = [
  {
    title: "React Meet",
    type: "Development, Design",
    time: "2025",
    link: "https://use-react-meet.vercel.app/home",
    content:
      "Published a component library containing Reusable Meeting UI and commonly used methods for speeding up development",
  },
  {
    title: "Himani Yadav's Portfolio",
    type: "Development, Design",
    time: "2025",
    link: "https://himani-yadav.vercel.app/home",
    content:
      "Developed a minimal clean portfolio with CRUD operations for the owner, connected with CMS. Bringing focus to the lively images",
  },
  {
    title: "TutorTrack",
    type: "Development, Design",
    time: "2025",
    link: undefined,
    content:
      "Provided my frontend expertise to a client for bootstraping a tutor booking platform which can connect verified tutors to students. I developed flows for auth, requesting a tutor session and setting up 1 on 1 session.",
  },
  {
    title: "ThorDashboard - Shopify alternative",
    type: "Development",
    time: "2025",
    link: undefined,
    content:
      "Worked with a client providing assistance in maintaining the platform, fixing frontend bugs and adding new reusable components and features",
  },
  {
    title: "Rent-logger",
    type: "Development, Design",
    time: "2024",
    link: "https://rent-logger.vercel.app/login",
    content:
      "This is was a personal project, realised that traditional rent diary was too out dated so developed this for internal use (does exactly as the name suggests)",
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
    type?: string;
    content: string;
  }[];
}) => {
  const [open, setOpen] = useState<number>();
  return items.map((i, index) => (
    <div key={index} className="w-full h-fit">
      <MaskDiv
        handleClick={() => setOpen((v) => (v === index ? undefined : index))}
        heading={
          <div className="z-2 flex overflow-hidden flex-1 justify-between items-center cursor-pointer select-none">
            <motion.p 
      initial={{  y: "100%" }}
      whileInView={{  y: "0%" }}
      transition={{ duration: 0.3,type: "spring",
            damping: 13, }} className="w-1/2 max-md:w-full">{i.title}</motion.p>
            <motion.p initial={{  y: "100%" }}
      whileInView={{  y: "0%" }}
      transition={{ duration: 0.3,type: "spring",
            damping: 13, }} className="max-md:hidden text-lg">{i.type}</motion.p>
            <motion.p initial={{  y: "100%" }}
      whileInView={{  y: "0%" }}
      transition={{ duration: 0.3,type: "spring",
            damping: 13, }} className="max-md:hidden text-lg">{i.time}</motion.p>
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
    <div className="w-full h-full flex flex-col items-center p-10 text-2xl gap-4">
      <p className="font-lt uppercase text-center text-3xl">
        Excited to showcase my past work & experience
      </p>
      <div className="w-full flex flex-col items-center">
        <p className="text-xl text-center p-4">
          {"Associate Software Developer @Doxper (2025 - Present)"}
        </p>
        <CustomAccordion items={doxperItems} />
        <p className="text-xl text-center p-4">
          {"Full Stack Developer @Jumbaya (2024 - 2025)"}
        </p>
        <CustomAccordion items={jumbayaItems} />
        <p className="text-xl text-center p-4">{"Personal"}</p>
        <CustomAccordion items={personalItems} />
      </div>
    </div>
  );
};
