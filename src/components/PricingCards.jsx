import { useState } from "react";

const PricingCards = (props) => {
  const [animPopular, setAnimPopular] = useState(false);

  setTimeout(() => {
    setAnimPopular(!animPopular);
  }, 2000);
  const cardMonthlyData = [
    {
      title: "Pro",
      description: "Create 1,000 redesigns per month",
      price: "$39",
      features: [
        "Create 1,000 redesigns/mo",
        "Redesign any interior",
        "Use the magic photo editor",
        "35+ Room types",
        "50+ Interior design styles",
      ],
    },
    {
      title: "Premium",
      description: "Create 5,000 redesigns per month",
      price: "$99",
      features: [
        "Everything in lower plans",
        "+",
        "Create 5,000 redesigns/mo",
        "Unlimited render storage",
        "Virtual staging mode",
        "Priority access, faster response times",
        "Available even when demand is high",
        "Early access to new features",
      ],
    },
    {
      title: "Triple User",
      description: "Create 25,000 redesigns per month",
      price: "$299",
      features: [
        "Everything in lower plans",
        "+",
        "Create 25,000 redesigns/mo",
        "Design up to 12 renders in parallel",
      ],
    },
  ];

  const cardYearlyData = [
    {
      title: "Pro",
      description: "Create 1,000 redesigns per month",
      price: "$390",
      features: [
        "Create 1,000 redesigns/mo",
        "Redesign any interior",
        "Use the magic photo editor",
        "35+ Room types",
        "50+ Interior design styles",
      ],
    },
    {
      title: "Premium",
      description: "Create 5,000 redesigns per month",
      price: "$990",
      features: [
        "Everything in lower plans",
        "+",
        "Create 5,000 redesigns/mo",
        "Unlimited render storage",
        "Virtual staging mode",
        "Priority access, faster response times",
        "Available even when demand is high",
        "Early access to new features",
      ],
    },
    {
      title: "Triple User",
      description: "Create 25,000 redesigns per month",
      price: "$2,990",
      features: [
        "Everything in lower plans",
        "+",
        "Create 25,000 redesigns/mo",
        "Design up to 12 renders in parallel",
      ],
    },
  ];
  return (
    <div className="lg:max-w-[1200px] md:max-w-[960px] sm:max-w-[720px] lg:flex md:flex mx-auto gap-[8px] text-white">
      {props.activeTab === "monthly"
        ? cardMonthlyData.map((card, index) => (
            <div
              key={index}
              className={`animate-fadeInMonth w-full shadow-lg flex flex-col items-start px-[36px] pt-[34px] pb-[32px] relative lg:px-[36px] lg:pt-[34px] lg:pb-[32px] md:px-[15px] md:pt-[15px] md:pb-[20px] ${
                card.title === "Premium" &&
                "bg-[#292929] border-[1px] border-[#474747] rounded-lg"
              }`}
            >
              {card.title === "Premium" && (
                <h1
                  className={`text-[10px] absolute bg-[#00000033] overflow-hidden rounded-md px-[6px] py-[2px] 
                  bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] 
                  bg-[length:250%_250%,100%_100%] 
                  bg-[position:100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] 
                  ${
                    animPopular && "bg-[position:-200%_0,0_0] duration-[2000ms]"
                  }`}
                >
                  Most popular
                </h1>
              )}
              <h2 className="text-[20px] pb-[12px] text-center py-8 font-bold">
                {card.title}
              </h2>
              <h2 className="lg:text-[14px] md:text-[12px] opacity-[0.8] text-center pb-[20px]">
                {card.description}
              </h2>
              <div className="flex items-center">
                <p className="lg:text-[36px] md:text-[30px] text-[30px] font-bold pr-[5px]">
                  {card.price}
                </p>
                <p className="lg:text-[13px] md:text-[10px] text-[12px] opacity-[0.8]">
                  per
                  <br />
                  {props.activeTab === "monthly" ? "month" : "year"}
                </p>
              </div>
              <button
                className={`bg-[#F44425] w-full rounded-md mt-[16px] px-[24px] py-[12px]`}
              >
                Subscribe
              </button>
              <div className="flex flex-col items-start">
                <p className="my-[12px] text-[14px]">This includes:</p>
                {card.features.map((feature, index) => (
                  <div
                    className="flex items-center justify-center mb-[12px]"
                    key={index}
                  >
                    <svg
                      focusable="false"
                      fill="#ffffff"
                      color="#ffffff"
                      fillOpacity="0.7"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <p className="pl-[15px] lg:text-[14px] md:text-[13.5px] text-[15px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        : cardYearlyData.map((card, index) => (
            <div
              key={index}
              className={`animate-fadeInYearly w-full shadow-lg flex flex-col items-start px-[36px] pt-[34px] pb-[32px] relative lg:px-[36px] lg:pt-[34px] lg:pb-[32px] md:px-[15px] md:pt-[15px] md:pb-[20px] ${
                card.title === "Premium" &&
                "bg-[#292929] border-[1px] border-[#474747] rounded-lg"
              }`}
            >
              {card.title === "Premium" && (
                <h1
                  className={`text-[10px] absolute bg-[#00000033] overflow-hidden rounded-md px-[6px] py-[2px] 
                  bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] 
                  bg-[length:250%_250%,100%_100%] 
                  bg-[position:100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] 
                  ${
                    animPopular && "bg-[position:-200%_0,0_0] duration-[2000ms]"
                  }`}
                >
                  Most popular
                </h1>
              )}
              <h2 className="text-[20px] pb-[12px] text-center py-8 font-bold">
                {card.title}
              </h2>
              <h2 className="lg:text-[14px] md:text-[12px] opacity-[0.8] text-center pb-[20px]">
                {card.description}
              </h2>
              <div className="flex items-center">
                <p className="lg:text-[36px] md:text-[30px] text-[30px] font-bold pr-[5px]">
                  {card.price}
                </p>
                <p className="lg:text-[13px] md:text-[10px] text-[12px] opacity-[0.8]">
                  per
                  <br />
                  {props.activeTab === "monthly" ? "month" : "year"}
                </p>
              </div>
              <button
                className={`bg-[#F44425] w-full rounded-md mt-[16px] px-[24px] py-[12px]`}
              >
                Subscribe
              </button>
              <div className="flex flex-col items-start">
                <p className="my-[12px] text-[14px]">This includes:</p>
                {card.features.map((feature, index) => (
                  <div
                    className="flex items-center justify-center mb-[12px]"
                    key={index}
                  >
                    <svg
                      focusable="false"
                      fill="#ffffff"
                      color="#ffffff"
                      fillOpacity="0.7"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                    >
                      <path
                        d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                        fillRule="evenodd"
                      />
                    </svg>
                    <p className="pl-[15px] lg:text-[14px] md:text-[13.5px] text-[15px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
};

export default PricingCards;
