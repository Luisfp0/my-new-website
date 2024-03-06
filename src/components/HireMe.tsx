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
      className="max-w-[1150px] mx-auto justify-center items-center w-full h-[163px]"
    >
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-80 border-2 border-black">
        <h3 className="text-[30px] text-white my-[16px]">
          Let´s Work Together On Your Next Project!
        </h3>
      </div>
    </div>
  );
}

export default HireMe;
