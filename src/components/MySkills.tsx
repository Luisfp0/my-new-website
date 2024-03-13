interface MySkillsProps {
  mySkillsRef: React.RefObject<HTMLDivElement>;
}

const MySkills = (props: MySkillsProps) => {
  return (
    <div className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] flex flex-col justify-center items-center mx-auto w-full px-[15px]">
      <div className="w-full mb-[80px] sm:mb-[45px] text-center">
        <h2
          className="lg:text-[36px] md:text-[30.4px] mb-[8px] text-white sm:text-[27px]"
          ref={props.mySkillsRef}
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
            <div className="animate-boxSlideFull absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                100%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div className="h-[2px] w-[95%] bg-custom-orange animate-fullWidthAnim"></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div className="animate-boxSlideEighty absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                80%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div className="h-[2px] w-[65%] bg-custom-orange animate-eightWidthAnim"></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div className="animate-boxSlideNinety absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                90%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div className="h-[2px] w-[80%] bg-custom-orange animate-ninetyWidthAnim"></div>
          </div>
          <div className="mb-[32px] relative">
            <h5 className="mb-[8px]">Webdesign</h5>
            <div className="animate-boxSlideSixty absolute">
              <figure className="absolute bottom-[10px] text-[12px] px-[6px] py-[2px] border-[2px] inline-block">
                60%
              </figure>
              <div className="absolute bottom-[5px] left-[10px] w-0 h-0 border-solid border-white border-b-[5px] border-l-[5px] border-l-transparent transform rotate-180"></div>
            </div>
            <div className="h-[2px] w-[60%] bg-custom-orange animate-sixtyWidthAnim"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
