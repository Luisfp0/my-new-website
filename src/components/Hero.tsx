import {
  FaTwitterSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";
import mouseImage from "../assets/img/mouse.svg";
import Presentation from "./Presentation";

interface HeroProps {
  homeNavBreakRef: React.RefObject<HTMLDivElement>;
  aboutMeSectionRef: React.RefObject<HTMLDivElement>;
}

const Hero = (props: HeroProps) => {
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container flex justify-center items-center w-full lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] h-screen mx-auto">
      <div className="w-full">
        <figure
          className="flex mb-6 md:mb-5 sm:mb-[21.6px]"
          ref={props.homeNavBreakRef}
        >
          <a
            href="https://github.com/Luisfp0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
              className="mr-6"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-fernando-de-paulo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="mr-6"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/louis_fnando/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare
              className="mr-6"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
          <a
            href="https://twitter.com/Louisfp0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
        </figure>
        <h1 className="font-normal lg:text-6xl md:text-5xl sm:text-[43.2px] text-white mb-11 md:mb-9 sm:mb-[27px]">
          I am Luís Fernando
        </h1>
        <Presentation />
        <a
          className="flex justify-center items-center absolute bottom-10 animate-bounceSlow cursor-pointer"
          onClick={() => handleScrollToSection(props.aboutMeSectionRef)}
        >
          <img src={mouseImage} alt="Scrow down mouse" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
