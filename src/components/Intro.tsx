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
    <p className="text-xs sm:text-base font-jetbrains text-gray-400 
      tracking-wider drop-shadow-[0_0_8px_rgba(107,114,128,0.3)]
      hover:text-emerald-400 transition-colors duration-300">
      ─────────0──────────
    </p>
  </div>
);

const Intro = () => {
  return (
    <section className="mb-0 sm:mb-4 flex w-full">
      <div className="p-1 sm:p-2 md:p-4 h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[250px_1fr] gap-1 sm:gap-2 md:gap-4 h-full items-start">
          {/* Profile Image */}
          <div className="flex flex-col gap-1 sm:gap-2 self-start">
            <div className="flex items-start justify-center md:justify-start group">
              <Image
                src="/zoro.jpg"
                alt="Profile Picture"
                width={250}
                height={250}
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover rounded-lg 
                  shadow-lg transform transition-all duration-300 ease-out
                  hover:scale-105 hover:rotate-2 group-hover:shadow-emerald-500/50 
                  group-hover:shadow-lg animate-border 
                  bg-gradient-to-r from-emerald-500/30 to-emerald-500/0
                  bg-[length:400%_400%] p-0.5"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="self-start w-full max-w-full overflow-hidden">
            {/* Name Header */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-0 sm:mb-1 truncate pl-3 sm:pl-4 md:pl-6 mt-2 sm:mt-3
              hover:bg-gradient-to-r hover:from-emerald-400 hover:to-blue-500
              hover:bg-clip-text hover:text-transparent transition-all 
              duration-300 ease-out cursor-default hover:scale-105 transform-gpu">
              Hi, I&apos;m Aniket Kundu
            </h1>

            <DecorativeLine />

            {/* Bio Description */}
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-tight sm:leading-relaxed font-inter 
              text-gray-300 mb-1 sm:mb-2 tracking-wide break-words pl-1 sm:pl-2
              hover:text-emerald-300 transition-all duration-300 ease-out
              drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]
              hover:drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              --a creative coder, storyteller, and problem solver I&apos;m always exploring
              new ideas and pushing the limits of technology. Let&apos;s create something
              amazing together!
            </p>

            {/* System Information */}
            <div className="font-jetbrains space-y-0 sm:space-y-0.5">
              <div className="min-w-0">
                {systemInfo.map(({ icon, version }, index) => (
                  <p key={index} 
                    className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg text-emerald-600 overflow-hidden 
                      text-ellipsis tracking-wider cursor-default
                      drop-shadow-[0_0_8px_rgba(52,211,153,0.3)]
                      hover:bg-gradient-to-r hover:from-emerald-100 hover:to-emerald-200
                      transition-all duration-300 ease-out truncate
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
