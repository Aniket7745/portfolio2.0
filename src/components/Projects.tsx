import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "White Board",
      description: "A collaborative whiteboard application with real-time drawing capabilities and multi-user support.",
      image: "/whiteboard.png",
      href: "https://github.com/Aniket7745/collaborating-whiteboard",
      github: "https://github.com/Aniket7745/collaborating-whiteboard",
      tech: ["React", "Socket.io", "Canvas API"]
    },
    {
      title: "Walls of Lie",
      description: "Walls of Lies is an interactive storytelling platform where users can share, discover, and engage with captivating short stories in a visually immersive way.",
      image: "/wallsoflie.png",
      href: "https://test-wallsoflie.netlify.app/",
      github: "https://github.com/Aniket7745/walls-of-lie",
      tech: ["Next.js", "TailwindCSS", "MONGODB", "API"]
    },
    {
      title: "Gemini Wrapper",
      description: "A backend wrapper for the Gemini API, provides application developers with a simple interface to interact with the Gemini cryptocurrency exchange.",
      image: "/zoro.jpg",
      href: "https://github.com/Aniket7745/Gemini-wrapper",
      github: "https://github.com/Aniket7745/Gemini-wrapper/",
      tech: ["TypeScript", "Gemini API", "Node.js"]
    },
  ];

  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      {/* Header section that navigates to /projects */}
      <Link href="/projects" className="mx-3 mt-3 mb-1">
        <div className="flex justify-between items-center px-3 py-2 rounded-lg hover:border-emerald-800/60 transition-colors cursor-pointer ">
          <h2 className="text-lg font-medium text-white/90">Projects</h2>
        </div>
      </Link>
      
      {/* Project cards */}
      <div className="flex-1 overflow-y-auto no-scrollbar hide-scrollbar px-3 pt-2 pb-16 space-y-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col border border-gray-700 rounded-lg overflow-hidden bg-[#111111] w-full"
          >
            <div className="flex p-3 gap-3">
              {/* Project Image */}
              <div className="relative w-[80px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-col flex-1 min-w-0 justify-center py-0.5">
                {/* Title and links */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-base md:text-sm font-medium text-white max-w-[75%] truncate">{project.title}</h3>
                  <div className="flex items-center gap-0 flex-shrink-0">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-transparent p-1.5 hover:text-emerald-400 transition-colors"
                    >
                      <FaGithub className="text-lg md:text-base" />
                    </a>
                    <a 
                      href={project.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white bg-transparent p-1.5 hover:text-emerald-400 transition-colors"
                    >
                      <BiLinkExternal className="text-lg md:text-base" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-[8px] text-gray-400/80 mt-0.5 line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Technology Tags - visible all the time */}
                <div className="flex flex-wrap gap-1.5 mt-1.5 transition-opacity">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-[6px] px-2 py-0.5 rounded-full bg-emerald-900/20 text-emerald-400/90
                        border border-emerald-900/40 font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
