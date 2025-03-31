"use client";
import { useState, useEffect, useRef, JSX } from 'react';
import Image from 'next/image';

type CommandOutput = {
  command: string;
  output: JSX.Element | string;
};

export default function About() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  // Define a reusable ClickableCommand component for better consistency
  const ClickableCommand = ({ command, description }: { command: string, description: string }) => (
    <p className="ml-4 flex items-center gap-1">
      <span>•</span>
      <button 
        onClick={() => runCommand(command)}
        className="text-emerald-400 hover:text-emerald-300 focus:text-emerald-300 
          hover:underline focus:underline transition-colors outline-none 
          focus:ring-1 focus:ring-emerald-500/30 rounded px-1"
        aria-label={`Run ${command} command`}
      >
        {command}
      </button>
      <span className="text-gray-300">- {description}</span>
    </p>
  );

  // Initialize with the overview command
    useEffect(() => {
        const initialCommand = 'overview';
        const runInitialCommand = () => {
            runCommand(initialCommand);
        };

        runInitialCommand(); // Run it once

    }, []); // Removed dependencies array

  const renderPrompt = () => (
    <span className="text-[#9ece6a] font-bold text-sm sm:text-base whitespace-nowrap">
      <span className="text-[#7aa2f7]">aniket</span>
      <span className="text-[#a9b1d6]">@</span>
      <span className="text-[#7aa2f7]">fedora</span>
      <span className="text-[#a9b1d6] hidden sm:inline"> ~/about </span>
      <span className="text-[#9ece6a]">❯</span>
    </span>
  );

  const commands: { [key: string]: () => JSX.Element | string } = {
    overview: () => (
      <div className="text-gray-300 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="relative group mx-auto sm:mx-0">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-emerald-700 
              rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative">
              <Image
                src="/zoro.jpg"
                alt="Profile Picture"
                width={120}
                height={120}
                className="rounded-lg object-cover border border-emerald-500/20"
              />
            </div>
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <p className="text-emerald-400 font-bold text-xl mb-2">System Information</p>
            <p className="text-gray-300">Name: <span className="text-emerald-400">Aniket Kundu</span></p>
            <p className="text-gray-300">Role: <span className="text-emerald-400">Full Stack Developer</span></p>
            <p className="text-gray-300">Status: <span className="text-emerald-400">Available for collaboration</span></p>
            <p className="text-gray-300">Location: <span className="text-emerald-400">Kolkata, India</span></p>
          </div>
        </div>
        <div className="border-t border-gray-500/50 pt-4 mt-4">
          <p className="text-emerald-400 mb-2">Quick Start:</p>
          <p>Click or type these commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <ClickableCommand command="about" description="Personal introduction" />
            <ClickableCommand command="skills" description="Technical abilities" />
            <ClickableCommand command="contact" description="How to reach me" />
            <ClickableCommand command="neofetch" description="System details" />
          </div>
        </div>
      </div>
    ),
    help: () => (
      <div className="text-gray-300">
        <p>Available commands:</p>
        <div className="ml-4 mt-2 space-y-1">
          {Object.keys(commands).map((cmd) => (
            <p key={cmd} className="flex items-center gap-2">
              <button 
                onClick={() => runCommand(cmd)}
                className="text-emerald-400 hover:underline"
              >
                {cmd}
              </button>
              <span>-</span>
              <span className="text-gray-400">{cmd === 'overview' ? 'System overview' : 
                cmd === 'about' ? 'Personal intro' : 
                cmd === 'skills' ? 'Technical skills' : 
                cmd === 'contact' ? 'Contact info' : 
                cmd === 'neofetch' ? 'System details' : 
                cmd === 'clear' ? 'Clear terminal' : 
                cmd === 'help' ? 'Show this help' : ''}
              </span>
            </p>
          ))}
        </div>
      </div>
    ),
    about: () => (
      <div className="text-gray-300 ml-2 sm:ml-4 mt-2 text-sm sm:text-base">
        <p>I&apos;m a software developer with a passion for creating elegant solutions to complex problems. 
        My journey in tech started with web development, and I&apos;ve since expanded into full-stack 
        development and systems programming.</p>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('skills')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              skills
            </button>
            <button 
              onClick={() => runCommand('neofetch')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              neofetch
            </button>
          </div>
        </div>
      </div>
    ),
    neofetch: () => (
      <div className="ml-2 sm:ml-4 mt-2 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-gray-300 text-sm sm:text-base">
          <div className="space-y-1">
            <p>OS: <span className="text-emerald-400">Fedora Linux</span></p>
            <p>Shell: <span className="text-emerald-400">Fish</span></p>
            <p>DE: <span className="text-emerald-400">Hyprland</span></p>
            <p>Editor: <span className="text-emerald-400">LazyVim</span></p>
          </div>
          <div className="space-y-1">
            <p>Languages: <span className="text-emerald-400">TypeScript, Go, JavaScript</span></p>
            <p>Frontend: <span className="text-emerald-400">React, Next.js, TailwindCSS</span></p>
            <p>Backend: <span className="text-emerald-400">Node.js, Express</span></p>
            <p>Tools: <span className="text-emerald-400">Git, Docker, Linux</span></p>
          </div>
        </div>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('about')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              about
            </button>
            <button 
              onClick={() => runCommand('skills')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              skills
            </button>
          </div>
        </div>
      </div>
    ),
    skills: () => (
      <div className="ml-2 sm:ml-4 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-300 text-sm sm:text-base">
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> TypeScript/JavaScript
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> React/Next.js
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> Node.js/Express
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> Go
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> Linux/DevOps
          </span>
          <span className="flex items-center gap-1">
            <span className="text-emerald-400">▶</span> UI/UX Design
          </span>
        </div>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('about')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              about
            </button>
            <button 
              onClick={() => runCommand('neofetch')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              neofetch
            </button>
          </div>
        </div>
      </div>
    ),
    contact: () => (
      <div className="text-gray-300 ml-2 sm:ml-4 mt-2 space-y-1 text-sm sm:text-base">
        <p>Email: <a href="mailto:your.email@example.com" className="text-emerald-400 hover:underline">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/yourusername</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">linkedin.com/in/yourusername</a></p>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('about')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              about
            </button>
            <button 
              onClick={() => runCommand('overview')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              overview
            </button>
          </div>
        </div>
      </div>
    ),
    clear: () => {
      setHistory([]);
      return '';
    }
  };

  // Shared command execution function
  const runCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    const output = commands[trimmedCmd as keyof typeof commands]
      ? commands[trimmedCmd as keyof typeof commands]()
      : `Command not found: ${trimmedCmd}`;

    setHistory(prev => [...prev, { command: cmd, output }]);
    setInput('');
    
    // Focus the input after command execution
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(input);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus input on desktop
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
      inputRef.current?.focus();
    }
  }, []);

  const handleTerminalTap = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  };

  return (
    <main className="min-h-screen px-3 sm:p-4 flex flex-col gap-4 mt-16 sm:mt-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="border border-gray-500/50 backdrop-blur-lg bg-black/40 rounded-lg overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between p-2 bg-black/50 border-b border-gray-500/50">
            <span className="text-xs text-[#a9b1d6] font-mono opacity-50">kitty</span>
            
            {/* Mobile keyboard toggle button */}
            <button 
              onClick={handleTerminalTap}
              className="sm:hidden text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 
                border border-emerald-500/30 active:bg-emerald-500/30"
            >
              {isFocused ? 'Keyboard Active' : 'Tap to Type'}
            </button>
          </div>

          {/* Terminal Content */}
          <div 
            ref={terminalRef}
            className="p-3 sm:p-6 font-mono space-y-4 h-[70vh] sm:h-[60vh] overflow-y-auto bg-black/30 text-sm sm:text-base"
            onClick={handleTerminalTap}
          >
            {/* Welcome Message */}
            <div className="text-gray-300">
              <p>Welcome to Aniket&apos;s terminal. Type or click a command to continue.</p>
              <div className="text-[#a9b1d6] opacity-50 overflow-x-auto no-scrollbar">
                ────────────────────────────────────────
              </div>
            </div>

            {/* Command History */}
            {history.map((entry, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-center text-[#9ece6a] overflow-x-auto no-scrollbar">
                  {renderPrompt()}
                  <span className="ml-2 whitespace-nowrap">{entry.command}</span>
                </div>
                <div className="overflow-x-auto">{entry.output}</div>
              </div>
            ))}

            {/* Current Input */}
            <div className="flex items-center overflow-x-auto no-scrollbar">
              {renderPrompt()}
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="ml-2 bg-transparent flex-1 outline-none text-gray-200 
                  caret-[#9ece6a] focus:outline-none selection:bg-black/30
                  text-sm sm:text-base min-w-0"
                spellCheck="false"
                autoComplete="off"
                aria-label="Terminal input"
                placeholder="Type a command..."
              />
            </div>
            
            {/* Mobile keyboard hint */}
            <div className="sm:hidden text-xs text-center text-gray-500 pb-2 pt-4">
              {isFocused ? 
                "Type a command and press Enter" : 
                "Tap anywhere to activate keyboard or click a command"}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

