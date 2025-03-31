import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const Projects = () => {
  const projects = [
    {
      title: "White Board",
      description: "A collaborative whiteboard application with real-time drawing capabilities and multi-user support.",
      image: "/whiteboard.png",
      href: "https://github.com/Aniket7745/White-Board",
      tech: ["React", "Socket.io", "Canvas API"]
    },
    {
      title: "Walls of Lie",
      description: "Walls of Lies is an interactive storytelling platform where users can share, discover, and engage with captivating short stories in a visually immersive way. Designed to feel like scattered notes on a wooden floor, each story is represented as a draggable card, allowing users to explore narratives organically. Whether it's fiction, mystery, or personal reflections, every story adds a new layer to the ever-growing wall of words. With a dynamic interface and a seamless user experience, Walls of Lies transforms storytelling into an interactive art form where every piece holds a secret waiting to be uncovered",
      image: "/wallsoflie.png",
      href: "https://test-wallsoflie.netlify.app/",
      tech: ["Next.js", "TailwindCSS","MONGODB", "API"]
    },
    {
      title: "Gemini Wrapper",
      description: "A backend wrapper for the Gemini API,  provides application developers with a simple interface to interact with the Gemini cryptocurrency exchange.",
      image: "/zoro.jpg",
      href: "https://github.com/Aniket7745/",
      tech: ["TypeScript", "Gemini API", "Node.js"]
    },
  ];

  return (
    <div className="flex flex-col gap-2 sm:gap-4 p-2 sm:p-4 w-full h-full overflow-y-auto no-scrollbar hide-scrollbar">
      {projects.map((project, index) => (
        <a
          href={project.href}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row items-start gap-2 sm:gap-4 border border-gray-500/50 
            p-2 sm:p-4 rounded-xl backdrop-blur-lg bg-black/30 w-full transition-all duration-300 
            hover:border-emerald-500/50 hover:bg-black/40 hover:scale-[1.02]"
        >
          {/* Project Image */}
          <div className="relative w-full sm:w-[90px] md:w-[120px] h-[90px] md:h-[120px] rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-300 
                group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Project Details */}
          <div className="flex flex-col space-y-1 sm:space-y-2 flex-1 mt-2 sm:mt-0">
            <div className="flex justify-between items-start">
              <h3 className="text-base sm:text-lg font-bold text-white/90 group-hover:text-emerald-400 
                transition-colors duration-300">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <FaGithub className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors" />
                <BiLinkExternal className="text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 
              transition-colors duration-300">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 text-emerald-400 
                    border border-emerald-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
