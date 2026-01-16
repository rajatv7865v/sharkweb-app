export default function AboutStats() {
  const stats = [
    {
      number: "500+",
      label: "Projects Completed",
      description: "Successfully delivered software solutions",
      icon: "📦",
      color: "from-header-primary to-header-primary/80"
    },
    {
      number: "200+",
      label: "Happy Clients",
      description: "Businesses we've helped transform",
      icon: "😊",
      color: "from-header-secondary to-header-secondary/80"
    },
    {
      number: "50+",
      label: "Team Members",
      description: "Talented professionals in our team",
      icon: "👥",
      color: "from-header-accent to-header-accent/80"
    },
    {
      number: "15+",
      label: "Countries Served",
      description: "Global reach, local expertise",
      icon: "🌍",
      color: "from-header-primary via-header-secondary to-header-accent"
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently high ratings",
      icon: "⭐",
      color: "from-header-secondary via-header-accent to-header-primary"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
      icon: "🕐",
      color: "from-header-accent via-header-primary to-header-secondary"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-header-primary/20">
            <span>📊</span>
            <span>By The Numbers</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            Our Track Record
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Speaks for Itself
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            Numbers that reflect our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 lg:p-8 bg-white rounded-3xl border border-gray-200/50 hover:border-header-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {stat.icon}
              </div>
              <div className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                {stat.number}
              </div>
              <div className="text-base lg:text-lg font-bold text-header-text mb-2">
                {stat.label}
              </div>
              <div className="text-xs lg:text-sm text-header-text-light leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

