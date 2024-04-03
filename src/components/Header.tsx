import logo from "../assets/img/logo.png";

interface HeaderProps {
  isAboutMeInView: boolean;
  isHomeInView: boolean;
  isMySkillsInView: boolean;
  isContactInView: boolean;
  homeSectionRef: React.RefObject<HTMLDivElement>;
  aboutMeSectionRef: React.RefObject<HTMLDivElement>;
  mySkillsSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

function Header(props: HeaderProps) {
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
      className={`z-50 bg-white flex items-center justify-center w-full fixed`}
    >
      <div className=" container flex items-center justify-between bg-blue w-full lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] xsm:max-w-[540px]">
        <a
          className="absolute mt-10 cursor-pointer"
          onClick={() => handleScrollToSection(props.homeSectionRef)}
        >
          <img src={logo} alt="Logo" />
        </a>
        <div className="items-center justify-end flex-grow h-full w-full text-right flex">
          <div
            onClick={() => handleScrollToSection(props.homeSectionRef)}
            className={`h-[56px] w-[100px] border-t-[3px] flex items-center justify-center opacity-[0.5] cursor-pointer ${
              props.isHomeInView &&
              "border-custom-orange font-semibold transition-opacity ease-in duration-700 opacity-[1]"
            }`}
          >
            <a className="lg:text-[14px] md:text-[13.3px]">Home</a>
          </div>
          <div
            onClick={() => handleScrollToSection(props.aboutMeSectionRef)}
            className={`h-[56px] w-[100px] border-t-[3px] flex items-center justify-center opacity-[0.5] cursor-pointer ${
              props.isAboutMeInView &&
              "border-custom-orange font-semibold transition-opacity ease-in duration-700 opacity-[1]"
            }`}
          >
            <a className="lg:text-[14px] md:text-[13.3px]">About me</a>
          </div>
          <div
            onClick={() => handleScrollToSection(props.mySkillsSectionRef)}
            className={`h-[56px] w-[100px] border-t-[3px] flex items-center justify-center opacity-[0.5] cursor-pointer ${
              props.isMySkillsInView &&
              "border-custom-orange font-semibold transition-opacity ease-in duration-700 opacity-[1]"
            }`}
          >
            <a className="lg:text-[14px] md:text-[13.3px]">Skills</a>
          </div>
          {/* <div
            className={`h-[56px] w-[100px] flex items-center justify-center ${
              props.isPortfolioInView && "border-t-[2px] border-custom-orange"
            }`}
          >
            <a className="lg:text-[14px] md:text-[13.3px]">Portfolio</a>
          </div> */}
          <div
            onClick={() => handleScrollToSection(props.contactSectionRef)}
            className={`h-[56px] w-[100px] flex items-center border-t-[3px] justify-center cursor-pointer transition-opacity ease-in duration-700 ${
              props.isContactInView
                ? "border-custom-orange font-semibold opacity-[1]"
                : "opacity-[0.5]"
            }`}
          >
            <a className="lg:text-[14px] md:text-[13.3px]">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
