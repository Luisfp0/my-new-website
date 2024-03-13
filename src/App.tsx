import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import HireMe from "./components/HireMe";
import MySkills from "./components/MySkills";
import Contact from "./components/Contact";
import { inView } from "framer-motion";

function App() {
  const [isAboutMeInView, setIsAboutMeInView] = useState(false);
  const [isHomeInView, setIsHomeInView] = useState(false);
  const [isMySkillsInView, setIsMySkillsInView] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const mySkillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const mySkillsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeRef.current) {
      inView(homeRef.current, () => {
        setIsHomeInView(true);
        return (leaveInfo) => setIsHomeInView(false);
      });
    }
  }, [homeRef]);

  useEffect(() => {
    if (aboutMeRef.current) {
      inView(aboutMeRef.current, () => {
        setIsAboutMeInView(true);
        return (leaveInfo) => setIsAboutMeInView(false);
      });
    }
  }, [aboutMeRef]);

  useEffect(() => {
    if (mySkillsRef.current) {
      inView(mySkillsRef.current, () => {
        setIsMySkillsInView(true);
        return (leaveInfo) => setIsMySkillsInView(false);
      });
    }
  }, [mySkillsRef]);

  useEffect(() => {
    if (contactRef.current) {
      inView(contactRef.current, () => {
        setIsContactInView(true);
        return (leaveInfo) => setIsContactInView(false);
      });
    }
  }, [contactRef]);

  return (
    <>
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
          aboutSectionMeRef={aboutMeSectionRef}
          mySkillsSectionRef={mySkillsSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <Hero homeRef={homeRef} aboutMeSectionRef={aboutMeSectionRef} />
      </section>
      <section
        ref={aboutMeSectionRef}
        className={
          "flex flex-col lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] bg-custom-gray"
        }
      >
        <AboutMe aboutMeRef={aboutMeRef} />
      </section>
      <section className={"flex py-[130px] bg-custom-gray "}>
        <HireMe />
      </section>
      <section
        ref={mySkillsSectionRef}
        className={
          "flex bg-custom-gray lg:pt-[130px] lg:pb-[48px] md:pt-[130px] md:pb-[48px] sm:pb-[43px]"
        }
      >
        <MySkills mySkillsRef={mySkillsRef} />
      </section>
      <section
        ref={contactSectionRef}
        className={"bg-custom-gray flex pt-[130px] pb-[130px]"}
      >
        <Contact ref={contactRef} />
      </section>
    </>
  );
}

export default App;
