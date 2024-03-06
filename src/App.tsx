import Header from "./components/Header";
import Hero from "./components/Hero";
import Perfil from "../src/assets/img/perfil.jpeg";
import AboutMe from "../src/components/AboutMe";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Perfil})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section
        className="w-screen h-screen flex flex-col"
        style={backgroundStyle}
      >
        <Header />
        <Hero />
      </section>
      <section className="w-screen pt-[130px] pb-[24px] flex flex-col bg-custom-gray">
        <AboutMe />
      </section>
    </>
  );
}

export default App;
