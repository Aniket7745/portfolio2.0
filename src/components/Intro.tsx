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

const DecorativeLine = () => (
  <div className="overflow-hidden">
    <p className="text-xs sm:text-sm md:text-base font-jetbrains text-gray-400 
      tracking-wider drop-shadow-[0_0_8px_rgba(107,114,128,0.3)]
      hover:text-emerald-400 transition-colors duration-300">
      ─────────0──────────
    </p>
  </div>
);

const Intro = () => {
  return (
    <section className="mb-1 sm:mb-4 flex w-full">
      <div className="p-2 sm:p-3 md:p-4 h-full w-full">
        <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] lg:grid-cols-[250px_1fr] gap-2 sm:gap-3 md:gap-4 h-full items-start">
          {/* Profile Image */}
          <div className="flex flex-col gap-1 sm:gap-2 mx-auto sm:mx-0 self-start mb-2 sm:mb-0">
            <div className="flex items-center justify-center sm:justify-start group">
              <Image
                src="/zoro.jpg"
                alt="Profile Picture"
                width={250}
                height={250}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 object-cover rounded-lg 
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
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-0 sm:mb-1 
              pl-0 sm:pl-2 md:pl-4 mt-0 sm:mt-1 overflow-hidden text-ellipsis
              hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent transition-all 
              duration-300 ease-out cursor-default hover:scale-105 transform-gpu">
              Hi, I&apos;m Aniket Kundu
            </h1>

            <DecorativeLine />

            {/* Bio Description */}
            <p className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg leading-tight sm:leading-relaxed font-inter 
              text-gray-300 mb-1 sm:mb-2 tracking-wide hyphens-auto
              hover:text-emerald-300 transition-all duration-300 ease-out
              drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
              hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              --a creative coder, storyteller, and problem solver I&apos;m always exploring
              new ideas and pushing the limits of technology. Let&apos;s create something
              amazing together!
            </p>

            {/* System Information */}
            <div className="font-jetbrains space-y-0">
              <div className="min-w-0 overflow-hidden">
                {systemInfo.map(({ icon, version }, index) => (
                  <p key={index} 
                    className="text-3xs sm:text-2xs md:text-xs lg:text-sm xl:text-base text-emerald-600 
                      text-ellipsis tracking-wider cursor-default whitespace-nowrap overflow-hidden
                      drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]
                      hover:bg-gradient-to-r hover:from-emerald-100 hover:to-emerald-200
                      transition-all duration-300 ease-out
                      hover:translate-x-2 transform-gpu">
                    {icon} -- {version}
                  </p>
                ))}
              </div>
            </div>

            {/* Bottom Line */}
            <div className="mt-1 sm:mt-2">
              <DecorativeLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
