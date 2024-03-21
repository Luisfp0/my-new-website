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

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ContactProps {
  contactNavBreakRef: React.RefObject<HTMLDivElement>;
  contactAnimRef: React.RefObject<HTMLDivElement>;
  isContactsAnimInView: boolean;
}

const Contact = (props: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <div className="lg:max-w-[1150px] md:max-w-[960px] sm:max-w-[720px] flex flex-col justify-center items-center mx-auto w-full px-[15px]">
      <div className="relative mb-[120px]">
        <div
          className={`${
            props.isContactsAnimInView ? "w-[160px]" : "w-[0px]"
          } transition-all linear duration-500 h-[2px] absolute bg-white lg:top-[0px] md:top-[0px] sm:top-[0px]`}
        ></div>
        <div
          className={`${
            props.isContactsAnimInView ? "h-[56px] delay-500" : "h-[0px]"
          } w-[2px] absolute lg:left-[159px] lg:top-[0px] md:top-[0px] md:left-[157px] sm:left-[158px] sm:top-[0px] bg-white transition-all linear duration-500`}
        ></div>
        <div
          className={`${
            props.isContactsAnimInView ? "h-[56px]" : "h-[0px]"
          } w-[2px] absolute lg:left-[0px] lg:top-[0px] md:top-[0px] md:left-[0px] sm:left-[0px] sm:top-[0px] bg-white transition-all linear duration-500`}
        ></div>
        <div
          className={`${
            props.isContactsAnimInView ? "w-[160px] delay-500" : "w-[0px]"
          } transition-all linear duration-500  h-[2px] absolute bg-white lg:top-[55px] md:top-[55px] sm:top-[54px] `}
        ></div>
        <h4 className="w-[160px] text-center sm:text-[21px] text-[24px] text-white border-solid border-white py-3 px-4 relative">
          Get In Touch
        </h4>
        <div
          className={`${
            props.isContactsAnimInView
              ? "border-b-[9px] border-l-[9px] delay-500"
              : "border-b-[0px] border-l-[0px]"
          } transition-all linear duration-500  absolute lg:top-[56px] left-[30px] md:top-[55px] sm:top-[54px] w-0 h-0 border-solid border-white border-l-transparent transform rotate-180`}
        ></div>
      </div>
      <div className="flex w-full text-white" ref={props.contactAnimRef}>
        <div
          className={`px-[15px] pb-[24px] w-[25%] transition linear duration-700 ${
            props.isContactsAnimInView
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
          <div className="opacity-[0.5] text-[16px] sm:text-[14.4px]">
            <figure>Goiânia Goiás</figure>
            <figure className="mb-[16px]">Brazil</figure>
          </div>
        </div>
        <div
          className={`px-[15px] pb-[24px] w-[25%] transition linear duration-700 delay-100 ${
            props.isContactsAnimInView
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
          className={`px-[15px] pb-[24px] w-[25%] transition linear duration-700 delay-150 ${
            props.isContactsAnimInView
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
            <figure className="mb-[16px] sm:text-[11.6px]">
              luis.oliveirabr1@gmail.com
            </figure>
          </div>
        </div>
        <div
          className={`px-[15px] pb-[24px] w-[25%] transition linear duration-700 delay-200 ${
            props.isContactsAnimInView
              ? "opacity-[1] scale-100 -translate-y-5"
              : "opacity-[0]"
          }`}
        >
          <img
            src={socialChat}
            alt="Social chat icon"
            className="w-[40px] h-[40px] mb-[24px]"
          />
          <h5 className="mb-[8px] text-[18px] sm:text-[16px]">Social Chat</h5>
          <div className="opacity-[0.5] text-[16px]">
            <figure className="mb-[16px] sm:text-[14.4px]">
              me.freelancer3
            </figure>
          </div>
        </div>
      </div>
      <div className="flex w-full pt-[48px] text-white">
        <div className="w-[30%]">
          <h3 className="text-[30px] mb-[30px] sm:text-[19.8px]">
            Let`s Connect
          </h3>
          <div>
            <a
              href="https://github.com/Luisfp0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px]"
            >
              <FiGithub className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px]" />
              <span className="text-[16px] sm:text-[14.4px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-fernando-de-paulo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px]"
            >
              <FaLinkedin className="rounded-full border-[1px] border-opacity-[0.5] w-[35px] h-[35px] py-[5px] px-[5px] mr-[24px]" />
              <span className="text-[16px] sm:text-[14.4px]">Linkedin</span>
            </a>
            <a
              href="https://www.instagram.com/louis_fnando/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px]"
            >
              <CiInstagram className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px]" />
              <span className="text-[16px] sm:text-[14.4px]">Instagram</span>
            </a>
            <a
              href="https://twitter.com/Louisfp0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start mb-[16px]"
            >
              <FaXTwitter className="rounded-full border-[1px] border-opacity-[0.5] w-[40px] h-[40px] py-[5px] px-[5px] mr-[24px]" />
              <span className="text-[16px] sm:text-[14.4px]">Twitter</span>
            </a>
          </div>
        </div>
        <div className="w-[70%]">
          <h3 className="text-[30px] mb-[30px] sm:text-[19.8px]">
            Send Me a Message
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex w-full">
              <div
                className="flex flex-col px-[15px] w-[50%] mb-[24px]"
                ref={props.contactNavBreakRef}
              >
                <label className="mb-[8px] sm:text-[11.7px]">Name *</label>
                <input
                  {...(register("name"), { required: true })}
                  placeholder="Name"
                  className="py-[9px] px-[12px]  bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
                />
              </div>
              <div className="flex flex-col px-[15px] w-[50%]">
                <label className="mb-[8px] sm:text-[11.7px]">Email *</label>
                <input
                  {...(register("email"), { required: true })}
                  placeholder="Email"
                  className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
                />
              </div>
            </div>
            <div className="flex flex-col px-[15px] w-[100%] mb-[24px]">
              <label className="mb-[8px] sm:text-[11.7px]">Subject *</label>
              <input
                {...register("subject", { required: true })}
                placeholder="Subject"
                className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] duration-300"
              />
            </div>
            <div className="flex flex-col px-[15px] w-[100%]">
              <label className="mb-[8px] sm:text-[11.7px]">Message *</label>
              <textarea
                {...(register("message"), { required: true })}
                placeholder="Message"
                className="py-[9px] px-[12px] border-none bg-[#FFFFFF1A] hover:bg-[#FFFFFF33] h-[150px] duration-300"
              />
            </div>
            <div className="mt-[30px] px-[15px] flex justify-end">
              <button
                type="submit"
                className="flex items-center justify-center bg-custom-orange py-[12px] px-[20px] border-[1px] border-custom-orange"
              >
                <span className="sm:text-[12.6px]">SEND A MESSAGE</span>
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
