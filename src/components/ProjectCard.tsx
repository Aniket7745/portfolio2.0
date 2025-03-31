import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";

export type Project = {
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  tech: string[];
  date?: string;
  status?: "completed" | "in-progress" | "planned";
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    "completed": "bg-green-500/20 text-green-400 border-green-500/20",
    "in-progress": "bg-amber-500/20 text-amber-400 border-amber-500/20",
    "planned": "bg-blue-500/20 text-blue-400 border-blue-500/20"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative border border-gray-500/50 rounded-xl backdrop-blur-lg 
        bg-black/30 overflow-hidden transition-all duration-300 
        hover:border-emerald-500/50 hover:bg-black/40 hover:shadow-lg hover:shadow-emerald-500/10"
    >
      {/* Project Content */}
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 p-4 sm:p-6">
        {/* Project Image - Optimize size for different screen sizes */}
        <div className="relative w-full lg:w-[250px] h-[150px] sm:h-[180px] lg:h-[200px] rounded-lg overflow-hidden mx-auto lg:mx-0 max-w-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={800}
            className="w-full h-full object-cover transition-transform duration-500 
              group-hover:scale-110"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Project Details */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          {/* Header section with title, date and links */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-start gap-3">
            <div className="space-y-1 w-full sm:w-auto">
              <h2 className="text-xl font-bold text-white/90 group-hover:text-emerald-400 
                transition-colors duration-300 pr-20 sm:pr-0">
                {project.title}
              </h2>
              {project.date && (
                <p className="text-xs text-gray-500">{project.date}</p>
              )}
            </div>

            {/* Links - Absolute positioning for mobile */}
            <div className="flex items-center gap-2 absolute top-4 right-4 sm:static">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2.5 
                    rounded-lg hover:bg-white/5 flex items-center gap-1 touch-manipulation"
                  aria-label="View GitHub repository"
                >
                  <FaGithub className="text-xl" />
                  <span className="text-xs hidden sm:inline">GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors p-2.5 
                    rounded-lg hover:bg-emerald-500/5 flex items-center gap-1 touch-manipulation"
                  aria-label="View live demo"
                >
                  <BiLinkExternal className="text-xl" />
                  <span className="text-xs hidden sm:inline">Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Description - Line clamp for mobile */}
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300
            text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
            {project.description}
          </p>

          {/* Tags section */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
            {project.status && (
              <span className={`text-xs px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${statusColors[project.status]}`}>
                {project.status}
              </span>
            )}
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/10 
                  text-emerald-400 border border-emerald-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 