"use client";
import { ChevronUpCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

const ScrollUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = (): void => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-2 rounded-full shadow-lg cursor-pointer hover:text-[#DAD8FF] transition-colors duration-300 z-50"
      aria-label="Scroll to top"
    >
      <ChevronUpCircle className="w-8 h-8" />
    </button>
  );
};

export default ScrollUp;
