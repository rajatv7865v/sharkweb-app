import Image from "next/image";

export default function Features() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business needs, goals, and technical requirements. Our team conducts thorough analysis to create a tailored solution strategy.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "📋"
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our expert developers build your solution using cutting-edge technologies and best practices. We ensure scalable, maintainable, and high-performance code.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
      icon: "💻"
    },
    {
      number: "03",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your software is bug-free, secure, and performs optimally. We conduct comprehensive QA before deployment.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
      icon: "✅"
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We handle seamless deployment and provide ongoing support to ensure your system runs smoothly. Our team is always available to help.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 lg:mb-28">
          <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-header-primary/20">
            <span>✨</span>
            <span>Our Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            How We Build
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Your Solution
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            From concept to deployment, we guide you through every stage of your project with expertise and precision.
          </p>
        </div>

        {/* Stepper Process */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-header-primary/30 via-header-secondary/30 to-header-accent/30 transform -translate-x-1/2 rounded-full"></div>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-header-primary via-header-secondary to-header-accent transform -translate-x-1/2"></div>
          
          <div className="space-y-32 lg:space-y-40">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Center Connector Dot (Desktop) */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-6 h-6 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-full shadow-xl border-4 border-white"></div>
                </div>

                {/* Step Number & Icon (Mobile) */}
                <div className="lg:hidden flex items-center gap-4 w-full mb-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-header-primary mb-1 uppercase tracking-wider">STEP {step.number}</div>
                    <h3 className="text-2xl font-black text-header-text">{step.title}</h3>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 relative z-10">
                  <div className="relative h-80 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-header-primary/40 via-transparent to-transparent"></div>
                    {/* Step Number Badge (Desktop) */}
                    <div className="absolute top-8 left-8 hidden lg:flex items-center gap-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white">
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-xl shadow-xl border border-gray-200/50">
                        <div className="text-xs font-bold text-header-primary mb-1 uppercase tracking-wider">STEP</div>
                        <div className="text-3xl font-black text-header-text">{step.number}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 relative z-10">
                  <div className="lg:hidden mb-6">
                    <p className="text-header-text-light leading-relaxed text-base">{step.description}</p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-wider border border-header-primary/20">
                      STEP {step.number}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-header-text mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-header-text-light leading-relaxed mb-8 max-w-lg">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="flex items-center gap-3 text-header-primary group/next">
                        <span className="text-sm font-semibold">Next: {steps[index + 1].title}</span>
                        <svg className="w-5 h-5 group-hover/next:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



