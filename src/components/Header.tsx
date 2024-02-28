import logo from "../assets/img/logo.png";

function Header() {
  return (
    <header className="flex items-center justify-center bg-white w-full h-14 px-4 fixed top-0">
      <div className=" h-full w-7/12 bg-blue ">
        <a className="fixed mt-5">
          <img src={logo} />
        </a>
        <div className="flex items-center justify-end h-full gap-7 text-right">
          <a>Home</a>
          <a>About me</a>
          <a>Skills</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
