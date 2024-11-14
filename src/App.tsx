import { useRef, useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";

type SectionName = "home" | "about" | "skills" | "contact";

function App() {
  // Um único estado para controlar qual seção está ativa
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  // Estados derivados do activeSection
  const isHomeInView = activeSection === "home";
  const isAboutMeInView = activeSection === "about";
  const isMySkillsInView = activeSection === "skills";
  const isContactInView = activeSection === "contact";

  // Refs para as seções
  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const mySkillsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const determineSectionInView = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    const sections = [
      { ref: homeSectionRef, name: "home" },
      { ref: aboutMeSectionRef, name: "about" },
      { ref: mySkillsSectionRef, name: "skills" },
      { ref: contactSectionRef, name: "contact" },
    ] as const;

    for (const { ref, name } of sections) {
      if (!ref.current) continue;

      const element = ref.current;
      const { top, bottom } = element.getBoundingClientRect();
      const elementTop = window.scrollY + top;
      const elementBottom = window.scrollY + bottom;

      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        setActiveSection(name);
        break;
      }
    }
  }, [
    homeSectionRef,
    aboutMeSectionRef,
    mySkillsSectionRef,
    contactSectionRef,
    setActiveSection,
  ]);

  useEffect(() => {
    const debounce = (fn: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    };

    const debouncedScroll = debounce(determineSectionInView, 100);

    window.addEventListener("scroll", debouncedScroll);
    determineSectionInView();

    return () => window.removeEventListener("scroll", debouncedScroll);
  }, [determineSectionInView]);

  // Funções de callback simplificadas para os componentes
  const handleHomeInView = useCallback(() => {
    // Não fazer nada aqui, pois o scroll já controla
  }, []);

  const handleAboutInView = useCallback(() => {
    // Não fazer nada aqui, pois o scroll já controla
  }, []);

  const handleSkillsInView = useCallback(() => {
    // Não fazer nada aqui, pois o scroll já controla
  }, []);

  const handleContactInView = useCallback(() => {
    // Não fazer nada aqui, pois o scroll já controla
  }, []);

  return (
    <div className="bg-custom-gray">
      <section
        ref={homeSectionRef}
        className="h-screen flex flex-col bg-custom-gray"
      >
        <Header
          isAboutMeInView={isAboutMeInView}
          isHomeInView={isHomeInView}
          isMySkillsInView={isMySkillsInView}
          isContactInView={isContactInView}
          homeSectionRef={homeSectionRef}
          aboutMeSectionRef={aboutMeSectionRef}
          mySkillsSectionRef={mySkillsSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <Hero
          aboutMeSectionRef={aboutMeSectionRef}
          onHomeInView={handleHomeInView}
        />
      </section>
      <section
        ref={aboutMeSectionRef}
        className="lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] pb-[22px] pt-[72px] bg-custom-gray"
      >
        <AboutMe
          contactSectionRef={contactSectionRef}
          onAboutMeInView={handleAboutInView}
        />
      </section>
      <section className="flex py-[130px] bg-custom-gray">
        <HireMe contactSectionRef={contactSectionRef} />
      </section>
      <section
        ref={mySkillsSectionRef}
        className="flex bg-custom-gray lg:pt-[130px] lg:pb-[48px] md:pt-[130px] md:pb-[48px] sm:pb-[43px] xsm:pt-[50px] xsm:pb-[88px]"
      >
        <MySkills
          contactSectionRef={contactSectionRef}
          onSkillsInView={handleSkillsInView}
        />
      </section>
      <section
        ref={contactSectionRef}
        className="bg-custom-gray flex lg:pt-[130px] lg:pb-[130px] md:pt-[110px] md:pb-[130px] sm:pt-[110px] sm:pb-[130px] pt-[90px] pb-[130px]"
      >
        <Contact onContactInView={handleContactInView} />
      </section>
    </div>
  );
}

export default App;
