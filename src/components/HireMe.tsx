import KeyboardImage from "../assets/img/bg-keyboard.jpg";

function HireMe() {
  const backgroundStyle = {
    backgroundImage: `url(${KeyboardImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      style={backgroundStyle}
      className="max-w-[1150px] mx-auto justify-center items-center w-full h-[163px] relative"
    >
      <div className="w-full h-full flex-col flex items-center justify-center bg-black bg-opacity-80 border-2 border-custom-gray relative">
        <h3 className="text-[30px] text-white my-[16px]">
          Let's Work Together On Your Next Project!
        </h3>
        <a className="text-white bg-custom-orange py-[12px] px-[20px] absolute -bottom-[22px]">
          HIRE ME NOW!
        </a>
        <div className="absolute -bottom-[32px] left-[520px] w-0 h-0 border-solid border-custom-orange border-b-[10px] border-l-[10px] border-l-transparent transform rotate-180"></div>
      </div>
    </div>
  );
}

export default HireMe;
