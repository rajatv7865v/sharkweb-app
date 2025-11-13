"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Benefits() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const steps = [
    {
      number: "01",
      title: "Databases & Warehouses",
      description: "Fast data movement with automatic schema migration and security.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "🗄️"
    },
    {
      number: "02",
      title: "APIs & Connectors",
      description: "Build custom connectors with built-in error handling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      icon: "🔌"
    },
    {
      number: "03",
      title: "Files & Spreadsheets",
      description: "Extract data from any format with automatic migration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "📁"
    },
    {
      number: "04",
      title: "SaaS Apps",
      description: "Largest connector library with full customization.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      icon: "☁️"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-header-primary via-header-accent to-header-primary opacity-20">
            <div 
              className="h-full bg-header-accent transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;
              const delay = index * 150;

              return (
                <div
                  key={index}
                  className={`relative group cursor-pointer ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${delay}ms` }}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-center mb-4 relative z-10">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-base transition-all duration-500 ${
                        isActive || isPast
                          ? "bg-gradient-to-br from-header-primary to-header-accent text-white scale-110 shadow-xl ring-4 ring-header-primary/20"
                          : "bg-white text-header-text-light border-2 border-gray-300 shadow-md"
                      }`}
                    >
                      {isActive || isPast ? step.number : step.icon}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-500 shadow-lg">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        isActive ? "scale-110 brightness-110" : "brightness-90"
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                      isActive 
                        ? "from-header-primary/60 via-header-primary/20 to-transparent" 
                        : "from-black/40 via-black/20 to-transparent"
                    }`} />
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`w-10 h-10 rounded-lg backdrop-blur-sm flex items-center justify-center text-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-white/90 shadow-lg scale-110" 
                          : "bg-black/30 text-white"
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3
                      className={`font-bold text-header-text mb-2 transition-all duration-300 ${
                        isActive ? "text-header-primary text-lg" : "text-base"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-header-text-light leading-relaxed transition-all duration-300 ${
                        isActive ? "text-sm" : "text-xs"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator (Mobile) */}
                  {isActive && (
                    <div className="lg:hidden absolute -left-2 top-8 w-1 h-full bg-gradient-to-b from-header-primary to-header-accent rounded-full" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Step Navigation Dots (Mobile) */}
          <div className="lg:hidden flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-header-primary w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="mt-20 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a href="#" className="flex items-center gap-3 text-header-text hover:text-header-primary">
              <span className="text-lg font-semibold">Join</span>
              <span className="text-2xl font-bold">4,500+</span>
              <span className="text-lg">on Slack</span>
            </a>
            <span className="text-header-gray-dark">|</span>
            <a href="#" className="flex items-center gap-3 text-header-text hover:text-header-primary">
              <span className="text-lg font-semibold">Chat and learn from other users</span>
            </a>
            <span className="text-header-gray-dark">|</span>
            <a href="#" className="flex items-center gap-3 text-header-text hover:text-header-primary">
              <span className="text-lg font-semibold">Contribute</span>
              <span className="text-lg">on GitHub</span>
            </a>
            <span className="text-header-gray-dark">|</span>
            <a href="#" className="flex items-center gap-3 text-header-text hover:text-header-primary">
              <span className="text-lg">View code and issue tracker</span>
            </a>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4 italic">The latest in Sharkwave & data engineering</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-header-gray rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-sm text-header-text-light mb-2">Community</div>
              <h3 className="text-xl font-bold text-header-text mb-2">Data consultants, are you already productizing your services?</h3>
            </div>
            <div className="bg-header-gray rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-sm text-header-text-light mb-2">Product</div>
              <h3 className="text-xl font-bold text-header-text mb-2">We're bringing powerful data engineering capabilities to software teams with Arch</h3>
            </div>
            <div className="bg-header-gray rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-sm text-header-text-light mb-2">Data and Analytics</div>
              <h3 className="text-xl font-bold text-header-text mb-2">Sharkwave by Sharkwave: September 2023 Edition</h3>
            </div>
          </div>
          <div className="text-center mt-8">
            <a href="#" className="text-header-primary hover:text-header-primary-dark font-medium inline-flex items-center gap-2">
              Get more data engineering insights
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

