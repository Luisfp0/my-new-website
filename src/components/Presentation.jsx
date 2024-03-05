import useTyped from "../components/hooks/useTyped";
import { useRef } from "react";

const COLOR = "#2ccb69";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web apps</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web3</span>`,
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>mobile apps</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>javascript</span>`,
  ],
  typeSpeed: 65,
  backSpeed: 30,
  loop: true,
  cursorChar: `<span class="lg:text-[60px] md:text-[50px] sm:text-[43.2px]" style="color: ${COLOR}; sm:p padding-right: 32px">|</span>`,
};

function Presentation() {
  const ref = useRef(null);
  useTyped(ref, options);
  return (
    <div className="relative">
      <div className="border-4 border-solid border-white inline-block relative">
        <span
          className="lg:text-6xl md:text-5xl sm:text-[43.2px] text-white lg:py-8 lg:pl-8 lg:pr-2 md:py-6 md:pl-8 md:pr-2 sm:py-6 sm:pl-4"
          ref={ref}
        />
      </div>
      <div className="absolute w-0 h-0 border-solid border-white sm:border-b-[9px] sm:border-l-[9px] border-b-19 border-l-19 border-l-transparent left-10 -bottom-4 sm:-bottom-2 transform rotate-180"></div>
    </div>
  );
}

export default Presentation;
