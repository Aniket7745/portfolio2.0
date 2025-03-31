"use client";
import { useState, useRef, useEffect, JSX } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

type CommandOutput = {
  command: string;
  output: JSX.Element | string;
};

export default function Contact() {
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

  // Initialize with the contact command
  useEffect(() => {
    if (history.length === 0) {
      runCommand('contact');
    }
  }, []);

  const renderPrompt = () => (
    <span className="text-[#9ece6a] font-bold text-sm sm:text-base whitespace-nowrap">
      <span className="text-[#7aa2f7]">aniket</span>
      <span className="text-[#a9b1d6]">@</span>
      <span className="text-[#7aa2f7]">fedora</span>
      <span className="text-[#a9b1d6] hidden sm:inline"> ~/contact </span>
      <span className="text-[#9ece6a]">❯</span>
    </span>
  );

  const commands = {
    contact: () => (
      <div className="text-gray-300 space-y-4">
        <div className="border-t border-gray-500/50 pt-4 mt-4">
          <p className="text-emerald-400 mb-2">Contact Information:</p>
          <div className="space-y-3">
            <a 
              href="mailto:kunduaniket440@gmail.com" 
              className="flex items-center gap-2 text-gray-300 hover:text-[#EA4335] transition-colors p-1.5 rounded-md hover:bg-black/40 active:bg-black/50"
              aria-label="Email Aniket"
            >
              <MdEmail className="text-xl text-[#EA4335]" />
              <span className="text-sm sm:text-base">kunduaniket440@gmail.com</span>
            </a>
            <a 
              href="https://github.com/Aniket7745" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors p-1.5 rounded-md hover:bg-black/40 active:bg-black/50"
              aria-label="GitHub profile"
            >
              <FaGithub className="text-xl text-white" />
              <span className="text-sm sm:text-base">github.com/Aniket7745</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/your-linkedin" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#0A66C2] transition-colors p-1.5 rounded-md hover:bg-black/40 active:bg-black/50"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="text-xl text-[#0A66C2]" />
              <span className="text-sm sm:text-base">linkedin.com/in/your-linkedin</span>
            </a>
            <a 
              href="https://wa.me/8918192024" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-[#25D366] transition-colors p-1.5 rounded-md hover:bg-black/40 active:bg-black/50"
              aria-label="WhatsApp contact"
            >
              <FaWhatsapp className="text-xl text-[#25D366]" />
              <span className="text-sm sm:text-base">+91 8918192024</span>
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p>Click or type these commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            <ClickableCommand command="email" description="Send me an email" />
            <ClickableCommand command="social" description="View social links" />
            <ClickableCommand command="clear" description="Clear terminal" />
            <ClickableCommand command="help" description="Show all commands" />
          </div>
        </div>
      </div>
    ),
    email: () => (
      <div className="text-gray-300 ml-2 sm:ml-4 mt-2 text-sm sm:text-base">
        <p>You can reach me at: <a href="mailto:kunduaniket440@gmail.com" className="text-emerald-400 hover:underline">kunduaniket440@gmail.com</a></p>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('contact')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              contact
            </button>
            <button 
              onClick={() => runCommand('social')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              social
            </button>
          </div>
        </div>
      </div>
    ),
    social: () => (
      <div className="text-gray-300 ml-2 sm:ml-4 mt-2 space-y-2 text-sm sm:text-base">
        <p>Find me on:</p>
        <div className="space-y-2 ml-2">
          <p className="flex items-center gap-2">
            <FaGithub className="text-lg" />
            <a href="https://github.com/Aniket7745" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/Aniket7745</a>
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin className="text-lg text-[#0A66C2]" />
            <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">linkedin.com/in/your-linkedin</a>
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-lg text-[#25D366]" />
            <a href="https://wa.me/8918192024" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">+91 8918192024</a>
          </p>
        </div>
        <div className="mt-3">
          <p>More commands:</p>
          <div className="flex flex-wrap gap-2 mt-1">
            <button 
              onClick={() => runCommand('contact')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              contact
            </button>
            <button 
              onClick={() => runCommand('email')}
              className="text-xs sm:text-sm px-2 py-1 rounded-full bg-emerald-500/10 
                text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20"
            >
              email
            </button>
          </div>
        </div>
      </div>
    ),
    help: () => (
      <div className="text-gray-300 ml-2 sm:ml-4 mt-2 text-sm sm:text-base">
        <p>Available commands:</p>
        <div className="mt-2 space-y-1">
          {Object.keys(commands).map((cmd) => (
            <p key={cmd} className="ml-2 flex items-center gap-2">
              <button 
                onClick={() => runCommand(cmd)}
                className="text-emerald-400 hover:underline"
              >
                {cmd}
              </button>
              <span>-</span>
              <span className="text-gray-400">{cmd === 'contact' ? 'Show contact info' : 
                cmd === 'email' ? 'Email contact' : 
                cmd === 'social' ? 'Social links' : 
                cmd === 'clear' ? 'Clear terminal' : 
                cmd === 'help' ? 'Show this help' : ''}
              </span>
            </p>
          ))}
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
              <p>Contact Information Terminal. Type or click a command to continue.</p>
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