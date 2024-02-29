import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Presentation from "./Presentation";

function Hero() {
  return (
    <div className="flex justify-center items-center w-7/12 h-screen mx-auto max-w-1150">
      <div className="w-full">
        <figure className="flex mb-6">
          <a>
            <FaTwitterSquare
              className="mr-6"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
          <a>
            <FaLinkedin
              className="mr-6"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
          <a>
            <FaInstagramSquare
              className="mr-6"
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
          <a>
            <FaGithubSquare
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                width: "19px",
                height: "19px",
              }}
            />
          </a>
        </figure>
        <h1 className="font-normal text-6xl text-white mb-11">
          I am Luís Fernando
        </h1>
        <Presentation />
      </div>
    </div>
  );
}

export default Hero;
