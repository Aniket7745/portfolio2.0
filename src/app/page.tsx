"use client";
import React from "react";
import Intro from "../components/Intro";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import DigitalClock from "@/components/TypeWriter";


export default function Home() {
  return (
    <main className="min-h-screen p-1 sm:p-2 md:p-3 flex flex-col gap-1 sm:gap-2 md:gap-3 overflow-x-hidden">
      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-1 sm:gap-2 md:gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 w-full lg:w-1/2">
          <div className="border border-emerald-950/40 flex h-auto md:h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/70 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-emerald-950/20">
            <Intro />
          </div>
          <div className="border border-emerald-950/40 h-auto backdrop-blur-lg bg-black/70 rounded-xl overflow-visible shadow-md shadow-emerald-950/20">
            <Skills />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-3 w-full lg:w-1/2">
          <div className="border border-emerald-950/40 flex flex-col items-center justify-center h-auto min-h-28 sm:min-h-36 md:min-h-48 backdrop-blur-lg bg-black/70 rounded-xl shadow-md shadow-emerald-950/20">
            <DigitalClock />
          </div>
          
          {/* Projects & Terminal - Side by side on desktop */}
          <div className="hidden lg:flex gap-1 sm:gap-2 md:gap-3">
            <div className="border border-emerald-950/40 flex items-center justify-center h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/70 rounded-xl w-[58%] overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-emerald-950/20">
              <Projects />
            </div>
            <div className="border border-emerald-950/40 flex items-center justify-center h-[45vh] lg:h-[50vh] backdrop-blur-lg bg-black/70 rounded-xl w-[42%] overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-emerald-950/20">
              <Terminal />
            </div>
          </div>
          
          {/* Projects & Terminal - Stacked on mobile and small laptops */}
          <div className="flex flex-col lg:hidden gap-1 sm:gap-2 md:gap-3">
            <div className="border border-emerald-950/40 flex items-center justify-center h-[40vh] sm:h-[45vh] backdrop-blur-lg bg-black/70 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-emerald-950/20">
              <Projects />
            </div>
            <div className="border border-emerald-950/40 flex items-center justify-center h-[40vh] sm:h-[45vh] backdrop-blur-lg bg-black/70 rounded-xl overflow-auto no-scrollbar hide-scrollbar shadow-md shadow-emerald-950/20">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
