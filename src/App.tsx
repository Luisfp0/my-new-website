import Header from "./components/Header";
import Hero from "./components/Hero";
import Perfil from "../src/assets/img/perfil.jpeg";
import AboutMe from "../src/components/AboutMe";
import HireMe from "../src/components/HireMe";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Perfil})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section className="h-screen flex flex-col bg-custom-gray">
        <Header />
        <Hero />
      </section>
      <section className="flex flex-col lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] bg-custom-gray">
        <AboutMe />
      </section>
      <section className="flex py-[130px] bg-custom-gray">
        <HireMe />
      </section>
      <section className="flex bg-custom-gray lg:pt-[130px] lg:pb-[48px] md:pt-[130px] md:pb-[48px] sm:pb-[43px]">
        <MySkills />
      </section>
      <section className="bg-custom-gray flex pt-[130px] pb-[130px]">
        <Contact />
      </section>
    </>
  );
}

export default App;
