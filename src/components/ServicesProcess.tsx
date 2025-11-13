export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges to create a comprehensive project plan."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "Our team designs the solution architecture and user experience, ensuring scalability and optimal performance."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies, with continuous testing and quality assurance throughout."
    },
    {
      number: "04",
      title: "Deployment & Launch",
      description: "We handle the deployment process, ensuring smooth launch with minimal downtime and maximum performance."
    },
    {
      number: "05",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and optimization to keep your software running smoothly and efficiently."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-header-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
            Our Development Process
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        <div className="relative">
          {/* Connection Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-header-primary via-header-accent to-header-primary"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 hover:shadow-lg transition-all text-center lg:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-header-primary to-header-accent rounded-full text-white text-2xl font-bold mb-4 lg:mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-header-text mb-3">
                    {step.title}
                  </h3>
                  <p className="text-header-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

