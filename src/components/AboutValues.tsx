export default function AboutValues() {
  const values = [
    {
      icon: "🎯",
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your business needs and delivering solutions that drive real value.",
      gradient: "from-header-primary/20 to-header-primary/5"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "We stay ahead of the curve by embracing new technologies and methodologies to deliver cutting-edge solutions.",
      gradient: "from-header-secondary/20 to-header-secondary/5"
    },
    {
      icon: "🤝",
      title: "Transparency",
      description: "We believe in open communication, honest feedback, and keeping you informed at every step of the process.",
      gradient: "from-header-accent/20 to-header-accent/5"
    },
    {
      icon: "⚡",
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security, and performance in everything we build.",
      gradient: "from-header-primary/20 via-header-secondary/20 to-header-accent/20"
    },
    {
      icon: "🌱",
      title: "Growth",
      description: "We're committed to continuous learning and improvement, both for our team and our clients' businesses.",
      gradient: "from-header-secondary/20 via-header-accent/20 to-header-primary/20"
    },
    {
      icon: "🔒",
      title: "Security",
      description: "We take security seriously, implementing best practices and ensuring your data and applications are protected.",
      gradient: "from-header-accent/20 via-header-primary/20 to-header-secondary/20"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-header-gray relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-header-primary/20">
            <span>💎</span>
            <span>Our Values</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            The Principles That
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Guide Us
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            The core values that shape our culture and drive our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-header-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-header-primary/10 via-header-secondary/10 to-header-accent/10 rounded-2xl flex items-center justify-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-header-text mb-4">
                  {value.title}
                </h3>
                <p className="text-base text-header-text-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

