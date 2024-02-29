import useTyped from "../components/hooks/useTyped";
import { useRef } from "react";

const COLOR = "#2ccb69";

const options = {
  strings: [
    `I code cool <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web apps</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>javascript</span>`,
    `I love <span style='color: ${COLOR}; text-shadow: rgba(0, 173, 109, 0.393) 10px 0px 10px;'>web3</span>`,
  ],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  cursorChar: '<span style="font-size: 60px; color: #2ccb69;">|</span>',
};

function Presentation() {
  const ref = useRef(null);
  useTyped(ref, options);
  return (
    <div>
      <span className="text-6xl text-white" ref={ref} />
    </div>
  );
}

export default Presentation;
