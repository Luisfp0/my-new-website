import KeyboardImage from "../assets/img/bg-keyboard.jpg";

interface HireMeProps {
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const HireMe = (props: HireMeProps) => {
  const backgroundStyle = {
    backgroundImage: `url(${KeyboardImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      style={backgroundStyle}
      className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] xsm:max-w-[540px] max-w-[400px] mx-auto justify-center items-center w-full lg:h-[163px] md:h-[163px] sm:h-[163px] xsm:h-[120px] h-[120px] relative"
    >
      <div className="w-full h-full flex-col flex items-center justify-center bg-black bg-opacity-80 border-2 border-custom-gray relative">
        <h3 className="lg:text-[30px] md:text-[20.9px] md:my[15.2px] lg:my-[16px] text-white ">
          Let's Work Together On Your Next Project!
        </h3>
        <a
          onClick={() => handleScrollToSection(props.contactSectionRef)}
          className="cursor-pointer text-white bg-custom-orange py-[12px] px-[20px] absolute -bottom-[22px] text-[12px] xsm:text-[12.5px] sm:text-[12.5px] md:text-[13.3px] lg:text-[14px]"
        >
          HIRE ME NOW!
        </a>
        <div className="absolute md:-bottom-[29px] md:left-[430px] lg:-bottom-[30px] lg:left-[520px] sm:-bottom-[30px] xsm:left-[225px] xsm:-bottom-[30px] sm:left-[310px] left-[155px] -bottom-[30px] w-0 h-0 border-solid border-custom-orange md:border-b-[8px] md:border-l-[8px] border-b-[10px] border-l-[10px] lg:border-b-[10px] lg:border-l-[10px] sm:border-b-[10px] sm:border-l-[10px] xsm:border-b-[10px] xsm:border-l-[10px] border-l-transparent transform rotate-180"></div>
      </div>
    </div>
  );
};

export default HireMe;
