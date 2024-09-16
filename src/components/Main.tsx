import React from "react";
import { useEffect, useState } from "react";
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  CaretDown,
} from "@phosphor-icons/react";
import { ReactTyped } from "react-typed";
import DeskSVG from "../assets/desk.svg";

// Import newly created sections
import AboutMeSection from "./AboutMeSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

const Main: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    // Delay animations to prevent flash
    const timer = setTimeout(() => {
      document.querySelectorAll(".animate-slidein").forEach((el) => {
        el.classList.remove("opacity-0");
      });
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide the arrow once the user scrolls
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main Section */}
      <section className="relative flex-grow h-screen flex flex-col md:flex-row items-start md:items-center text-left p-40 space-y-4 md:space-y-0 md:space-x-20 mx-auto dark:bg-gray-800 w-full">
        <div className="flex-1 animate-slidein opacity-0 transition-opacity duration-1000">
          {/* Title */}
          <h1 className="text-8xl font-bold text-black dark:text-white">
            hi, my name is <br />{" "}
            <span className="text-my-blue text-9xl">owen.</span>
          </h1>

          {/* Links and Icons */}
          <div className="flex items-center space-x-4 my-4 animate-slidein opacity-0 transition-opacity duration-1000">
            <a
              href="/resume"
              className="px-4 py-2 bg-my-blue text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 text-6xl"
            >
              my resume
            </a>
            <a
              href="https://www.linkedin.com/in/owen-kleinmaier"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo
                size={56}
                weight="fill"
                className="text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-600"
              />
            </a>
            <a
              href="https://github.com/owenkleinmaier"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo
                size={56}
                weight="fill"
                className="text-gray-700 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
              />
            </a>
            <a
              href="mailto:owenkleinmaier@gmail.com"
              aria-label="Gmail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EnvelopeSimple
                size={56}
                weight="fill"
                className="text-red-500 hover:text-red-700 transition-colors dark:text-red-400 dark:hover:text-red-600"
              />
            </a>
          </div>

          {/* Typing Animation */}
          <p className="text-7xl text-black dark:text-white animate-slidein opacity-0 transition-opacity duration-1000">
            i am {" "}
            <ReactTyped
              strings={[
                "a computer science student. _",
                "an aspiring full-stack developer. _",
              ]}
              typeSpeed={35}
              backSpeed={35}
              loop
              className="text-my-blue text-7xl"
            />
          </p>
        </div>

        {/* SVG Illustration */}
        <div className="flex-1 animate-slidein opacity-0 transition-opacity duration-1000">
          <img src={DeskSVG} alt="Desk" className="w-5/6 h-auto mx-auto" />
        </div>

        {/* Arrow to beckon scrolling */}
        {showArrow && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-800 dark:text-white animate-slidein opacity-0">
            <CaretDown size={56} />
          </div>
        )}
      </section>

      {/* About Me Section */}
      <AboutMeSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </>
  );
};

export default Main;
