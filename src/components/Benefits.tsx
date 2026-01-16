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
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-header-primary/20">
            <span>🚀</span>
            <span>Our Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            What We Can
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Build For You
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            Explore our comprehensive range of data solutions and services
          </p>
        </div>

        {/* Horizontal Stepper */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-header-primary/20 via-header-secondary/20 to-header-accent/20 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-header-primary via-header-secondary to-header-accent rounded-full transition-all duration-1000 ease-out shadow-lg"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
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
                  <div className="flex items-center justify-center mb-6 relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-lg transition-all duration-500 ${
                        isActive || isPast
                          ? "bg-gradient-to-br from-header-primary via-header-secondary to-header-accent text-white scale-110 shadow-2xl ring-4 ring-header-primary/30"
                          : "bg-white text-header-text-light border-2 border-gray-300 shadow-lg"
                      }`}
                    >
                      {isActive || isPast ? step.number : step.icon}
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-56 rounded-3xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500 shadow-xl border border-gray-200/50">
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
                        ? "from-header-primary/70 via-header-primary/30 to-transparent" 
                        : "from-black/50 via-black/30 to-transparent"
                    }`} />
                    {/* Icon Overlay */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className={`w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center text-2xl transition-all duration-300 border ${
                        isActive 
                          ? "bg-white/95 shadow-xl scale-110 border-white/50" 
                          : "bg-black/40 text-white border-white/20"
                      }`}>
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3
                      className={`font-black text-header-text mb-3 transition-all duration-300 ${
                        isActive ? "text-header-primary text-xl" : "text-lg"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-header-text-light leading-relaxed transition-all duration-300 ${
                        isActive ? "text-base" : "text-sm"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Active Indicator (Mobile) */}
                  {isActive && (
                    <div className="lg:hidden absolute -left-2 top-8 w-1 h-full bg-gradient-to-b from-header-primary via-header-secondary to-header-accent rounded-full" />
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

        {/* Stats Section */}
        <div className="mt-24 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-black text-header-primary mb-2">500+</div>
              <div className="text-sm text-header-text-light font-semibold">Projects Delivered</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-black text-header-secondary mb-2">98%</div>
              <div className="text-sm text-header-text-light font-semibold">Client Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-black text-header-accent mb-2">50+</div>
              <div className="text-sm text-header-text-light font-semibold">Expert Team</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="text-3xl md:text-4xl font-black text-header-primary mb-2">10+</div>
              <div className="text-sm text-header-text-light font-semibold">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

