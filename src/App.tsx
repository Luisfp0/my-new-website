import Header from "./components/Header";
import Hero from "./components/Hero";
import Perfil from "../src/assets/img/perfil.jpeg";
import AboutMe from "../src/components/AboutMe";
import HireMe from "../src/components/HireMe";
import MySkills from "./components/MySkills";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Perfil})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section style={backgroundStyle} className="h-screen flex flex-col">
        <Header />
        <Hero />
      </section>
      <section className="flex flex-col lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] bg-custom-gray">
        <AboutMe />
      </section>
      <section className="flex py-[130px] bg-custom-gray">
        <HireMe />
      </section>
      <section className="flex py-[130px] bg-custom-gray lg:pt-[130px] lg:pb-[48px]">
        <MySkills />
      </section>
    </>
  );
}

export default App;
