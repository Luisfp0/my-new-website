import { useState } from "react";
import checkBoxGreen from "../assets/img/checkbox-green.svg";

const PricingCards = (props) => {
  const [animPopular, setAnimPopular] = useState(false);

  setTimeout(() => {
    setAnimPopular(!animPopular);
  }, 2000);
  const cardMonthlyData = [
    {
      title: "Essencial",
      description: "Para necessidades básicas",
      price: "14,95",
      features: [
        "9.000 palavras mensais",
        "Acesso ao editor inteligente",
        "Suporte técnico via chat",
        "Acesso à extensão de navegador",
      ],
    },
    {
      title: "Avançado",
      description: "Ideal para expandir seu conteúdo",
      price: "25,99",
      features: [
        "Tudo dos planos anteriores",
        "+",
        "20.000 palavras mensais",
        "Suporte técnico via chat, email ou WhatsApp",
        "Assistência personalizada",
      ],
    },
    {
      title: "Premium",
      description: "A solução definitiva para profissionais",
      price: "44,99",
      features: [
        "Tudo dos planos anteriores",
        "+",
        "50.000 palavras mensais",
        "Assistência à instalação e configuração",
      ],
    },
  ];

  const cardYearlyData = [
    {
      title: "Essencial",
      description: "Para necessidades básicas",
      price: "179,40",
      features: [
        "9.000 palavras mensais",
        "Acesso ao editor inteligente",
        "Suporte técnico via chat",
        "Acesso à extensão de navegador",
      ],
    },
    {
      title: "Avançado",
      description: "Ideal para expandir seu conteúdo",
      price: "311,88",
      features: [
        "Tudo dos planos anteriores",
        "+",
        "20.000 palavras mensais",
        "Suporte técnico via chat, email ou WhatsApp",
        "Assistência personalizada",
      ],
    },
    {
      title: "Premium",
      description: "A solução definitiva para profissionais",
      price: "539,88",
      features: [
        "Tudo dos planos anteriores",
        "+",
        "50.000 palavras mensais",
        "Assistência à instalação e configuração",
      ],
    },
  ];
  return (
    <div className="lg:max-w-[1200px] md:max-w-[960px] sm:max-w-[720px] lg:flex md:flex mx-auto gap-[8px] text-black">
      {props.activeTab === "monthly"
        ? cardMonthlyData.map((card, index) => (
            <div
              key={index}
              className={`hover:scale-105 transition mb-[15px] duration-500 animate-fadeInMonth rounded-lg w-full shadow-lg flex flex-col items-start px-[36px] pt-[34px] pb-[32px] relative lg:px-[36px] lg:pt-[34px] lg:pb-[32px] md:px-[15px] md:pt-[15px] md:pb-[20px] ${
                card.title === "Avançado" &&
                "bg-coolGray-50 border-[1px] border-blue-600"
              }`}
            >
              {card.title === "Avançado" && (
                <h1
                  className={`text-[10px] absolute bg-[#e6eaed] overflow-hidden rounded-md px-[6px] py-[3px]
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
              <div className="flex items-baseline">
                <span className="relative -top-5 lg:text-[15px] md:text-[10px] text-[12px] opacity-[0.8]">
                  R$
                </span>
                <span className="lg:text-[36px] md:text-[30px] text-[30px] font-bold pr-[5px] ml-[3px]">
                  {card.price}
                </span>
                <span className="lg:text-[15px] md:text-[10px] text-[12px] opacity-[0.8]">
                  /{props.activeTab === "monthly" ? "mês" : "ano"}
                </span>
              </div>
              <button
                className={`bg-blue-600 hover:bg-blue-700 w-full text-white rounded-md mt-[16px] px-[24px] py-[12px]`}
              >
                Comece Agora!
              </button>
              <div className="flex flex-col items-start">
                <p className="my-[12px] text-[14px]">Esta incluso:</p>
                {card.features.map((feature, index) => (
                  <div
                    className="flex items-center justify-center mb-[12px]"
                    key={index}
                  >
                    <img src={checkBoxGreen}></img>
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
              className={`hover:scale-105 transition duration-500 animate-fadeInYearly rounded-lg w-full shadow-lg flex flex-col items-start px-[36px] pt-[34px] pb-[32px] relative lg:px-[36px] lg:pt-[34px] lg:pb-[32px] md:px-[15px] md:pt-[15px] md:pb-[20px] ${
                card.title === "Avançado" &&
                "bg-coolGray-50 border-[1px] border-blue-600"
              }`}
            >
              {card.title === "Avançado" && (
                <h1
                  className={`text-[10px] absolute bg-[#e6eaed] overflow-hidden rounded-md px-[6px] py-[3px]
              bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] 
              bg-[length:250%_250%,100%_100%] 
              bg-[position:100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] 
              ${animPopular && "bg-[position:-200%_0,0_0] duration-[2000ms]"}`}
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
              <div className="flex items-baseline">
                <span className="relative -top-5 lg:text-[15px] md:text-[10px] text-[12px] opacity-[0.8]">
                  R$
                </span>
                <span className="lg:text-[36px] md:text-[30px] text-[30px] font-bold pr-[5px] ml-[3px]">
                  {card.price}
                </span>
                <span className="lg:text-[15px] md:text-[10px] text-[12px] opacity-[0.8]">
                  /{props.activeTab === "monthly" ? "mês" : "ano"}
                </span>
              </div>
              <button
                className={`bg-blue-600 hover:bg-blue-700 w-full text-white rounded-md mt-[16px] px-[24px] py-[12px]`}
              >
                Comece Agora!
              </button>
              <div className="flex flex-col items-start">
                <p className="my-[12px] text-[14px]">Esta incluso:</p>
                {card.features.map((feature, index) => (
                  <div
                    className="flex items-center justify-center mb-[12px]"
                    key={index}
                  >
                    <img src={checkBoxGreen}></img>
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
