import Image from "next/image";
import React from "react";

const systemInfo = [
  {
    icon: "🐧",
    name: "Linux",
    version: "Linux 6.13.8-200.fc41.x86_64"
  },
  {
    icon: "🗔",
    name: "Hyprland",
    version: "Hyprland 0.48.0 (Wayland)"
  },
  {
    icon: "🖮",
    name: "LazyVim",
    version: "LazyVim"
  }
];

const Intro = () => {
  return (
    <section className="mb-1 sm:mb-2 md:mb-3 lg:mb-4 flex w-full">
      <div className="p-2 sm:p-3 md:p-4 h-full w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[160px_1fr] xl:grid-cols-[200px_1fr] 
                       gap-2 sm:gap-3 md:gap-4 h-full items-start">
          {/* Profile Image */}
          <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2 mx-auto sm:mx-0 self-start mb-2 sm:mb-0">
            <div className="flex items-center justify-center sm:justify-start group">
              <Image
                src="/zoro.jpg"
                alt="Profile Picture"
                width={250}
                height={250}
                priority
                className="w-[5.2rem] h-[5.2rem] sm:w-[6.8rem] sm:h-[6.8rem] md:w-[7.8rem] md:h-[7.8rem] lg:w-[8.8rem] lg:h-[8.8rem] xl:w-[9.8rem] xl:h-[9.8rem] object-cover rounded-lg 
                  shadow-lg transform transition-all duration-300 ease-out
                  hover:scale-105 hover:rotate-2 group-hover:shadow-emerald-500/50 
                  group-hover:shadow-lg animate-border 
                  bg-gradient-to-r from-emerald-500/30 to-emerald-500/0
                  bg-[length:400%_400%] p-0.5"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="self-start w-full max-w-full overflow-hidden mt-0 sm:mt-0">
            {/* Name Header */}
            <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-bold mb-1 sm:mb-2 
              pl-0 sm:pl-0.5 md:pl-1 lg:pl-2 mt-0 sm:mt-0.5 md:mt-1 overflow-hidden text-ellipsis
              text-center sm:text-left
              hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent transition-all 
              duration-300 ease-out cursor-default hover:scale-105 transform-gpu">
              Hi, I&apos;m Aniket Kundu
            </h1>

            {/* Bio Description */}
            <p className="text-[10px] sm:text-2xs md:text-sm lg:text-base xl:text-base leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed font-inter 
              text-gray-300 mb-2 sm:mb-3 md:mb-4 tracking-wide hyphens-auto max-w-prose
              text-center sm:text-left
              hover:text-emerald-300 transition-all duration-300 ease-out
              drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
              hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              --a creative coder, storyteller, and problem solver I&apos;m always exploring
              new ideas and pushing the limits of technology. Let&apos;s create something
              amazing together!
            </p>

            {/* System Information */}
            <div className="font-jetbrains space-y-0 flex flex-col items-start">
              <div className="min-w-0 overflow-hidden max-w-[calc(100vw-5rem)] sm:max-w-[calc(100vw-8rem)] md:max-w-[calc(100vw-10rem)] lg:max-w-[calc(100vw-12rem)]">
                {systemInfo.map(({ icon, version }, index) => (
                  <p key={index} 
                    className="text-[0.5rem] sm:text-[0.65rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] text-emerald-600 
                      text-ellipsis tracking-wider cursor-default whitespace-nowrap overflow-hidden
                      text-left ml-6 sm:ml-0 sm:px-2
                      drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]
                      hover:bg-gradient-to-r hover:from-emerald-100 hover:to-emerald-200
                      transition-all duration-300 ease-out
                      hover:translate-x-2 transform-gpu">
                    {icon} -- {version}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
