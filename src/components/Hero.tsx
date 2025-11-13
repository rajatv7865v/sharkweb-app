"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const sentences = [
    "Transforms Businesses",
    "Drives Innovation",
    "Scales Your Growth",
    "Delivers Excellence"
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentSentence = sentences[currentSentenceIndex];
    
    if (!isDeleting && displayText === currentSentence) {
      // Wait 3 seconds before starting to delete
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      // Move to next sentence
      setIsDeleting(false);
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      setTypingSpeed(100);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentSentence.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentSentence.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSentenceIndex, sentences, typingSpeed]);

  return (
    <section className="relative bg-white h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="AI and software technology background"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/80 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-header-text mb-4 md:mb-6 leading-tight">
            Build Software That
            <br />
            <span className="text-header-primary italic font-normal inline-block min-h-[1.2em]">
              {displayText}
              <span className="typewriter-cursor ml-1 text-header-primary">|</span>
            </span>
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-header-text-light mb-6 md:mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Custom software development, cloud solutions, and digital transformation services that scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-10">
            <a
              href="/contact"
              className="bg-header-accent text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </a>
            <a
              href="/case-studies"
              className="border-2 border-header-text text-header-text px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center bg-white/80 backdrop-blur-sm"
            >
              View Case Studies
            </a>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50">
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">⚡</div>
              <h3 className="font-semibold text-header-text mb-1 md:mb-2 text-sm md:text-base">Fast Delivery</h3>
              <p className="text-xs md:text-sm text-header-text-light">Agile development process for rapid results</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50">
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">🔒</div>
              <h3 className="font-semibold text-header-text mb-1 md:mb-2 text-sm md:text-base">Secure & Scalable</h3>
              <p className="text-xs md:text-sm text-header-text-light">Enterprise-grade security and architecture</p>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200/50">
              <div className="text-2xl md:text-3xl mb-2 md:mb-3">🎯</div>
              <h3 className="font-semibold text-header-text mb-1 md:mb-2 text-sm md:text-base">Result-Driven</h3>
              <p className="text-xs md:text-sm text-header-text-light">Measurable outcomes that drive growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

