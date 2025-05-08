import React, { useEffect } from "react";
import { useParams, Link } from "wouter";
import { projectsData } from "@/lib/projectData";
import { motion } from "framer-motion";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const project = projectId
    ? projectsData.filter((project) => project.id === projectId)[0]
    : null;

  if (!project) {
    return (
      <div className="section project-not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist.</p>
        <Link to="/projects" className="back-link">
          Back to Projects
        </Link>
      </div>
    );
  }

  // Find the next project for navigation
  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(projectId || "");
  const nextProjectId = projectIds[(currentIndex + 1) % projectIds.length];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    // Scroll to the top of the page on route change
    setInterval(() => {
      handleNextImage();
    }, 2500);
  }, []);
  return (
    <section className="pt-20 uppercase">
      <div className="mb-16">
        <div className="flex justify-center items-center relative gap-4 mb-4">
          <div className="w-[95%] lg:w-[50%]  h-[300px] md:h-[400px] lg:h-[450px] shadow-lg rounded-3xl overflow-hidden z-0 mb-4 md:mb-0as">
            {/* Using a placeholder color background since we don't have actual images */}
            <div className="w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-300 ease-in-out z-0 bg-white">
              <img
                src={project.images[activeImageIndex]}
                alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2">
          {project.images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full shadow-lg transition-colors duration-300 ease-in-out pointer-events-auto  ${
                activeImageIndex === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                  : "bg-gray-200 shadow-xl"
              }`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="w-[95%] lg:w-[900px] mx-auto">
        <div className="lg:mb-16 mb-8 text-sm font-semibold">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-black tracking-wider gradient-text uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-gradient-to-r after:bg-blue-600">
            Project Overview
          </h2>
          <p className="mb-2 leading-[1.7] text-black">
            <strong>Summary:</strong> {project.overview}
          </p>
          <p className="mb-2 leading-[1.7] text-black">
            <strong>Description:</strong> {project.longDescription}
          </p>
          <p className="mb-2 leading-[1.7] text-black">
            <strong>Purpose:</strong> {project.purpose}
          </p>
        </div>

        <div className="lg:mb-16 mb-8 text-sm font-semibold">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-black tracking-wider gradient-text uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-gradient-to-r after:bg-blue-600">
            Features
          </h2>
          <ul className=" pl-0">
            {project.features.map((feature, index) => (
              <li
                className="mb-3 leading-[1.6] pl-5 relative text-black before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:rounded before:h-2 before:bg-gradient-to-r before:from-blue-600 before:to-purple-600"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:mb-16 mb-8 ">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-black tracking-wider gradient-text uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-gradient-to-r after:bg-blue-600">
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-3 mt-4 text-sm font-semibold">
            {project.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/80 flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border-white border hover:border-blue-600 transition-all duration-300 shadow-md hover:shadow-none hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {(project?.liveLink || project?.appLink) && (
          <div className="lg:mb-16 mb-8">
            <h2 className="text-2xl font-bold mb-4 relative pb-2 text-black tracking-wider gradient-text uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-gradient-to-r after:bg-blue-600">
              See Live
            </h2>
            <div className="flex gap-2">
              {project?.liveLink && (
                <div className="mb-8 text-center">
                  <motion.div className="inline-block">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-bg inline-flex uppercase tracking-wider text-sm items-center gap-2 text-white hover:text-black font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
                    >
                      <span>LIVE SITE</span>
                    </a>
                  </motion.div>
                </div>
              )}
              {project?.appLink && (
                <div className="mb-8 text-center">
                  <motion.div className="inline-block">
                    <a
                      href={project.appLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-bg inline-flex uppercase tracking-wider text-sm items-center gap-2 text-white hover:text-black font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-purple-300/30 hover:shadow-xl transition-all duration-300"
                    >
                      <span>GET APPS</span>
                    </a>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center border-t border-gray-200">
        <Link
          to="/projects"
          className="tracking-wider transition-all duration-300 m-8 text-lg font-semibold hover:text-blue-600"
        >
          BACK TO PROJECTS
        </Link>
      </div>
    </section>
  );
};

export default ProjectDetail;
