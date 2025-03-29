"use client";
import React from "react";
import Intro from "../components/Intro";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import TypeWriter from "@/components/TypeWriter";


export default function Home() {
  return (
    <main className="min-h-screen p-4 flex flex-col gap-4">
      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="border border-gray-500/50 flex h-auto md:h-[50vh] backdrop-blur-lg bg-black/20 rounded-lg">
            <Intro />
          </div>
          <div className="border border-gray-500/50 h-auto backdrop-blur-lg bg-black/20 rounded-lg">
            <Skills />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="border border-gray-500/50 flex flex-col items-center justify-center h-48 backdrop-blur-lg bg-black/20 rounded-lg">
            <TypeWriter  />
          </div>
          {/* Projects & Terminal - Side by side on desktop */}
          <div className="hidden md:flex gap-4">
            <div className="border border-gray-500/50 flex items-center justify-center h-[50vh] backdrop-blur-lg bg-black/20 rounded-lg w-[60%]">
              <Projects />
            </div>
            <div className="border border-gray-500/50 flex items-center justify-center h-[50vh] backdrop-blur-lg bg-black/20 rounded-lg w-[40%]">
              <Terminal />
            </div>
          </div>
          {/* Projects & Terminal - Stacked on mobile */}
          <div className="flex flex-col md:hidden gap-4">
            <div className="border border-gray-500/50 flex items-center justify-center h-auto backdrop-blur-lg bg-black/20 rounded-lg">
              <Projects />
            </div>
            <div className="border border-gray-500/50 flex items-center justify-center h-48 backdrop-blur-lg bg-black/20 rounded-lg">
              <Terminal />
            </div>
          </div>
        </div>
      </div>

     
     
    </main>
  );
}
