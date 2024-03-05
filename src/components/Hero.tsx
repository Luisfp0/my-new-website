import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Presentation from "./Presentation";
import { FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <div className="container flex justify-center items-center w-full lg:max-w-[1150px] md:max-w-[960px] h-screen mx-auto">
      <div className="w-full">
        <figure className="flex mb-6 md:mb-5 sm:mb-[21.6px]">
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
        <a className="flex justify-center items-center absolute bottom-0 ml-4 mb-4 bg-custom-orange lg:h-70 lg:w-70 md:h-66.5 md:w-66.5 sm:h-[63px] sm:w-[63px]">
          <FaArrowDown color="white" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
