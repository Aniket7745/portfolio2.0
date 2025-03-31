"use client";
import React, { useState, useEffect } from "react";
import { 
  
  AiFillGithub 
} from "react-icons/ai";
import { 
  DiJavascript1, 
  DiReact, 
  DiNodejs,
  DiJava,

} from "react-icons/di";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  // Remove SiGraphql if not used
  SiKotlin
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

const Skills = () => {
  // Add state to track viewport width
  const [viewportWidth, setViewportWidth] = useState(0);
  
  // Update viewport width after component mounts (client-side only)
  useEffect(() => {
    // Set initial viewport width
    setViewportWidth(window.innerWidth);
    
    // Add resize listener
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const skills = [
    { 
      name: "js", 
      icon: <DiJavascript1 className="text-2xl sm:text-3xl md:text-4xl text-[#F7DF1E] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 90,
      experience: "1.5+ years",
      specialty: "Frontend Development"
    },
    { 
      name: "React", 
      icon: <DiReact className="text-2xl sm:text-3xl md:text-4xl text-[#61DAFB] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 85,
      experience: "1.5+ years",
      specialty: "UI Components"
    },
    { 
      name: "Node.js", 
      icon: <DiNodejs className="text-2xl sm:text-3xl md:text-4xl text-[#339933] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 80,
      experience: "1.5+ years",
      specialty: "Backend Development"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript className="text-2xl sm:text-3xl md:text-4xl text-[#3178C6] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 75,
      experience: "1+ year",
      specialty: "Type Safety"
    },
    { 
      name: "Git", 
      icon: <AiFillGithub className="text-2xl sm:text-3xl md:text-4xl text-[#F05032] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 78,
      experience: "1+ year",
      specialty: "Version Control"
    },
    { 
      name: "Tailwind", 
      icon: <SiTailwindcss className="text-2xl sm:text-3xl md:text-4xl text-[#06B6D4] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 70,
      experience: "1+ year",
      specialty: "Styling"
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 72,
      experience: "1+ year",
      specialty: "Full-stack Framework"
    },
    { 
      name: "Java", 
      icon: <DiJava className="text-2xl sm:text-3xl md:text-4xl text-[#ff9d00] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 65,
      experience: "1+ year",
      specialty: "Backend Development"
    },
    { 
      name: "Kotlin", 
      icon: <SiKotlin className="text-2xl sm:text-3xl md:text-4xl text-[#7F52FF] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 60,
      experience: "1+ year",
      specialty: "Mobile Development"
    },
    { 
      name: "Go", 
      icon: <TbBrandGolang className="text-2xl sm:text-3xl md:text-4xl text-[#00ADD8] group-hover:text-emerald-400 transition-colors duration-300" />,
      level: 35,
      experience: "2 months",
      specialty: "Systems Programming"
    }
  ];

  // Function to determine tooltip position class based on index in grid
  const getTooltipPositionClass = (index: number, cols: number): string => {
    // First column - align tooltip to the right
    if (index % cols === 0) {
      return "left-0 transform-none";
    }
    // Last column - align tooltip to the left
    else if (index % cols === cols - 1) {
      return "right-0 transform-none left-auto";
    }
    // Default - center tooltip
    return "left-1/2 transform -translate-x-1/2";
  };

  // Calculate columns based on viewport width, but only on client-side
  const getColumnCount = () => {
    // Default for server-side rendering and initial client render
    if (viewportWidth === 0) return 2;
    
    // Client-side calculation after useEffect runs
    if (viewportWidth >= 1024) return 5;      // lg
    if (viewportWidth >= 768) return 4;       // md
    if (viewportWidth >= 640) return 3;       // sm
    return 2;                                 // xs
  };
  
  // Get column count
  const cols = getColumnCount();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-2 md:gap-4 p-1 sm:p-2 md:p-4 relative">
      {skills.map((skill, index) => {
        return (
          <div
            key={index}
            className="group flex flex-col items-center justify-center gap-0.5 sm:gap-1 md:gap-2 p-1 sm:p-2 md:p-3 rounded-lg 
              backdrop-blur-sm bg-black/40 border border-gray-600/50 transition-all duration-300 
              hover:scale-105 hover:bg-black/50 hover:border-emerald-500/50 relative"
          >
            {skill.icon}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent 
              rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* RPG Stats Tooltip */}
            <div className={`absolute -top-24 sm:-top-28 w-36 sm:w-40 md:w-44 p-1.5 sm:p-2 
              bg-black/95 border border-emerald-500/50 rounded-lg opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 pointer-events-none z-50 shadow-xl shadow-emerald-500/20 ${getTooltipPositionClass(index, cols)}`}>
              <div className="text-emerald-400 font-bold mb-0.5 sm:mb-1 text-xs sm:text-sm">{skill.name}</div>
              <div className="text-2xs sm:text-xs text-gray-300">
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="text-emerald-400">{skill.level}/100</span>
                </div>
                <div className="flex justify-between">
                  <span>EXP:</span>
                  <span className="text-emerald-400">{skill.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span>Class:</span>
                  <span className="text-emerald-400">{skill.specialty}</span>
                </div>
              </div>
            </div>

            <span className="text-2xs sm:text-xs md:text-sm text-white">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
