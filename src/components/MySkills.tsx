interface MySkillsProps {
  mySkillsNavBreakRef: React.RefObject<HTMLDivElement>;
  skillsAnimRef: React.RefObject<HTMLDivElement>;
  isSkillsAnimInView: boolean;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const MySkills = (props: MySkillsProps) => {
  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] xsm:max-w-[540px] max-w-[350px] flex flex-col justify-center items-center mx-auto w-full px-[15px]">
      <div className="w-full lg:mb-[80px] md:mb-[60] sm:mb-[45px] xsm:mb-[40px] mb-[40px] text-center">
        <h2
          className="lg:text-[36px] md:text-[30.4px] xsm:text-[25px] text-[25px] mb-[8px] text-white sm:text-[27px]"
          ref={props.mySkillsNavBreakRef}
        >
          My Skills
        </h2>
      </div>
      <h4 className="text-white w-full text-[24px] mb-[30px] px-[15px] sm:text-[21.6px]">
        Every Day is a New Challenge
      </h4>
      <div
        ref={props.skillsAnimRef}
        className="flex lg:flex-row md:flex-row sm:flex-row flex-col text-white"
      >
        <div className="lg:w-3/6 md:w-3/6 sm:w-3/6 w-full text-[16px] px-[15px] lg:mb-0 md:mb-0 sm:mb-[35px] mb-[50px]">
          <p className="mb-[30px] opacity-[0.5] md:text-[15.2px] sm:text-[14.4px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            assumenda ut temporibus dolorem expedita numquam minus quam
            pariatur! Suscipit voluptate nisi repellat odio accusantium optio
            cupiditate vel minus delectus beatae!
          </p>
          <p className="mb-[30px] opacity-[0.5] md:text-[15.2px] sm:text-[14.4px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            assumenda ut temporibus dolorem expedita numquam minus quam
            pariatur! Suscipit voluptate nisi repellat odio accusantium optio
            cupiditate vel minus delectus beatae!
          </p>
          <a
            onClick={() => handleScrollToSection(props.contactSectionRef)}
            className="cursor-pointer text-[14px] py-[12px] px-[20px] border-[2px] mb-[48px] sm:text-[12.6px] hover:bg-white hover:text-custom-gray duration-300"
          >
            CONTACT ME
          </a>
        </div>
        <div className="lg:w-3/6 md:w-3/6 sm:w-3/6 xsm:w-full px-[15px] text-[18px] sm:text-[16.2px]">
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "right-[50px]"
                  : "lg:right-[445px] md:right-[350px] sm:right-[230px] right-[200px]"
              } absolute transition-all ease-in duration-1000`}
            >
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                100%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "w-[95%]"
                  : "lg:w-[15%] md:w-[25%] sm:w-[30%] w-[20%]"
              } h-[2px] bg-custom-orange transition-all ease-in duration-1000`}
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "lg:right-[130px] md:right-[110px] sm:right-[85px] xsm:right-[120px] right-[80px]"
                  : "lg:right-[445px] md:right-[350px] sm:right-[230px] right-[200px]"
              } absolute transition-all ease-in duration-1000`}
            >
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                80%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "w-[80%]"
                  : "lg:w-[15%] md:w-[25%] sm:w-[30%] w-[20%]"
              } h-[2px] bg-custom-orange transition-all ease-in duration-1000`}
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "lg:right-[85px] md:right-[70px] sm:right-[50px] xsm:right-[70px] right-[50px]"
                  : "lg:right-[445px] md:right-[350px] sm:right-[230px] right-[200px]"
              } absolute transition-all ease-in duration-1000`}
            >
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                90%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "w-[90%]"
                  : "lg:w-[15%] md:w-[25%] sm:w-[30%] w-[20%]"
              } h-[2px] bg-custom-orange transition-all ease-in duration-1000`}
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "lg:right-[235px] md:right-[195px] sm:right-[145px] xsm:right-[215px] right-[140px]"
                  : "lg:right-[445px] md:right-[350px] sm:right-[230px] right-[200px]"
              } absolute transition-all ease-in duration-1000`}
            >
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                60%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className={`${
                props.isSkillsAnimInView
                  ? "w-[60%]"
                  : "lg:w-[15%] md:w-[25%] sm:w-[30%] w-[20%]"
              } h-[2px] bg-custom-orange transition-all ease-in duration-1000`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
