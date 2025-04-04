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
      <nav className="w-[98%] mx-auto backdrop-blur-lg bg-black/70 border border-emerald-950/40 
        text-white py-2 px-3 sm:px-6 rounded-lg items-center flex justify-between shadow-md shadow-emerald-950/20">
        
        {/* Left Section: Logo and Terminal Icon */}
        <div className="flex items-center gap-3">
          {/* Terminal Icon - On all screen sizes */}
          <div className="flex items-center">
            <VscTerminalLinux className="text-lg text-emerald-400 drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]" />
          </div>

          {/* Mobile menu button - visible only on mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="sm:hidden text-emerald-400 hover:text-emerald-300 drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>

          {/* Current Time */}
          <div className="hidden xs:flex items-center">
            <span className="text-sm font-medium font-jetbrains text-emerald-400 drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]">{time}</span>
          </div>
        </div>

        {/* Center Section: Navigation Links (Desktop Only) */}
        <div className="hidden sm:flex items-center justify-center gap-6">
          <Link
            href="/"
            className={`text-gray-300 transition-all text-sm font-jetbrains ${getLinkStyle('/')}`}
          >
            home
          </Link>
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
        </div>

        {/* Right Section: Actions and Social Icons */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Theme Button - Hidden on smallest screens */}
          <button
            onClick={handleBackgroundChange}
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-md 
              hover:bg-black/80 transition-colors text-emerald-400 hover:text-emerald-300 border border-transparent hover:border-emerald-900/40"
          >
            <MdWallpaper className="text-lg drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]" />
            <span className="text-xs font-jetbrains">Theme</span>
          </button>

          {/* Social Icons - Reduced on mobile */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Aniket7745" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
            >
              <FaGithub className="text-lg" />
            </a>
            <a 
              href="mailto:kunduaniket440@gmail.com"
              className="hidden sm:block text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
            >
              <MdEmail className="text-lg" />
            </a>
            <a 
              href="https://wa.me/8918192024"
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:block text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
            >
              <FaWhatsapp className="text-lg" />
            </a>
            <button 
              onClick={handleRefresh}
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
              aria-label="Refresh page"
            >
              ⏻
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden w-[98%] mx-auto backdrop-blur-lg bg-black/80 border border-emerald-950/40 
          text-white mt-1 rounded-lg overflow-hidden transition-all shadow-md shadow-emerald-950/20">
          
          {/* Navigation Links */}
          <div className="flex flex-col py-4 px-6">
            <Link
              href="/"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              home
            </Link>
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
              href="/resume"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/resume')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              resume
            </Link>
            <Link
              href="/contact"
              className={`text-gray-300 py-3 transition-all text-base font-jetbrains ${getLinkStyle('/contact')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              contact
            </Link>
            
            {/* Mobile Footer */}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-emerald-900/40">
              <a 
                href="mailto:kunduaniket440@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
              >
                <MdEmail className="text-xl" />
              </a>
              <a 
                href="https://wa.me/8918192024"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <button
                onClick={handleBackgroundChange}
                className="flex items-center gap-1 ml-auto px-2 py-1 rounded-md 
                  hover:bg-black/90 transition-colors text-emerald-400 hover:text-emerald-300 border border-transparent hover:border-emerald-900/40"
              >
                <MdWallpaper className="text-lg drop-shadow-[0_0_3px_rgba(52,211,153,0.5)]" />
                <span className="text-xs font-jetbrains">Theme</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
