import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { ReactTyped } from "react-typed";
import DeskSVG from "../assets/desk.svg";

const Main: React.FC = () => {
  return (
    <>
      {/* Main Section */}
      <section className="flex-grow h-screen flex flex-col md:flex-row items-start md:items-center text-left p-40 space-y-4 md:space-y-0 md:space-x-20 mx-auto dark:bg-gray-800 w-full">
        <div className="flex-1">
          {/* Title */}
          <h1 className="text-8xl font-bold text-black dark:text-white">
            hi, my name is <br />{" "}
            <span className="text-my-blue text-9xl">owen.</span>
          </h1>

          {/* Links and Icons */}
          <div className="flex items-center space-x-4 my-4">
            <a
              href="/resume"
              className="px-4 py-2 bg-my-blue text-white font-medium rounded-md shadow-md hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 text-6xl"
            >
              my resume
            </a>
            <a href="www.linkedin.com/in/owen-kleinmaier" aria-label="LinkedIn">
              <LinkedinLogo
                size={56}
                weight="fill"
                className="text-blue-600 hover:text-blue-800 transition-colors dark:text-blue-400 dark:hover:text-blue-600"
              />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <GithubLogo
                size={56}
                weight="fill"
                className="text-gray-700 hover:text-black transition-colors dark:text-gray-300 dark:hover:text-white"
              />
            </a>
            <a href="mailto:email@example.com" aria-label="Gmail">
              <EnvelopeSimple
                size={56}
                weight="fill"
                className="text-red-500 hover:text-red-700 transition-colors dark:text-red-400 dark:hover:text-red-600"
              />
            </a>
          </div>

          {/* Typing Animation */}
          <p className="text-7xl text-black dark:text-white">
            i am a{" "}
            <ReactTyped
              strings={[
                "computer science student. _",
                "aspiring full-stack developer. _",
              ]}
              typeSpeed={35}
              backSpeed={35}
              loop
              className="text-my-blue text-7xl"
            />
          </p>
        </div>

        {/* SVG Illustration */}
        <div className="flex-1">
          <img src={DeskSVG} alt="Desk" className="w-5/6 h-auto mx-auto" />
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I'm Owen, a computer science student with a passion for web
          development and software engineering. I enjoy building projects and
          solving problems. I specialize in front-end and full-stack
          development.
        </p>
      </section>
    </>
  );
};

export default Main;
