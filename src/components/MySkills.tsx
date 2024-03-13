interface MySkillsProps {
  mySkillsNavBreakRef: React.RefObject<HTMLDivElement>;
  skillsAnimRef: React.RefObject<HTMLDivElement>;
  isSkillsAnimInView: boolean;
}

const MySkills = (props: MySkillsProps) => {
  const fullWidthTransition = {
    width: props.isSkillsAnimInView ? "95%" : "0px",
    transition: "all 1000ms ease-in-out",
  };

  const fullRightTransition = {
    right: props.isSkillsAnimInView ? "45px" : "550px",
    transition: "all 1000ms ease-in-out",
  };

  const eightWidthAnim = {
    width: props.isSkillsAnimInView ? "80%" : "0px",
    transition: "all 1000ms ease-in-out",
  };

  const boxSlideEighty = {
    right: props.isSkillsAnimInView ? "125px" : "550px",
    transition: "all 1000ms ease-in-out",
  };

  const ninetyWidthAnim = {
    width: props.isSkillsAnimInView ? "90%" : "0px",
    transition: "all 1000ms ease-in-out",
  };

  const boxSlideNinety = {
    right: props.isSkillsAnimInView ? "70px" : "550px",
    transition: "all 1000ms ease-in-out",
  };

  const sixtyWidthAnim = {
    width: props.isSkillsAnimInView ? "60%" : "0px",
    transition: "all 1000ms ease-in-out",
  };

  const boxSlideSixty = {
    right: props.isSkillsAnimInView ? "230px" : "550px",
    transition: "all 1000ms ease-in-out",
  };

  return (
    <div className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] flex flex-col justify-center items-center mx-auto w-full px-[15px]">
      <div className="w-full mb-[80px] sm:mb-[45px] text-center">
        <h2
          className="lg:text-[36px] md:text-[30.4px] mb-[8px] text-white sm:text-[27px]"
          ref={props.mySkillsNavBreakRef}
        >
          My Skills
        </h2>
      </div>
      <h4 className="text-white w-full text-[24px] mb-[30px] px-[15px] sm:text-[21.6px]">
        Every Day is a New Challenge
      </h4>
      <div className="flex flex-row text-white">
        <div className="w-3/6 text-[16px] px-[15px]">
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
          <a className="text-[14px] py-[12px] px-[20px] border-[2px] mb-[48px] sm:text-[12.6px]">
            CONTACT ME
          </a>
        </div>
        <div className="w-3/6 px-[15px] text-[18px] sm:text-[16.2px]">
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div
              ref={props.skillsAnimRef}
              style={fullRightTransition}
              className="absolute"
            >
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                100%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className="h-[2px] w-[95%] bg-custom-orange"
              style={fullWidthTransition}
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div style={boxSlideEighty} className="absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                80%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              style={eightWidthAnim}
              className="h-[2px] w-[65%] bg-custom-orange"
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div style={boxSlideNinety} className="absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                90%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              className="h-[2px] w-[80%] bg-custom-orange"
              style={ninetyWidthAnim}
            ></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div style={boxSlideSixty} className="absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                60%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div
              style={sixtyWidthAnim}
              className="h-[2px] w-[60%] bg-custom-orange"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
