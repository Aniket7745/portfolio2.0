"use client";
import { useState, KeyboardEvent, useRef, useEffect } from 'react';

const Terminal = () => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to Kitty Terminal! Type "help" for available commands.',
    '───────────────────────────────────────────────────'
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
    <span className="text-[#9ece6a] font-bold">
      <span className="text-[#7aa2f7]">aniket</span>
      <span className="text-[#a9b1d6]">@</span>
      <span className="text-[#7aa2f7]">fedora</span>
      <span className="text-[#a9b1d6]"> ~/portfolio </span>
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
      className="w-full h-full font-jetbrains p-2 overflow-hidden flex flex-col 
        bg-[#1a1b26] rounded-lg border border-[#24283b] shadow-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex items-center gap-2 p-2 bg-[#24283b] rounded-t-lg mb-2">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f7768e] hover:opacity-75 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#e0af68] hover:opacity-75 transition-opacity" />
          <div className="w-3 h-3 rounded-full bg-[#9ece6a] hover:opacity-75 transition-opacity" />
        </div>
        <span className="text-[#a9b1d6] text-xs ml-2 opacity-50">kitty</span>
      </div>

      {/* Terminal output */}
      <div 
        ref={terminalRef}
        className="flex-1 overflow-y-auto mb-2 text-sm text-[#a9b1d6] px-2 leading-6"
      >
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
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
            className="ml-2 bg-transparent flex-1 outline-none text-[#a9b1d6] 
              caret-[#9ece6a] focus:outline-none selection:bg-[#24283b]"
            spellCheck="false"
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;