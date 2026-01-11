import { useState, useRef, useLayoutEffect } from "react";
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

const CursorPopover = ({
  title,
  duration,
  content,
  mousePos,
}: {
  title: string;
  duration?: string;
  content?: string;
  mousePos: { x: number; y: number };
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (popoverRef.current) {
      const rect = popoverRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, [title, duration, content]);

  useLayoutEffect(() => {
    const offset = 20;
    const padding = 10; // Extra padding from screen edges
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let x = mousePos.x + offset;
    let y = mousePos.y + offset;

    // Check if popover overflows right edge
    if (x + dimensions.width + padding > screenWidth) {
      x = mousePos.x - dimensions.width - offset;
    }

    // Check if popover overflows left edge (after repositioning)
    if (x < padding) {
      x = padding;
    }

    // Check if popover overflows bottom edge
    if (y + dimensions.height + padding > screenHeight) {
      y = mousePos.y - dimensions.height - offset;
    }

    // Check if popover overflows top edge (after repositioning)
    if (y < padding) {
      y = padding;
    }

    setPosition({ x, y });
  }, [mousePos, dimensions]);

  return (
    <motion.div
      ref={popoverRef}
      className="fixed pointer-events-none z-50"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        willChange: "height, width, left,top",
        overflow: "hidden",
        transformOrigin: "top right",
      }}
      initial={{ height: 0, width: 0 }}
      animate={{ height: "auto", width: "auto" }}
      exit={{ height: 0, width: 0 }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="bg-black px-3 py-2 shadow-xl border border-light-cream/20 overflow-hidden">
        <div className="flex flex-row items-baseline gap-1 font-lt text-lg font-bold text-light-cream whitespace-nowrap overflow-hidden">
          <motion.span
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          >
            {title}
          </motion.span>
          {duration && (
            <sup className="font-ralgine text-xs inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "-100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
              >
                {duration}
              </motion.span>
            </sup>
          )}
        </div>
        {content && (
          <div className="text-sm font-light text-light-cream/80 whitespace-nowrap overflow-hidden">
            <motion.p
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
            >
              {content}
            </motion.p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const CustomAccordion = ({
  items,
  popoverTitle,
  popoverDuration,
  popoverContent,
  disableBottomBorder,
  open,
  setOpen,
  groupKey,
}: {
  items: {
    title: string;
    time: string;
    link?: string;
    type?: string;
    content: string;
  }[];
  popoverTitle?: string;
  popoverDuration?: string;
  popoverContent?: string;
  disableBottomBorder?: boolean;
  open: string | undefined;
  setOpen: (key: string | undefined) => void;
  groupKey: string;
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showPopover, setShowPopover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <>
      {showPopover && popoverTitle && (
        <CursorPopover
          title={popoverTitle}
          duration={popoverDuration}
          content={popoverContent}
          mousePos={mousePos}
        />
      )}

      {items.map((i, index) => {
        const itemKey = `${groupKey}-${index}`;
        return (
          <div
            key={index}
            className="w-full h-fit"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setShowPopover(true)}
            onMouseLeave={() => setShowPopover(false)}
          >
            <MaskDiv
              handleClick={() =>
                setOpen(open === itemKey ? undefined : itemKey)
              }
              heading={
                <div className="z-2 flex overflow-hidden flex-1 justify-between items-center cursor-pointer select-none">
                  <motion.p
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.2,
                      duration: 0.5,
                      type: "spring",
                      damping: 13,
                    }}
                    className="w-1/2 max-md:w-full"
                  >
                    {i.title}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.2,
                      duration: 0.5,
                      type: "spring",
                      damping: 13,
                    }}
                    className="max-md:hidden text-lg"
                  >
                    {i.type}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.2,
                      duration: 0.5,
                      type: "spring",
                      damping: 13,
                    }}
                    className="max-md:hidden text-lg"
                  >
                    {i.time}
                  </motion.p>
                </div>
              }
              className={`border-light-cream ${
                disableBottomBorder
                  ? "border-t"
                  : index === items.length - 1
                  ? "border-y"
                  : "border-t"
              }`}
            />
            <motion.div
              animate={{ height: open === itemKey ? "fit-content" : 0 }}
              transition={{ duration: 0.3 }}
              className="w-full overflow-hidden relative text-xl"
            >
              <div className="w-full h-fit px-4 flex justify-between items-center max-md:flex-col py-2">
                <div className="w-4/5 max-md:w-full">{i.content}</div>
                {i.link ? <CustomLink url={i.link} /> : null}
              </div>
            </motion.div>
          </div>
        );
      })}
    </>
  );
};

export const Work = () => {
  const [open, setOpen] = useState<string>();

  return (
    <div className="w-full h-full flex flex-col items-center p-10 text-2xl gap-4">
      <p className="font-lt uppercase text-center text-3xl">
        Excited to showcase my past work & experience
      </p>
      <div className="w-full flex flex-col items-center">
        <CustomAccordion
          items={doxperItems}
          popoverTitle="Doxper"
          popoverDuration="(2025 - Present)"
          popoverContent="Associate Software Developer"
          disableBottomBorder
          open={open}
          setOpen={setOpen}
          groupKey="doxper"
        />
        <CustomAccordion
          items={jumbayaItems}
          popoverTitle="Jumbaya"
          popoverDuration="(2024 - 2025)"
          popoverContent="Full Stack Developer"
          disableBottomBorder
          open={open}
          setOpen={setOpen}
          groupKey="jumbaya"
        />
        <CustomAccordion
          items={personalItems}
          popoverTitle="Personal"
          open={open}
          setOpen={setOpen}
          groupKey="personal"
        />
      </div>
    </div>
  );
};
