import { Stairs } from "@/components/Stairs";
import { useMediaQuery } from "react-responsive";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const heightOver = useMediaQuery({ maxHeight: 767 });
  const fontSize = isMobile ? (heightOver ? "5vh" : "8vw") : "4vw";
  return (
    <Stairs>
      <div className="w-full h-full whitespace-nowrap leading-[1] flex flex-col justify-center items-center pt-13 font-shinko font-extrabold"></div>
    </Stairs>
  );
}
