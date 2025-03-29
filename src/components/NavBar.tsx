"use client";
import { useEffect, useState } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdWallpaper } from "react-icons/md";
import { VscTerminalLinux } from "react-icons/vsc";

const backgrounds = [
  "/backgrounds/bg1.png",
  "/backgrounds/bg2.png",
];

export default function NavBar() {
  const [time, setTime] = useState("");
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    // Time update logic
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], { 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit" 
      });
      setTime(formattedTime);
    };

    updateTime(); 
    const interval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleBackgroundChange = () => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[currentBg]})`;
  };

  return (
    <nav className="flex w-[98%] mx-auto backdrop-blur-lg bg-black/30 border border-gray-500 text-white py-2 px-6 rounded-lg">
      {/* Left: System info */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <VscTerminalLinux className="text-lg text-gray-400" />
        </div>
        <button
          onClick={handleBackgroundChange}
          className="flex items-center gap-1 px-2 py-1 rounded-md 
            hover:bg-gray-700/50 transition-colors text-gray-400 hover:text-emerald-400"
        >
          <MdWallpaper className="text-lg" />
          <span className="text-xs font-jetbrains">Theme</span>
        </button>
      </div>

      {/* Center: Time */}
      <div className="flex-1 flex justify-center items-center">
        <span className="text-sm font-medium font-jetbrains">{time}</span>
      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-6">
        <a 
          href="https://github.com/Aniket7745" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-colors"
        >
          <FaGithub className="text-lg" />
        </a>
        <a 
          href="mailto:your.kunduaniket440@gmail.com"
          className="text-gray-300 hover:text-[#EA4335] transition-colors"
        >
          <MdEmail className="text-lg" />
        </a>
        <a 
          href="https://wa.me/8918192024"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#25D366] transition-colors"
        >
          <FaWhatsapp className="text-lg" />
        </a>
        <button 
          onClick={handleRefresh}
          className="text-sm ml-2 hover:text-emerald-400 transition-colors cursor-pointer"
          aria-label="Refresh page"
        >
          ⏻
        </button>
      </div>
    </nav>
  );
}
