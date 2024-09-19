import React from "react";
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

const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 flex justify-center items-center dark:bg-gray-800 text-black dark:text-white w-full px-6 pt-20"
    >
      <div className="w-full max-w-7xl p-8 dark:bg-gray-700 text-center rounded-3xl shadow-2xl dark:shadow-2xl justify-center">
        <h1 className="text-5xl font-bold mb-8">my skills</h1>

        {/* Languages */}
        <h2 className="text-2xl mb-6">languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12 justify-center content-center">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12 justify-center">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12 justify-center">
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
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
  );
};

// SkillWidget Component
const SkillWidget: React.FC<{ svgPath: string; name: string }> = ({
  svgPath,
  name,
}) => {
  return (
    <div className="group relative w-24 h-24 flex items-center justify-center cursor-pointer">
      <img
        src={svgPath}
        alt={name}
        className="w-16 h-16 transition-transform group-hover:scale-110"
      />
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded-md transition-opacity duration-300">
        {name}
      </span>
    </div>
  );
};

export default SkillsSection;
