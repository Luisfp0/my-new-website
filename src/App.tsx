import Header from "./components/Header";
import Hero from "./components/Hero";
import Perfil from "../src/assets/img/perfil.jpeg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${Perfil})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="w-screen h-screen flex flex-col" style={backgroundStyle}>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
