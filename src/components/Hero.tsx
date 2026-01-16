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
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="AI and software technology background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-header-primary/90 via-header-primary/80 to-header-secondary/85 z-10"></div>
        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-header-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-header-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-lg">
            <span className="w-2 h-2 bg-header-accent rounded-full animate-pulse"></span>
            <span>Transform Your Business with Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-lg">
            Build Software That
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-white via-header-accent to-white bg-clip-text text-transparent font-bold inline-block min-h-[1.2em]">
                {displayText}
              </span>
              <span className="typewriter-cursor ml-2 text-white font-normal">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            Custom software development, cloud solutions, and digital transformation services that scale with your business.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center mb-16 md:mb-20">
            <a
              href="/contact"
              className="group relative bg-white text-header-primary px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white/95 transition-all duration-300 inline-flex items-center gap-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-105 transform overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/case-studies"
              className="group border-2 border-white/50 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-white/10 hover:border-white transition-all duration-300 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl"
            >
              <span>View Case Studies</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-header-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-3xl">⚡</div>
              </div>
              <h3 className="font-bold text-header-text mb-2 text-lg">Fast Delivery</h3>
              <p className="text-sm text-header-text-light leading-relaxed">Agile development process for rapid results</p>
            </div>
            <div className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-header-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-3xl">🔒</div>
              </div>
              <h3 className="font-bold text-header-text mb-2 text-lg">Secure & Scalable</h3>
              <p className="text-sm text-header-text-light leading-relaxed">Enterprise-grade security and architecture</p>
            </div>
            <div className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 hover:border-header-accent/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="text-3xl">🎯</div>
              </div>
              <h3 className="font-bold text-header-text mb-2 text-lg">Result-Driven</h3>
              <p className="text-sm text-header-text-light leading-relaxed">Measurable outcomes that drive growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

