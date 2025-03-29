import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section className="mb-8 flex">
      <div className="p-4 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-8 h-full items-start">
          {/* Image column */}
          <div className="flex flex-col gap-4 self-start">
            <div className="flex items-start group">
              <Image
                src="/zoro.jpg"
                alt="Profile Picture"
                width={600}
                height={600}
                className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-lg shadow-lg
                  transform transition-all duration-300 ease-out
                  hover:scale-105 hover:rotate-2
                  group-hover:shadow-emerald-500/50 group-hover:shadow-lg
                  animate-border bg-gradient-to-r from-emerald-500/30 to-emerald-500/0
                  bg-[length:400%_400%] p-0.5"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="self-start w-full max-w-full overflow-hidden">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 truncate pl-4
              hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent
              transition-all duration-300 ease-out cursor-default
              hover:scale-105 transform-gpu">
                Hi, I&apos;m Aniket Kundu
            </h1>

            {/* Decorative line */}
            <div className="overflow-hidden pl-4">
              <p className="text-base md:text-lg font-jetbrains text-gray-400 mb-2 
                tracking-wider drop-shadow-[0_0_8px_rgba(107,114,128,0.3)]
                hover:text-emerald-400 transition-colors duration-300">
                ─────────────0──────────────
              </p>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed font-inter text-gray-300 mb-4
              drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] tracking-wide break-words
              hover:text-emerald-300 transition-all duration-300 ease-out
              hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)] pl-4">
              --a creative coder, storyteller, and problem solver I&apos;m always exploring
              new ideas and pushing the limits of technology. Let&apos;s create something
              amazing together!
            </p>

            {/* System info */}
            <div className="font-jetbrains space-y-1">
              <div className="min-w-0">
                {["Linux", "Hyprland", "LazyVim"].map((item, index) => (
                  <p key={index} 
                    className="text-sm md:text-base text-emerald-600 overflow-hidden text-ellipsis
                    drop-shadow-[0_0_8px_rgba(52,211,153,0.3)] tracking-wider
                    hover:bg-gradient-to-r hover:from-emerald-100 hover:to-emerald-200
                    transition-all duration-300 ease-out cursor-default
                    hover:translate-x-2 transform-gpu">
                    {item === "Linux" && "🐧 --"} 
                    {item === "Hyprland" && "🗔 --"} 
                    {item === "LazyVim" && "🖮 --"} 
                    {item === "Linux" && "Linux 6.13.8-200.fc41.x86_64"}
                    {item === "Hyprland" && "Hyprland 0.48.0 (Wayland)"}
                    {item === "LazyVim" && "LazyVim"}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="overflow-hidden">
              <p className="text-base md:text-lg font-jetbrains text-gray-400 mt-4 
                tracking-wider drop-shadow-[0_0_8px_rgba(107,114,128,0.3)]
                hover:text-emerald-400 transition-colors duration-300">
                ─────────────0──────────────
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
