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
      className="w-full h-full font-jetbrains overflow-hidden flex flex-col 
        backdrop-blur-lg bg-black/20 rounded-lg"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Terminal header */}
      <div className="flex items-center p-2 bg-black/30 border-b border-gray-500/50">
        <span className="text-xs text-[#a9b1d6] font-jetbrains opacity-50">kitty</span>
      </div>

      {/* Terminal output */}
      <div 
        ref={terminalRef}
        className="p-6 flex-1 overflow-y-auto text-sm text-gray-200 leading-6"
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
            className="ml-2 bg-transparent flex-1 outline-none text-gray-200 
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