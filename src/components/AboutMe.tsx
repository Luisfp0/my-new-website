import { FaArrowDown, FaDownload } from "react-icons/fa";

import Retract from "../assets/img/retract.jpeg";

function AboutMe() {
  const backgroundStyle = {
    backgroundImage: `url(${Retract})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="lg:max-w-[1150px] mx-auto flex flex-col justify-center items-center">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl text-white">About Me</h2>
      </div>
      <div className="flex h-[547px]">
        <div className="w-3/6 h-full" style={backgroundStyle}></div>
        <div className="w-3/6 flex flex-col justify-center px-8">
          <h4 className="w-[120px] text-center mb-4 text-lg text-white border-[3px] border-solid border-white py-3 px-4">
            Hi there
          </h4>
          <div className="relative bottom-[18px] left-[25px] w-0 h-0 border-solid border-white border-b-[10px] border-l-[10px] border-l-transparent transform rotate-180"></div>{" "}
          <p className="text-white opacity-50 mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur ex quis eaque incidunt ut in laboriosam ea expedita
            molestiae, harum quisquam beatae perspiciatis. Corporis maiores
            consequatur cum inventore ipsum hic!
          </p>
          <dl className="grid grid-cols-2 gap-x-4 text-white text-[16px]">
            <div>
              <dt className="text-[#f26c4f]">Name:</dt>
              <dd className="mb-[15px]">Luís Fernando</dd>
            </div>
            <div>
              <dt className="text-[#f26c4f]">Email:</dt>
              <dd className="mb-[15px]">luis.oliveirabr1@gmail.com</dd>
            </div>
            <div>
              <dt className="text-[#f26c4f]">Phone:</dt>
              <dd className="mb-[15px]">+55 (62) 9 9322-2660</dd>
            </div>
            <div>
              <dt className="text-[#f26c4f]">Twitter:</dt>
              <dd className="mb-[15px]">Luisfp0</dd>
            </div>
          </dl>
          <hr className="mt-[16px] mb-[48px]"></hr>
          <div className="flex gap-5 text-white text-[14px]">
            <a className="flex items-center justify-center bg-custom-orange py-[12px] px-[12px]">
              <span>CONTACT ME</span>
              <FaArrowDown
                color="white"
                className="h-4 w-4 transform -rotate-90 ml-[10px]"
              />
            </a>
            <a className="flex items-center justify-center bg-transparent border-2 py-[12px] px-[12px]">
              <FaDownload color="white" className="h-4 w-4 mr-[10px]" />
              <span>DOWNLOAD CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
