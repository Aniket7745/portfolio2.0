"use client";
import { useState, KeyboardEvent, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to Kitty Terminal! Type "help" for available commands.'
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: () => 'Available commands: about, skills, projects, clear, neofetch',
    clear: () => {
      setHistory([]);
      return '';
    },
    about: () => 'Hi, I\'m Aniket. A software developer passionate about Linux and open source.',
    skills: () => `Languages: TypeScript, JavaScript, Go
Frameworks: React, Next.js, Node.js
Tools: Linux, Neovim, Docker`,
    neofetch: () => `OS: Fedora Linux x86_64
Shell: fish
DE: Hyprland
Terminal: Kitty
Editor: LazyVim
CPU: AMD Ryzen 7
Memory: 16GB RAM`,
    projects: () => 'Check out my projects section!'
  };

  const renderPrompt = () => (
    <span className="text-2xs xs:text-xs sm:text-sm text-[#9ece6a] font-bold whitespace-nowrap">
      <span className="text-[#9ece6a]">❯</span>
    </span>
  );

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (!trimmedCmd) return;

    const output = commands[trimmedCmd as keyof typeof commands]
      ? commands[trimmedCmd as keyof typeof commands]()
      : `Command not found: ${trimmedCmd}`;

    setHistory(prev => [...prev, `${renderPrompt()} ${cmd}`, output]);
    setCurrentCommand('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(currentCommand);
    }
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Auto-focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div 
      className="w-full h-full max-h-[80vh] md:max-h-full font-jetbrains overflow-hidden flex flex-col 
        backdrop-blur-lg bg-black/20 rounded-lg border border-gray-500/30"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex items-center p-1 xs:p-1.5 sm:p-2 bg-black/30 border-b border-gray-500/50">
        <span className="text-3xs xs:text-2xs sm:text-xs text-[#a9b1d6] font-jetbrains opacity-70">kitty</span>
      </div>

      {/* Terminal output */}
      <div 
        ref={terminalRef}
        className="p-2 xs:p-3 sm:p-4 lg:p-5 flex-1 overflow-y-auto no-scrollbar hide-scrollbar
          text-2xs xs:text-xs sm:text-sm text-gray-200 leading-4 xs:leading-5 sm:leading-6"
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap break-words mb-0.5 xs:mb-1">
            {line}
          </div>
        ))}
        {/* Current input line */}
        <div className="flex items-center">
          {renderPrompt()}
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-1 xs:ml-1.5 sm:ml-2 bg-transparent flex-1 outline-none 
              text-2xs xs:text-xs sm:text-sm text-gray-200 
              caret-[#9ece6a] focus:outline-none selection:bg-black/30"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;