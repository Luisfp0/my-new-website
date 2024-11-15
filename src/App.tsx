import { useRef, useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";
import ProfilePicture from "./assets/img/profilePicture.jpeg";
import DNATransitionAnimation from "./components/ParticlesBackground";

type SectionName = "home" | "about" | "skills" | "contact";

function App() {
  const [activeSection, setActiveSection] = useState<SectionName>("home");

  const isHomeInView = activeSection === "home";
  const isAboutMeInView = activeSection === "about";
  const isMySkillsInView = activeSection === "skills";
  const isContactInView = activeSection === "contact";

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
  }, []);

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

  return (
    <div className="relative min-h-screen bg-custom-gray">
      <div className="absolute inset-0 bg-opacity-90">
        <DNATransitionAnimation
          primaryColor="#2ccb69"
          secondaryColor="#ffffff"
          particleCount={200}
          particleSize={2.5}
          randomParticlePercentage={20}
        />
      </div>
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
        <Hero aboutMeSectionRef={aboutMeSectionRef} />
      </section>
      <section
        ref={aboutMeSectionRef}
        className="lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] pb-[22px] pt-[72px] bg-custom-gray"
      >
        <AboutMe contactSectionRef={contactSectionRef} />
      </section>
      <section className="flex py-[130px] bg-custom-gray">
        <HireMe contactSectionRef={contactSectionRef} />
      </section>
      <section
        ref={mySkillsSectionRef}
        className="flex bg-custom-gray lg:pt-[130px] lg:pb-[48px] md:pt-[130px] md:pb-[48px] sm:pb-[43px] xsm:pt-[50px] xsm:pb-[88px]"
      >
        <MySkills contactSectionRef={contactSectionRef} />
      </section>
      <section
        ref={contactSectionRef}
        className="bg-custom-gray flex lg:pt-[130px] lg:pb-[130px] md:pt-[110px] md:pb-[130px] sm:pt-[110px] sm:pb-[130px] pt-[90px] pb-[130px]"
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
