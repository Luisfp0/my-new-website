import { useState } from "react";
import logo from "../assets/img/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`bg-white flex items-center justify-center w-full sm:overflow-hidden lg:overflow-visible md:overflow-visible ${
        menuOpen ? "h-64" : "h-14"
      } px-4 fixed top-0 transition-height duration-300`}
    >
      <div className="container flex items-center justify-between h-full bg-blue w-full lg:max-w-[1150px] md:max-w-[960px] ">
        <a
          className={`absolute overflow-visible mt-10 transition-transform ${
            menuOpen ? "translate-y-24" : "translate-y-30"
          }`}
          style={{ transitionDuration: "0.3s" }}
        >
          <img src={logo} alt="Logo" />
        </a>
        <div className="sm:relative w-full flex items-center justify-end h-full text-right lg:hidden md:hidden">
          <button
            className="fixed top-4 mb-14"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-12 border-[2px]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="justify-between flex flex-col absolute top-14 w-full gap-1 lg:hidden md:hidden">
            <a className="text-[12.6px] border-y-[3px] border-custom-orange border-opacity-[0.7] py-[7.2px]">
              Home
            </a>
            <a className="text-[12.6px] border-b-[3px] border-b-custom-orange border-opacity-[0.7] py-[7.2px]">
              About me
            </a>
            <a className="text-[12.6px] border-b-[3px] border-b-custom-orange border-opacity-[0.7] py-[7.2px]">
              Skills
            </a>
            <a className="text-[12.6px] border-b-[3px] border-b-custom-orange border-opacity-[0.7] py-[7.2px]">
              Portfolio
            </a>
            <a className="text-[12.6px] py-[7.2px]">Contact</a>
          </div>
        </div>
        <div className="items-center justify-end h-full gap-7 w-full text-right hidden lg:flex md:flex">
          <a className="lg:text-[14px] md:text-[13.3px]">Home</a>
          <a className="lg:text-[14px] md:text-[13.3px]">About me</a>
          <a className="lg:text-[14px] md:text-[13.3px]">Skills</a>
          <a className="lg:text-[14px] md:text-[13.3px]">Portfolio</a>
          <a className="lg:text-[14px] md:text-[13.3px]">Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
