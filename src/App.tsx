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

  const homeNavBreakRef = useRef<HTMLDivElement>(null);
  const aboutMeNavBreakRef = useRef<HTMLDivElement>(null);
  const mySkillsNavBreakRef = useRef<HTMLDivElement>(null);
  const contactNavBreakRef = useRef<HTMLDivElement>(null);

  const homeSectionRef = useRef<HTMLDivElement>(null);
  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const mySkillsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (homeNavBreakRef.current) {
      inView(homeNavBreakRef.current, () => {
        setIsHomeInView(true);
        return (leaveInfo) => setIsHomeInView(false);
      });
    }
  }, [homeNavBreakRef]);

  useEffect(() => {
    if (aboutMeNavBreakRef.current) {
      inView(aboutMeNavBreakRef.current, () => {
        setIsAboutMeInView(true);
        return (leaveInfo) => setIsAboutMeInView(false);
      });
    }
  }, [aboutMeNavBreakRef]);

  useEffect(() => {
    if (mySkillsNavBreakRef.current) {
      inView(mySkillsNavBreakRef.current, () => {
        setIsMySkillsInView(true);
        return (leaveInfo) => setIsMySkillsInView(false);
      });
    }
  }, [mySkillsNavBreakRef]);

  useEffect(() => {
    if (contactNavBreakRef.current) {
      inView(contactNavBreakRef.current, () => {
        setIsContactInView(true);
        return (leaveInfo) => setIsContactInView(false);
      });
    }
  }, [contactNavBreakRef]);

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
          aboutMeSectionRef={aboutMeSectionRef}
          mySkillsSectionRef={mySkillsSectionRef}
          contactSectionRef={contactSectionRef}
        />
        <Hero
          homeNavBreakRef={homeNavBreakRef}
          aboutMeSectionRef={aboutMeSectionRef}
        />
      </section>
      <section
        ref={aboutMeSectionRef}
        className={
          "flex flex-col lg:pt-[130px] lg:pb-[24px] md:pb-[23px] md:pt-[95px] sm:pb-[22px] sm:pt-[72px] bg-custom-gray"
        }
      >
        <AboutMe aboutMeNavBreakRef={aboutMeNavBreakRef} />
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
        <MySkills mySkillsNavBreakRef={mySkillsNavBreakRef} />
      </section>
      <section
        ref={contactSectionRef}
        className={"bg-custom-gray flex pt-[130px] pb-[130px]"}
      >
        <Contact contactNavBreakRef={contactNavBreakRef} />
      </section>
    </>
  );
}

export default App;
