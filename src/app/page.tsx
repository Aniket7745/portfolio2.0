"use client";
import React from "react";
import Intro from "../components/Intro";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import DigitalClock from "@/components/TypeWriter";


export default function Home() {
  return (
    <main className="min-h-screen p-2 sm:p-3 md:p-5 flex flex-col gap-2 sm:gap-3 md:gap-5 overflow-x-hidden">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-3 md:gap-5">
        {/* Left column */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 w-full lg:w-1/2">
          <div className="border border-gray-500/40 flex h-auto md:h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/30 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-black/10">
            <Intro />
          </div>
          <div className="border border-gray-500/40 h-auto backdrop-blur-lg bg-black/30 rounded-xl overflow-visible shadow-md shadow-black/10">
            <Skills />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 w-full lg:w-1/2">
          <div className="border border-gray-500/40 flex flex-col items-center justify-center h-auto min-h-28 sm:min-h-36 md:min-h-52 backdrop-blur-lg bg-black/30 rounded-xl shadow-md shadow-black/10">
            <DigitalClock />
          </div>
          
          {/* Projects & Terminal - Side by side on desktop */}
          <div className="hidden lg:flex gap-2 sm:gap-3 md:gap-5">
            <div className="border border-gray-500/40 flex items-center justify-center h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/30 rounded-xl w-[52%] overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-black/10">
              <Projects />
            </div>
            <div className="border border-gray-500/40 flex items-center justify-center h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/30 rounded-xl w-[48%] overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-black/10">
              <Terminal />
            </div>
          </div>
          
          {/* Projects & Terminal - Stacked on mobile and small laptops */}
          <div className="flex flex-col lg:hidden gap-2 sm:gap-3 md:gap-5">
            <div className="border border-gray-500/40 flex items-center justify-center h-[40vh] sm:h-[45vh] backdrop-blur-lg bg-black/30 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-black/10">
              <Projects />
            </div>
            <div className="border border-gray-500/40 flex items-center justify-center h-[40vh] sm:h-[45vh] backdrop-blur-lg bg-black/30 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-black/10">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
