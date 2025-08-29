import { Stairs } from "@/components/Stairs";
import { useMediaQuery } from "react-responsive";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { MaskDiv } from "@/components/MaskDiv";

export default function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const heightOver = useMediaQuery({ maxHeight: 767 });
  const fontSize = isMobile ? (heightOver ? "5vh" : "8vw") : "4vw";
  return (
    <Stairs>
      <div className="w-full h-screen whitespace-nowrap  flex flex-col justify-center items-center pt-13 font-redhawk font-extrabold">
        <MaskDiv
          heading={<h1 style={{ fontSize }}>GITHUB</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className="flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>@divyanshu0469</p>
              <GithubLogoIcon />
            </div>
          }
          repeat={6}
          duration={6}
          className="border-y-2 border-black"
        />
        <MaskDiv
          heading={<h1 style={{ fontSize }}>LINKEDIN</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className=" flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>reach out</p>
              <LinkedinLogoIcon weight="bold" />
            </div>
          }
          repeat={6}
          duration={6}
          className="border-b-2 border-black"
        />

        <MaskDiv
          heading={<h1 style={{ fontSize }}>X / TWITTER</h1>}
          marqueeHeading={
            <div
              style={{ fontSize }}
              className="flex justify-center items-center gap-5 px-5 bg-light-orange text-light-cream"
            >
              <p>@divyyadav31</p>
            </div>
          }
          repeat={6}
          duration={6}
          className="border-b-2 border-black"
        />
      </div>
    </Stairs>
  );
}
