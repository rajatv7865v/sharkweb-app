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
    <section className="py-10 lg:py-10 bg-header-gray" style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-header-text mb-6 leading-tight">
            Our Process
           
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto font-light">
            From concept to deployment, we guide you through every stage of your project.
          </p>
        </div>

        {/* Stepper Process */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-header-primary via-header-accent to-header-primary-dark transform -translate-x-1/2"></div>
          
          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Step Number & Icon (Mobile) */}
                <div className="lg:hidden flex items-center gap-4 w-full">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-header-primary mb-1">STEP {step.number}</div>
                    <h3 className="text-xl font-bold text-header-text">{step.title}</h3>
                  </div>
                </div>

                {/* Image */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {/* Step Number Badge (Desktop) */}
                    <div className="absolute top-6 left-6 hidden lg:flex items-center gap-3">
                      <div className="w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <div className="text-xs font-semibold text-header-primary mb-1">STEP</div>
                        <div className="text-2xl font-bold text-header-text">{step.number}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="lg:hidden mb-6">
                    <p className="text-header-text-light leading-relaxed">{step.description}</p>
                  </div>
                  <div className="hidden lg:block">
                    <div className="text-sm font-semibold text-header-primary mb-2">STEP {step.number}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-header-text mb-6 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-base md:text-lg text-header-text-light leading-relaxed mb-6">
                      {step.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="flex items-center gap-2 text-header-primary">
                        <span className="text-sm font-medium">Next: {steps[index + 1].title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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



