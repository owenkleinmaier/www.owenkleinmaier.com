import { useEffect, useState } from "react";
import {
  LinkedinLogo,
  GithubLogo,
  EnvelopeSimple,
  CaretDown,
} from "@phosphor-icons/react";
import { ReactTyped } from "react-typed";
import DeskSVG from "../assets/desk.svg";
import JavaScriptLogo from "../assets/skills/javascript-original.svg";
import TypeScriptLogo from "../assets/skills/typescript-original.svg";
import PythonLogo from "../assets/skills/python-original.svg";
import JavaLogo from "../assets/skills/java-original.svg";
import KotlinLogo from "../assets/skills/kotlin-original.svg";
import SwiftLogo from "../assets/skills/swift-original.svg";
import MySQLLogo from "../assets/skills/mysql-original.svg";
import MongoDBLogo from "../assets/skills/mongodb-original.svg";
import HTMLLogo from "../assets/skills/html5-original.svg";
import CSSLogo from "../assets/skills/css3-original.svg";
import GitLogo from "../assets/skills/git-original.svg";
import ReactLogo from "../assets/skills/react-original.svg";
import NodejsLogo from "../assets/skills/nodejs-original.svg";
import FirebaseLogo from "../assets/skills/firebase-original.svg";
import TailwindLogo from "../assets/skills/tailwindcss-original.svg";
import FigmaLogo from "../assets/skills/figma-original.svg";
import BootstrapLogo from "../assets/skills/bootstrap-original.svg";
import IllustratorLogo from "../assets/skills/illustrator-plain.svg";
import PhotoshopLogo from "../assets/skills/photoshop-original.svg";
import FlutterLogo from "../assets/skills/flutter-original.svg";
import VSCodeLogo from "../assets/skills/vscode-original.svg";
import AndroidStudioLogo from "../assets/skills/androidstudio-original.svg";
import JupyterLogo from "../assets/skills/jupyter-original.svg";
import MatplotlibLogo from "../assets/skills/matplotlib-original.svg";
import PandasLogo from "../assets/skills/pandas-original.svg";
import NumpyLogo from "../assets/skills/numpy-original.svg";
import ScikitLearnLogo from "../assets/skills/scikitlearn-original.svg";
import PytorchLogo from "../assets/skills/pytorch-original.svg";
import JiraLogo from "../assets/skills/jira-original.svg";
import MaterialUILogo from "../assets/skills/materialui-original.svg";
import KaggleLogo from "../assets/skills/kaggle-original.svg";
import NextjsLogo from "../assets/skills/nextjs-original.svg";
import RLogo from "../assets/skills/r-original.svg";
import GithubbLogo from "../assets/skills/github-original.svg";
import SlackLogo from "../assets/skills/slack-original.svg";
import XDLogo from "../assets/skills/xd-plain.svg";
import NotionLogo from "../assets/skills/notion-original.svg";

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
      <section
        id="about"
        className="h-fill flex justify-center items-center dark:bg-gray-800 text-black dark:text-white w-full pt-20"
      >
        <div className="w-full max-w-7xl p-10 bg-gray-50 dark:bg-gray-700 text-center rounded-3xl shadow-2xl dark:shadow-2xl">
          <h2 className="text-5xl font-bold mb-8">about me</h2>
          <p className="text-lg leading-relaxed mb-4">
            Hi! I'm Owen, a Junior at Indiana University Bloomington studying
            Computer Science (concentrated in artificial intelligence) with a
            minor in data science and web development. I'm passionate about
            software engineering, web development, graphic design, artificial
            intelligence, and machine learning. I have experience with many
            front-end and back-end technologies, and I'm always looking to learn
            more!
          </p>
          <p className="text-lg leading-relaxed mb-4">
            I currently serve on the core team of Google Developer Student Clubs
            @ IU as event coordinator. From planning and leading technical
            workshops to organizing meetings, I love to help others learn and
            grow in the tech field. Last year, we planned and orchestrated the
            largest student-led Hackathon in the history of Indiana University,
            collabarating with 5+ student organizations and 3+ companies with
            over 100 students and 25 teams competing.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Although I'm a computer science student, I also have a passion for
            lots of other things! I love to cook, play guitar, go on hikes, and
            play soccer. I'm a huge fan of the Chicago Bears and Manchester
            United. I love all types of music, and I am always looking to
            discover new artists and genres. I am even in the process of gaining
            a Certificate of Rock Music History through Indiana University's
            Jacobs School of Music. Lastly, I love to travel and explore new
            places, and I hope to visit every continent in my lifetime.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Ever since a young age I have been fascinated with technology and
            how it works. I love to create and build things, and I'm always
            looking for new projects to work on. I also believe my creativity
            combined with my critical thinking and problem solving will make me
            an excellent full stack developer and employee. <strong>I'm currently
            seeking internships for Summer 2025, so feel free to reach out!</strong>
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 flex justify-center items-center dark:bg-gray-800 text-black dark:text-white w-full px-6 pt-20"
      >
        <div className="w-full max-w-7xl p-8 dark:bg-gray-700 text-center rounded-3xl shadow-2xl dark:shadow-2xl">
          <h1 className="text-5xl font-bold mb-8">my skills</h1>

          {/* Languages */}
          <h2 className="text-2xl mb-6">languages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            <SkillWidget svgPath={JavaScriptLogo} name="JavaScript" />
            <SkillWidget svgPath={TypeScriptLogo} name="TypeScript" />
            <SkillWidget svgPath={PythonLogo} name="Python" />
            <SkillWidget svgPath={JavaLogo} name="Java" />
            <SkillWidget svgPath={KotlinLogo} name="Kotlin" />
            <SkillWidget svgPath={SwiftLogo} name="Swift" />
            <SkillWidget svgPath={MySQLLogo} name="MySQL" />
            <SkillWidget svgPath={MongoDBLogo} name="MongoDB" />
            <SkillWidget svgPath={HTMLLogo} name="HTML" />
            <SkillWidget svgPath={CSSLogo} name="CSS" />
          </div>

          {/* Technologies */}
          <h2 className="text-2xl mb-6">technologies & frameworks</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            <SkillWidget svgPath={ReactLogo} name="React" />
            <SkillWidget svgPath={NodejsLogo} name="Node.js" />
            <SkillWidget svgPath={FirebaseLogo} name="Firebase" />
            <SkillWidget svgPath={NextjsLogo} name="Next.js" />
            <SkillWidget svgPath={TailwindLogo} name="Tailwind CSS" />
            <SkillWidget svgPath={BootstrapLogo} name="Bootstrap" />
            <SkillWidget svgPath={FlutterLogo} name="Flutter" />
            <SkillWidget svgPath={MaterialUILogo} name="Material UI" />
            <SkillWidget svgPath={GitLogo} name="Git" />
          </div>

          {/* Machine Learning & Data Science */}
          <h2 className="text-2xl mb-6">machine learning, ai & data science</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
            <SkillWidget svgPath={PytorchLogo} name="Pytorch" />
            <SkillWidget svgPath={JupyterLogo} name="Jupyter" />
            <SkillWidget svgPath={RLogo} name="R" />
            <SkillWidget svgPath={MatplotlibLogo} name="Matplotlib" />
            <SkillWidget svgPath={PandasLogo} name="Pandas" />
            <SkillWidget svgPath={NumpyLogo} name="NumPy" />
            <SkillWidget svgPath={ScikitLearnLogo} name="Scikit Learn" />
            <SkillWidget svgPath={KaggleLogo} name="Kaggle" />
          </div>

          {/* Tools */}
          <h2 className="text-2xl mb-6">other tools</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <SkillWidget svgPath={FigmaLogo} name="Figma" />
            <SkillWidget svgPath={IllustratorLogo} name="Illustrator" />
            <SkillWidget svgPath={PhotoshopLogo} name="Photoshop" />
            <SkillWidget svgPath={XDLogo} name="XD" />
            <SkillWidget svgPath={VSCodeLogo} name="VS Code" />
            <SkillWidget svgPath={AndroidStudioLogo} name="Android Studio" />
            <SkillWidget svgPath={JiraLogo} name="Jira" />
            <SkillWidget svgPath={GithubbLogo} name="Github" />
            <SkillWidget svgPath={SlackLogo} name="Slack" />
            <SkillWidget svgPath={NotionLogo} name="Notion" />
          </div>
        </div>
      </section>
    </>
  );
};

const SkillWidget: React.FC<{ svgPath: string; name: string }> = ({
  svgPath,
  name,
}) => {
  return (
    <div className="group relative w-24 h-24 flex items-center justify-center cursor-pointer">
      {/* Render the SVG */}
      <img
        src={svgPath}
        alt={name}
        className="w-16 h-16 transition-transform group-hover:scale-110"
      />

      {/* Tooltip */}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
};

export default Main;
