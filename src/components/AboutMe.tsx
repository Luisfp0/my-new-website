import { FaArrowDown, FaDownload } from "react-icons/fa";
import example from "../assets/img/examplePerfilImage.jpg";
import curriculum from "../assets/Curriculum-Luís-Fernando.pdf";

interface AboutMeProps {
  aboutMeNavBreakRef: React.RefObject<HTMLDivElement>;
  hiThereAnimRef: React.RefObject<HTMLDivElement>;
  isHiThereAnimInView: boolean;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const AboutMe = (props: AboutMeProps) => {
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleDownload() {
    const fileUrl = curriculum;
    const fileName = "Curriculum-Luís-Fernando.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }

  return (
    <div className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] mx-auto flex flex-col justify-center items-center">
      <div className="flex justify-center mb-8">
        <h2 className="text-3xl text-white sm:text-[27px] lg:text-[36px] md:text-[30px]">
          About Me
        </h2>
      </div>
      <div className="flex lg:h-[547px] md:h-[547px] sm:h-[480px]">
        <div className="h-full w-3/6 lg:flex md:flex text-end">
          <img src={example}></img>
        </div>
        <div className="w-3/6 flex flex-col justify-center px-8 relative">
          <div
            className={`${
              props.isHiThereAnimInView ? "w-[120px]" : "w-[0px]"
            } h-[2px] absolute bg-white lg:top-[70px] md:top-[60px] sm:top-[3px] transition-all linear duration-500`}
          ></div>
          <div
            className={`${
              props.isHiThereAnimInView ? "h-[55px] delay-500" : "h-[0px]"
            } absolute bg-white left-[150px] lg:top-[70px] md:top-[62px] w-[2px] sm:top-[3px] transition-all linear duration-500`}
          ></div>
          <div
            className={`${
              props.isHiThereAnimInView ? "h-[57px]" : "h-[0px]"
            } absolute lg:top-[70px] w-[2px] md:top-[62px] bg-white sm:left-[30px] sm:top-[3px] transition-all linear duration-500`}
          ></div>
          <div
            className={`${
              props.isHiThereAnimInView ? "w-[120px] delay-500" : "w-[0px]"
            } absolute bg-white lg:top-[125px] md:top-[116px] sm:top-[58px] h-[2px] transition-all linear duration-500 `}
          ></div>
          <h4
            ref={props.hiThereAnimRef}
            className="w-[120px] text-center mb-4 sm:text-[21px] text-[24px] text-white border-solid border-white py-3 px-4 relative"
          >
            Hi there
          </h4>
          <div
            className={`${
              props.isHiThereAnimInView
                ? "border-b-[9px] border-l-[9px] transition-all linear duration-500 delay-500"
                : "border-b-[0px] border-l-[0px] transition-all linear duration-500"
            } absolute lg:top-[127px] left-[50px] md:top-[118px] sm:top-[59px] w-0 h-0 border-solid border-white border-l-transparent transform rotate-180`}
          ></div>
          <p
            ref={props.aboutMeNavBreakRef}
            className="text-white opacity-50 mb-4 sm:text-[14.4px] sm:mb-[27px] mt-[15px]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur ex quis eaque incidunt ut in laboriosam ea expedita
            molestiae, harum quisquam beatae perspiciatis. Corporis maiores
            consequatur cum inventore ipsum hic!
          </p>
          <dl className="grid grid-cols-2 gap-x-4 text-white text-[16px]">
            <div>
              <dt className="text-[#f26c4f] sm:text-[14.4px]">Name:</dt>
              <dd className="mb-[15px] sm:text-[14.4px]">Luís Fernando</dd>
            </div>
            <div>
              <dt className="text-[#f26c4f] sm:text-[14.4px]">Email:</dt>
              <dd className="mb-[15px] sm:text-[14.4px]">
                luis.oliveirabr1@gmail.com
              </dd>
            </div>
            <div>
              <dt className="text-[#f26c4f] sm:text-[14.4px]">Phone:</dt>
              <dd className="mb-[15px] sm:text-[14.4px]">
                +55 (62) 9 9322-2660
              </dd>
            </div>
            <div>
              <dt className="text-[#f26c4f] sm:text-[14.4px]">Twitter:</dt>
              <dd className="mb-[15px] sm:text-[14.4px]">Luisfp0</dd>
            </div>
          </dl>
          <hr className="mt-[16px] mb-[48px] opacity-[0.3]"></hr>
          <div className="flex gap-5 text-white text-[14px]">
            <div
              className="relative overflow-hidden group flex"
              onClick={() => handleScrollToSection(props.contactSectionRef)}
            >
              <a className="absolute lg:right-[221px] md:right-[220px] cursor-pointer flex items-center justify-center h-[45px] w-[220px] bg-[#d44229] lg:group-hover:translate-x-[221px] md:group-hover:translate-x-[235px] transition-all duration-300">
                <span className="sm:text-[12.6px] md:sm:text-[12.6px] lg:sm:text-[13.3px]">
                  CONTACT ME
                </span>
                <FaArrowDown
                  color="white"
                  className="h-3 w-3 transform -rotate-90 ml-[10px]"
                />
              </a>
              <a className="cursor-pointer flex items-center justify-center h-[45px] w-[220px] bg-[#f26c4f] lg:group-hover:translate-x-[221px] md:group-hover:translate-x-[235px] transition-all duration-300">
                <span className="sm:text-[12.6px] md:sm:text-[12.6px] lg:sm:text-[13.3px]">
                  CONTACT ME
                </span>
                <FaArrowDown
                  color="white"
                  className="h-3 w-3 transform -rotate-90 ml-[10px]"
                />
              </a>
            </div>
            <div
              className="relative group overflow-hidden flex"
              onClick={handleDownload}
            >
              <a className="absolute lg:right-[221px] md:right-[220px] cursor-pointer flex items-center justify-center h-[45px] w-[220px] bg-[white] lg:group-hover:translate-x-[221px] md:group-hover:translate-x-[235px] transition-all duration-300">
                <span className="sm:text-[12.6px] lg:sm:text-[13.3px] w-[97px] text-black">
                  DOWNLOAD CV
                </span>
                <FaDownload color="black" className="h-4 w-4 ml-[10px]" />
              </a>
              <a className="cursor-pointer flex items-center justify-center h-[45px] w-[220px] border-[1px] bg-none lg:group-hover:translate-x-[221px] md:group-hover:translate-x-[235px] transition-all duration-300">
                <span className="sm:text-[12.6px] w-[97px] lg:sm:text-[13.3px]">
                  DOWNLOAD CV
                </span>
                <FaDownload color="white" className="h-3 w-3 ml-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
