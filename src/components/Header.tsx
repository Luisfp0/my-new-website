import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className="bg-white flex items-center justify-center w-full h-14 px-4 fixed top-0">
      <div className="container flex items-center justify-between h-full bg-blue w-full lg:max-w-[1150px] md:max-w-[960px]">
        <a className="mt-5">
          <img src={logo} alt="Logo" />
        </a>
        <div className="flex items-center justify-end h-full gap-7 text-right">
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
