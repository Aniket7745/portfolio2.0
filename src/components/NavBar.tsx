"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdWallpaper } from "react-icons/md";
import { VscTerminalLinux } from "react-icons/vsc";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const backgrounds = [
  "/backgrounds/bg1.png",
  "/backgrounds/bg2.png",
];

export default function NavBar() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [currentBg, setCurrentBg] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Shared link style function
  const getLinkStyle = (path: string) => {
    return `${pathname === path 
      ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' 
      : 'hover:text-emerald-400'
    }`;
  };

  return (
    <>
      <nav className="flex w-[98%] mx-auto backdrop-blur-lg bg-black/30 border border-gray-500 text-white py-2 px-3 sm:px-6 rounded-lg items-center">
        {/* Left: System info - hidden on smallest screens */}
        <div className="hidden sm:flex items-center gap-4">
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

        {/* Mobile menu button - visible only on mobile */}
        <div className="sm:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-emerald-400"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Center: Time - visible on all screens */}
        <div className="flex-1 flex justify-center items-center">
          <span className="text-sm font-medium font-jetbrains">{time}</span>
        </div>

        {/* Right: Navigation and Social Icons - hidden on mobile */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/about"
            className={`text-gray-300 transition-all text-sm font-jetbrains ${getLinkStyle('/about')}`}
          >
            about
          </Link>
          <Link
            href="/projects"
            className={`text-gray-300 transition-all text-sm font-jetbrains ${getLinkStyle('/projects')}`}
          >
            projects
          </Link>
          <Link
            href="/contact"
            className={`text-gray-300 transition-all text-sm font-jetbrains ${getLinkStyle('/contact')}`}
          >
            contact
          </Link>
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
        
        {/* Small screen social icons - simplified subset on mobile */}
        <div className="sm:hidden flex items-center gap-3">
          <a 
            href="https://github.com/Aniket7745" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors"
          >
            <FaGithub className="text-lg" />
          </a>
          <button 
            onClick={handleRefresh}
            className="text-sm hover:text-emerald-400 transition-colors cursor-pointer"
            aria-label="Refresh page"
          >
            ⏻
          </button>
        </div>
      </nav>

      {/* Mobile menu - slide down panel */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-[98%] mx-auto backdrop-blur-lg bg-black/80 border border-gray-500 text-white mt-1 rounded-lg overflow-hidden transition-all">
          <div className="flex flex-col py-4 px-6">
            <Link
              href="/about"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/about')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              about
            </Link>
            <Link
              href="/projects"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/projects')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              href="/contact"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/contact')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              contact
            </Link>
            
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-700">
              <a 
                href="mailto:your.kunduaniket440@gmail.com"
                className="text-gray-300 hover:text-[#EA4335] transition-colors"
              >
                <MdEmail className="text-xl" />
              </a>
              <a 
                href="https://wa.me/8918192024"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#25D366] transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <button
                onClick={handleBackgroundChange}
                className="flex items-center gap-1 ml-auto px-2 py-1 rounded-md 
                  hover:bg-gray-700/50 transition-colors text-gray-400 hover:text-emerald-400"
              >
                <MdWallpaper className="text-lg" />
                <span className="text-xs font-jetbrains">Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
