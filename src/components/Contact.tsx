import iconAdress from "../../src/assets/img/icon-pin.png";
import iconPhone from "../../src/assets/img/icon-phone-02.png";
import envelope from "../../src/assets/img/icon-envelope.png";
import socialChat from "../../src/assets/img/social-chat.png";
import { CiInstagram } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowDown } from "react-icons/fa";
import { useRef, useEffect } from "react";
import useInView from "./hooks/useInView";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactProps {
  onContactInView?: (isInView: boolean) => void;
}

const Contact = ({ onContactInView }: ContactProps) => {
  const contactNavRef = useRef<HTMLDivElement>(null);
  const contactAnimRef = useRef<HTMLDivElement>(null);

  const isContactNavInView = useInView(contactNavRef);
  const isContactAnimInView = useInView(contactAnimRef);

  useEffect(() => {
    onContactInView?.(isContactAnimInView);
  }, [isContactAnimInView, onContactInView]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Email enviado com sucesso!");
      } else {
        alert("Falha ao enviar o email.");
      }
    } catch (error) {
      console.log(error);
      console.error("Erro:", error);
      alert("Ocorreu um erro ao enviar o email.");
    }
  };

  return (
    <div className="z-10 lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] xsm:max-w-[540px] max-w-[350px] flex flex-col justify-center items-center mx-auto w-full px-[15px]">
      <div className="relative mb-[120px]">
        <div
          className={`${
            isContactAnimInView ? "w-[160px]" : "w-[0px]"
          } transition-all linear duration-500 h-[2px] absolute bg-white`}
        ></div>
        <div
          className={`${
            isContactAnimInView ? "h-[56px] delay-500" : "h-[0px]"
          } w-[2px] absolute lg:left-[159px] md:left-[157px] sm:left-[158px] left-[158px] bg-white transition-all linear duration-500`}
        ></div>
        <div
          className={`${
            isContactAnimInView ? "h-[56px]" : "h-[0px]"
          } w-[2px] absolute bg-white transition-all linear duration-500`}
        ></div>
        <div
          className={`${
            isContactAnimInView ? "w-[160px] delay-500" : "w-[0px]"
          } transition-all linear duration-500  h-[2px] absolute bg-white top-[55px] `}
        ></div>
        <h4 className="w-[160px] text-center text-[21px] text-white border-solid border-white py-3 px-4 relative">
          Get In Touch
        </h4>
        <div
          className={`${
            isContactAnimInView
              ? "border-b-[9px] border-l-[9px] delay-500"
              : "border-b-[0px] border-l-[0px]"
          } transition-all linear duration-500  absolute lg:top-[56px] left-[30px] md:top-[55px] sm:top-[54px] w-0 h-0 border-solid border-white border-l-transparent transform rotate-180`}
        ></div>
      </div>
      <div
        className="flex w-full flex-wrap justify-center text-white"
        ref={contactAnimRef}
      >
        <div
          className={`flex flex-col lg:items-start md:items-start sm:items-start items-center px-[15px] pb-[24px] lg:w-[25%] md:w-[25%] sm:w-[25%] w-[50%] transition linear duration-700 ${
            isContactAnimInView
              ? "opacity-[1] scale-100 -translate-y-5"
              : "opacity-[0]"
          }`}
        >
          <img
            src={iconAdress}
            alt="Pin Icon"
            className="w-[34px] h-[40px] mb-[24px]"
          />
          <h5 className="mb-[8px] text-[18px] sm:text-[16px]">Address</h5>
          <div className="opacity-[0.5] text-[16px] w-full lg:w-auto md:w-auto sm:w-auto lg:text-start md:text-start sm:text-start text-center sm:text-[14.4px]">
            <figure>Goiânia Goiás</figure>
            <figure className="mb-[16px]">Brazil</figure>
          </div>
        </div>
        <div
          className={`flex flex-col lg:items-start md:items-start sm:items-start items-center px-[15px] pb-[24px] lg:w-[25%] md:w-[25%] sm:w-[25%] xsm:w-[50%] transition linear duration-700 delay-100 ${
            isContactAnimInView
              ? "opacity-[1] scale-100 -translate-y-5"
              : "opacity-[0]"
          }`}
        >
          <img
            className="w-[40px] h-[40px] mb-[24px]"
            src={iconPhone}
            alt="Phone Icon"
          />
          <h5 className="mb-[8px] text-[18px] sm:text-[16px]">Phone</h5>
          <div className="opacity-[0.5] text-[16px]">
            <figure className="sm:text-[14.4px]">(62) 9 9322-2660</figure>
            <figure className="mb-[16px] sm:text-[14.4px]">
              (62) 3567-5894
            </figure>
          </div>
        </div>
        <div
          className={`flex flex-col lg:items-start md:items-start sm:items-start items-center px-[15px] pb-[24px] lg:w-[25%] md:w-[25%] sm:w-[25%] w-[50%] transition linear duration-700 delay-150 ${
            isContactAnimInView
              ? "opacity-[1] scale-100 -translate-y-5"
              : "opacity-[0]"
          }`}
        >
          <img
            src={envelope}
            alt="Envelope Icon"
            className="w-[40px] h-[32px] mb-[24px]"
          />
          <h5 className="mb-[8px] text-[18px] sm:text-[16px]">Email</h5>
          <div className="opacity-[0.5] text-[16px]">
            <figure className="mb-[16px] lg:text-[11.6px] md:text-[11.6px] sm:text-[11.6px] text-[11.0px]">
              luis.oliveirabr1@gmail.com
            </figure>
          </div>
        </div>
        <div
          className={`flex flex-col lg:items-start md:items-start sm:items-start items-center px-[15px] pb-[24px] lg:w-[25%] md:w-[25%] sm:w-[25%] w-[50%] transition linear duration-700 delay-200 ${
            isContactAnimInView
              ? "opacity-[1] scale-100 -translate-y-5"
              : "opacity-[0]"
          }`}
        >
          <img
            src={socialChat}
            alt="Social chat icon"
            className="w-[40px] h-[40px] mb-[16px]"
          />
          <h5 className="mb-[8px] text-[18px] sm:text-[16px]">Social Chat</h5>
          <div className="opacity-[0.5] text-[16px]">
            <figure className="mb-[16px] sm:text-[14.4px]">
              me.freelancer3
            </figure>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col w-full pt-[48px] text-white">
        <div className="lg:w-[30%] md:w-[30%] sm:w-[30%] w-full">
          <h3 className="text-[30px] mb-[30px] sm:text-[19.8px]">
            Let`s Connect
          </h3>
          <div className="flex lg:flex-col md:flex-col sm:flex-col flex-wrap w-full">
            <a
              href="https://github.com/Luisfp0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px] lg:w-auto md:w-auto sm:w-auto w-1/2"
            >
              <FiGithub className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px] transition-all duration-100 ease-in-out hover:w-[42px] hover:h-[42px]" />
              <span className="text-[16px] sm:text-[14.4px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-fernando-de-paulo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px] lg:w-auto md:w-auto sm:w-auto w-1/2"
            >
              <FaLinkedin className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px] hover:w-[42px] hover:h-[42px] transition-all duration-100 ease-in-out" />
              <span className="text-[16px] sm:text-[14.4px]">Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/louis_fnando/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px] lg:w-auto md:w-auto sm:w-auto w-1/2"
            >
              <CiInstagram className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px] hover:w-[42px] hover:h-[42px] transition-all duration-100 ease-in-out" />
              <span className="text-[16px] sm:text-[14.4px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/Louisfp0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px] lg:w-auto md:w-auto sm:w-auto w-1/2"
            >
              <FaXTwitter className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px] hover:w-[42px] hover:h-[42px] transition-all duration-100 ease-in-out" />
              <span className="text-[16px] sm:text-[14.4px]">Twitter</span>
            </a>
          </div>
        </div>
        <div className="lg:w-[70%] md:w-[70%] sm:w-[70%] w-full">
          <h3 className="text-[30px] mb-[30px] sm:text-[19.8px]">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex w-full">
              <div
                className="flex flex-col lg:px-[15px] md:px-[15px] sm:px-[15px] px-[3px] w-[50%] mb-[24px]"
                ref={contactNavRef}
              >
                <label className="mb-[8px] sm:text-[11.7px]">Name *</label>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="py-[9px] px-[12px] bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
                />
              </div>
              <div className="flex flex-col w-[50%] lg:px-[15px] md:px-[15px] sm:px-[15px] px-[3px]">
                <label className="mb-[8px] sm:text-[11.7px]">Email *</label>
                <input
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col lg:px-[15px] md:px-[15px] sm:px-[15px] w-[100%] mb-[24px]">
              <label className="mb-[8px] sm:text-[11.7px]">Subject *</label>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
              />
            </div>
            <div className="flex flex-col lg:px-[15px] md:px-[15px] sm:px-[15px] w-[100%]">
              <label className="mb-[8px] sm:text-[11.7px]">Message *</label>
              <textarea
                {...register("message", { required: true })}
                placeholder="Message"
                className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] h-[150px] duration-300"
              />
            </div>
            <div className="mt-[30px] px-[15px] flex justify-end">
              <button
                type="submit"
                className="flex items-center justify-center bg-custom-orange lg:py-[12px] lg:px-[20px] md:py-[12px] md:px-[20px] sm:py-[12px] sm:px-[20px] py-[8px] px-[16px] border-[1px] border-custom-orange"
              >
                <span className="text-[12.6px]">SEND A MESSAGE</span>
                <FaArrowDown className="tranform -rotate-90 ml-[12px]" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
