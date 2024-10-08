import { useEffect, useState } from "react";
import { CaretLeft } from "@phosphor-icons/react";

// Array of project data (screenshots and names)
const projects = [
  {
    name: "March Madness Predictor",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Defense.gov_photo_essay_120112-D-VO565-015.jpg",
    description: "This is a detailed description of project one.",
    link: "https://www.kaggle.com/code/owenkleinmaier/march-madness-predictor",
  },
  {
    name: "Easy Bold Reader",
    img: "https://github.com/owenkleinmaier/EasyBoldReader/blob/main/128-icon.png?raw=true",
    description: "This is a detailed description of project two.",
    link: "https://github.com/owenkleinmaier/EasyBoldReader",
  },
  {
    name: "Age Calculator",
    img: "https://raw.githubusercontent.com/owenkleinmaier/age-calculator/597b575b0c4692f0448469766c1464f4da3ef01b/stacked-waves-haikei.svg",
    description: "This is a detailed description of project Three.",
    link: "https://github.com/owenkleinmaier/age-calculator",
  },
  {
    name: "Wordle Promposal",
    img: "https://www.thetimes.com/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F263989ba-730a-11ec-89e9-22d3d9c31ba2.jpg?crop=1258%2C838%2C121%2C81",
    description: "This is a detailed description of project Four.",
    link: "https://github.com/owenkleinmaier/wordle-clone-promposal",
  },
  {
    name: "My Personal Website",
    img: "http://localhost:3000/static/media/desk.92791fecd9e8ce4f49c055b4c7d60dd0.svg",
    description: "This is a detailed description of project Three.",
    link: "https://github.com/owenkleinmaier/www.owenkleinmaier.com",
  },
];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Function to handle selecting a project
  const handleProjectClick = (projectLink: string) => {
    window.open(projectLink, "_blank");
    // setSelectedProject(projectName);
  };

  // Function to handle going back to the grid
  const handleBackToGrid = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-16 flex justify-center items-center dark:bg-gray-800 text-black dark:text-white w-full px-6 pt-20"
    >
      <div className="w-full max-w-7xl p-8 text-black dark:text-white dark:bg-gray-700 text-center rounded-3xl shadow-2xl dark:shadow-2xl">
        <h1 className="text-5xl font-bold mb-8">my projects</h1>

        {/* Check if a project is selected */}
        {selectedProject ? (
          <div className="relative">
            {/* Back Button */}
            <button
              onClick={handleBackToGrid}
              className="absolute top-0 left-0 text-3xl p-4 hover:text-my-blue"
            >
              <CaretLeft size={24} /> Back
            </button>

            {/* Detailed View for Selected Project */}
            <div className="flex flex-col items-center justify-center h-full w-full">
              {/* Find the selected project in the array */}
              {projects
                .filter((project) => project.name === selectedProject)
                .map((project) => (
                  <div key={project.name} className="text-center">
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h2 className="text-4xl font-bold mb-4">{project.name}</h2>
                    <p className="text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          // Grid View for Projects
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.name}
                className="relative group w-full h-64 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project.link)}
              >
                {/* Wrapper for the blurred background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${project.img})`,
                    filter: "blur(4px)",
                  }}
                ></div>

                {/* Name and Learn More button on top of the background */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-3xl font-bold text-white transition-opacity opacity-100 group-hover:opacity-0">
                    {project.name}
                  </h2>
                  {/* Learn More button */}
                  <button className="absolute px-4 py-2 bg-my-blue text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
