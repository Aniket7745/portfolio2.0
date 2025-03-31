"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
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
      tech: ["Next.js", "TailwindCSS", "MONGODB", "API"]
    },
    {
      title: "Gemini Wrapper",
      description: "A backend wrapper for the Gemini API, provides application developers with a simple interface to interact with the Gemini cryptocurrency exchange.",
      image: "/zoro.jpg",
      href: "https://github.com/Aniket7745/",
      tech: ["TypeScript", "Gemini API", "Node.js"]
    },
  ];

  return (
    <main className="min-h-screen p-4 flex flex-col gap-4 mt-20">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-400 mb-2"> Projects</h1>
          <div className="h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-gray-500/50 rounded-xl backdrop-blur-lg 
                bg-black/30 overflow-hidden transition-all duration-300 
                hover:border-emerald-500/50 hover:bg-black/40"
            >
              {/* Project Content */}
              <div className="flex flex-col md:flex-row gap-6 p-6">
                {/* Project Image */}
                <div className="relative w-full md:w-[200px] h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-300 
                      group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 
                    to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Details */}
                <div className="flex-1 space-y-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-xl font-bold text-white/90 group-hover:text-emerald-400 
                      transition-colors duration-300">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-3">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors p-2 
                          rounded-lg hover:bg-white/5"
                      >
                        <FaGithub className="text-xl" />
                      </a>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-emerald-400 transition-colors p-2 
                          rounded-lg hover:bg-emerald-500/5"
                      >
                        <BiLinkExternal className="text-xl" />
                      </a>
                    </div>
                  </div>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 rounded-full bg-emerald-500/10 
                          text-emerald-400 border border-emerald-500/20"
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
    </main>
  );
}