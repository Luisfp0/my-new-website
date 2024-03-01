import useTyped from "../components/hooks/useTyped";
import { useRef } from "react";

const COLOR = "#2ccb69";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web apps</span>`,
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>mobile apps</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>javascript</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web3</span>`,
  ],
  typeSpeed: 65,
  backSpeed: 30,
  loop: true,
  cursorChar: `<span style="font-size: 60px; color: ${COLOR}; padding-right: 32px">|</span>`,
};

function Presentation() {
  const ref = useRef(null);
  useTyped(ref, options);
  return (
    <div className="relative">
      <div className="border-4 border-solid border-white inline-block relative">
        <span className="text-6xl text-white py-8 pl-8 pr-2" ref={ref} />
      </div>
      <div className="absolute w-0 h-0 border-solid border-white border-b-19 border-l-19 border-l-transparent left-10 -bottom-4 transform rotate-180"></div>
    </div>
  );
}

export default Presentation;
