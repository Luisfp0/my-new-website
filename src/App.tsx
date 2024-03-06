import Header from "./components/Header";
import Hero from "./components/Hero";
import Perfil from "../src/assets/img/perfil.jpeg";
import AboutMe from "../src/components/AboutMe";
import HireMe from "../src/components/HireMe";

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
      <section className="flex flex-col pt-[130px] pb-[24px] bg-custom-gray">
        <AboutMe />
      </section>
      <section className="flex py-[130px] bg-custom-gray">
        <HireMe />
      </section>
    </>
  );
}

export default App;
