import "react-tabs/style/react-tabs.css";
import PricingCards from "./PricingCards";
import { useState } from "react";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const testimonials = [
    {
      text: "I have been using Interior AI in my interior design process and it has been magical. @levelsio created a tool where you can upload an image of a room and within seconds the room is staged with furniture, lighting and accessories🤯",
      author: "Isabelle Orsi",
      complement: "⭐️ INTERIOR DESIGNER",
      numberOfStars: 5,
    },
    {
      text: "Turns out that @levelsio is working on something like this overat Interior AI. (I don't know who holds the Stripe-wide record for operating the largest number of distinct businesses, but strongly suspect @levelsio is the 🐐.)",
      author: "Patrick Collison",
      complement: "⭐️ FOUNDER OF STRIPE",
      numberOfStars: 5,
    },
    {
      text: "Interior AI is a neural network to create realistic 3D models of interiors. Interior AI can be used in a variety of interior design areas, including residential, hotel and restaurant interior design.",
      author: "Dare A.",
      complement: "✅ VERIFIED PURCHASE",
      numberOfStars: 4,
    },
  ];
  const packs = [
    {
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=600,quality=50/https://interiorai.com/assets/styles/easter.png?1708109696",
      name: "🐣 Easter",
      text: "Features pastel colors, floral patterns, and Easter-themed decorations like eggs and bunnies.",
    },
    {
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=600,quality=50/https://interiorai.com/assets/styles/tribal.png?1708109697",
      name: "🪶 Tribal",
      text: "Incorporates indigenous patterns, textures, and art, celebrating cultural heritage and adding earthy warmth.",
    },
    {
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=600,quality=50/https://interiorai.com/assets/styles/tribal.png?1708109697",
      name: "🌴 Tropical",
      text: "Features lush greenery, bright colors, and natural materials to evoke the feel of a tropical paradise.",
    },
    {
      image:
        "https://photoai.com/cdn-cgi/image/format=jpeg,fit=cover,width=600,quality=50/https://interiorai.com/assets/styles/biophilic.png?1708109696",
      name: "🌿 Biophilic",
      text: "Integrates natural elements, greenery, and natural light to enhance connectivity to the natural environment.",
    },
  ];
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-transparent">
      <div className="flex flex-col justify-start items-center w-[85vw] h-[85vh] bg-[#111] p-[21px] overflow-y-auto scrollbar-style scrollbar-thumb-style">
        <ul className="flex mb-[50px] bg-[#FFFFFF1A] border-[#FFFFFF2A] border-[1px] rounded-md p-[2px] text-white relative">
          <div
            className={`bg-[#F44425] py-[20px] px-[62px] absolute rounded-md transition-all duration-300 linear ${
              activeTab === "yearly" && "translate-x-[124px] px-[55px]"
            }`}
          ></div>
          <li
            onClick={() => setActiveTab("monthly")}
            className="py-[8px] px-[32px] rounded-md z-10 cursor-pointer"
          >
            Monthly
          </li>
          <li
            onClick={() => setActiveTab("yearly")}
            className="py-[8px] px-[32px] rounded-md z-10 cursor-pointer"
          >
            Yearly
          </li>
        </ul>
        <PricingCards activeTab={activeTab}></PricingCards>
        <div className="lg:max-w-[1200px] md:max-w-[960px] sm:max-w-[720px] flex flex-wrap justify-center mt-[100px] text-white text-[15px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`flex flex-col lg:w-[309px] md:w-[309px] border-[1px] border-[#343434] bg-[#161616] rounded-lg p-[10px] m-[10px] ${
                index === 0 ? "lg:ml-0" : ""
              } ${index === testimonials.length - 1 ? "lg:mr-0" : ""}`}
            >
              <div className="mx-[21px] text-[25px] tracking-widest">
                {testimonial.numberOfStars === 5 && <p>⭐️⭐️⭐️⭐️⭐️</p>}
                {testimonial.numberOfStars === 4 && (
                  <div className="flex">
                    <p>⭐️⭐️⭐️⭐️</p>
                    <p className="filter saturate-0 opacity-[0.5]">⭐️</p>
                  </div>
                )}
                {testimonial.numberOfStars === 3 && (
                  <div className="flex">
                    <p>⭐️⭐️⭐️</p>
                    <p className="filter saturate-0 opacity-[0.5]">⭐️⭐️</p>
                  </div>
                )}
                {testimonial.numberOfStars === 2 && (
                  <div className="flex">
                    <p>⭐️⭐️</p>
                    <p className="filter saturate-0 opacity-[0.5]">⭐️⭐️⭐️</p>
                  </div>
                )}
                {testimonial.numberOfStars === 1 && (
                  <div className="flex">
                    <p>⭐️</p>
                    <p className="filter saturate-0 opacity-[0.5]">
                      ⭐️⭐️⭐️⭐️
                    </p>
                  </div>
                )}
              </div>
              <p className="mx-[21px] mt-[10px] mb-[20px]">
                {testimonial.text}
              </p>
              <div className="flex items-center justify-between">
                <p className="mx-[21px] font-bold text-[12px]">
                  {testimonial.author}
                </p>
                <p className="mx-[21px] text-[10px] opacity-[0.7]">
                  {testimonial.complement}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-wrap justify-center mt-[100px] gap-[20px] text-white text-[16px] mb-[28px]">
          {packs.map((pack) => (
            <a className="m-[5px] p-[21px] w-[300px] rounded-lg border-[1px] flex flex-col items-center justify-center border-[#343434] hover:border-[#F44425] bg-[#161616]">
              <div>
                <img src={pack.image} className="w-[100%] rounded-md"></img>
                <p className="text-[21px] text-left font-bold mt-[14px]">
                  {pack.name}
                </p>
                <p className="text-[18px] mt-[14px] opacity-[0.75]">
                  {pack.text}
                </p>
              </div>
            </a>
          ))}
        </div>
        <p className="lg:text-[11px] md:text-[10px] sm:text-[8px] text-[8px] my-[14px] opacity-[0.5] text-white max-w-[900px] text-center">
          By clicking the button above to proceed you agree with Interior AI's
          <a href="/#">TOS</a>. Interior AI provides you immediate access to
          digital content as soon as you complete your purchase, without waiting
          the 14-day withdrawal period. Therefore, you expressly waive your
          right to withdraw from this purchase. Due to the high costs of GPU
          processing, we're not able to offer refunds because we reserve servers
          and incur high costs for your usage immediately. You can cancel any
          time.
        </p>
      </div>
    </div>
  );
};

export default Payment;
