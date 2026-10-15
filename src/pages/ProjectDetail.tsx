import React, { useEffect, useCallback, useState } from "react";
import { useParams, Link } from "wouter";
import { projectsData } from "../lib/projectData";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import NewFooter from "../components/NewFooter";

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projectId
    ? projectsData?.filter((project) => project?.id === projectId)?.[0]
    : null;

  const handleNextImage = useCallback(() => {
    if (project) {
      setActiveImageIndex((prev) =>
        prev === project?.images?.length - 1 ? 0 : prev + 1
      );
    }
  }, [project]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 2500);

    return () => clearInterval(interval);
  }, [handleNextImage]);

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

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      <Navbar />
      <section className="pt-28 uppercase bg-[#FFFFFF] text-[#0D1321] min-h-screen">
      <div className="mb-16">
        <div className="flex justify-center items-center relative gap-4 mb-4">
          <div className="w-[95%] lg:w-[50%] h-[300px] md:h-[400px] lg:h-[450px] shadow-lg rounded-3xl overflow-hidden z-0 mb-4 md:mb-0as border border-[#E9C46A]/30">
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
              className={`w-4 h-4 rounded-full shadow-md transition-all duration-300 ease-in-out pointer-events-auto ${
                activeImageIndex === index
                  ? "bg-[#E9C46A] scale-125 shadow-md"
                  : "bg-[#F4EDE0] border border-[#E9C46A]/30"
              }`}
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="w-[95%] lg:w-[900px] mx-auto">
        <div className="lg:mb-16 mb-8 text-sm font-semibold">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-[#0D1321] tracking-wider uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-[#E9C46A]">
            Project Overview
          </h2>
          <p className="mb-2 leading-[1.7] text-[#1D2D50]">
            <strong className="text-[#0D1321]">Summary:</strong> {project.overview}
          </p>
          <p className="mb-2 leading-[1.7] text-[#1D2D50]">
            <strong className="text-[#0D1321]">Description:</strong> {project.longDescription}
          </p>
          <p className="mb-2 leading-[1.7] text-[#1D2D50]">
            <strong className="text-[#0D1321]">Purpose:</strong> {project.purpose}
          </p>
        </div>

        <div className="lg:mb-16 mb-8 text-sm font-semibold">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-[#0D1321] tracking-wider uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-[#E9C46A]">
            Features
          </h2>
          <ul className="pl-0">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="mb-3 leading-[1.6] pl-5 relative text-[#1D2D50] before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:rounded before:h-2 before:bg-[#E9C46A]"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:mb-16 mb-8">
          <h2 className="text-2xl font-bold mb-4 relative pb-2 text-[#0D1321] tracking-wider uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-[#E9C46A]">
            Tools Used
          </h2>
          <div className="flex flex-wrap gap-3 mt-4 text-sm font-semibold">
            {project.tools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#F4EDE0] text-[#0D1321] flex flex-row justify-center items-center gap-5 rounded-lg py-3 px-5 border border-[#E9C46A]/35 hover:border-[#E9C46A] transition-all duration-300 shadow-sm hover:scale-105"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

        {(project?.liveLink || project?.appLink) && (
          <div className="lg:mb-16 mb-8">
            <h2 className="text-2xl font-bold mb-4 relative pb-2 text-[#0D1321] tracking-wider uppercase after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30%] after:rounded after:h-1 after:bg-[#E9C46A]">
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
                      className="bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] text-[#0D1321] inline-flex uppercase tracking-wider text-sm items-center gap-2 hover:brightness-105 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
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
                      className="bg-gradient-to-r from-[#E9C46A] via-[#F4D078] to-[#FFD3A5] text-[#0D1321] inline-flex uppercase tracking-wider text-sm items-center gap-2 hover:brightness-105 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
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

      <div className="flex justify-center border-t border-[#E9C46A]/20">
        <Link
          to="/projects"
          className="tracking-wider transition-all duration-300 m-8 text-lg font-semibold text-[#0D1321] hover:text-[#E9C46A]"
        >
          BACK TO PROJECTS
        </Link>
      </div>
      </section>
      <NewFooter />
    </div>
  );
};

export default ProjectDetail;
