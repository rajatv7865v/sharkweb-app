export default function AboutValues() {
  const values = [
    {
      icon: "🎯",
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your business needs and delivering solutions that drive real value."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We stay ahead of the curve by embracing new technologies and methodologies to deliver cutting-edge solutions."
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and keeping you informed at every step of the process."
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security, and performance in everything we build."
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We're committed to continuous learning and improvement, both for our team and our clients' businesses."
    },
    {
      icon: "🔒",
      title: "Security",
      description: "We take security seriously, implementing best practices and ensuring your data and applications are protected."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-header-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
            Our Values
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 hover:shadow-lg transition-all"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-header-text mb-3">
                {value.title}
              </h3>
              <p className="text-header-text-light leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

