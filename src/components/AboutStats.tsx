export default function AboutStats() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered software solutions"
    },
    {
      number: "200+",
      label: "Happy Clients",
      description: "Businesses we've helped transform"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Talented professionals in our team"
    },
    {
      number: "15+",
      label: "Countries Served",
      description: "Global reach, local expertise"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high ratings"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
            By The Numbers
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-header-gray rounded-xl hover:bg-header-primary/5 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-header-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-header-text mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-header-text-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

