"use client";
import React, { useState, useEffect, useMemo } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Use useMemo to memoize the messages array
  const messages = useMemo(() => [
    "Welcome to my portfolio!",
    "I'm a full-stack developer",
    "I love creating things",
    "Let's build something together!"
  ], []); // Empty dependency array since messages won't change

  useEffect(() => {
    const handleTyping = () => {
      const i = messageIndex % messages.length;
      const fullText = messages[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 100 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setMessageIndex(messageIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, messageIndex, typingSpeed, messages]);

  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="text-2xl md:text-3xl font-mono mb-2 text-emerald-400">
        Hello World!
      </div>
      <div className="text-xl md:text-2xl font-mono text-emerald-400">
        I am a{" "}
        <span className="text-lime-400">
          {text}
          <span className="animate-pulse">|</span>
        </span>
      </div>
    </div>
  );
};

export default TypeWriter;