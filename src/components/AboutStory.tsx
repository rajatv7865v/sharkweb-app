import Image from "next/image";

export default function AboutStory() {
  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Started with a vision to transform businesses through technology",
      icon: "🚀"
    },
    {
      year: "500+",
      title: "Projects Delivered",
      description: "Successfully completed projects across various industries",
      icon: "📦"
    },
    {
      year: "98%",
      title: "Client Satisfaction",
      description: "Consistently high ratings from our clients",
      icon: "⭐"
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
            <span>📖</span>
            <span>Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            From humble beginnings to industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-lg text-header-text-light leading-relaxed">
              <p className="text-xl text-header-text font-semibold">
                Sharkwave Infotech was founded with a simple yet powerful vision: to empower businesses with technology that drives real results.
              </p>
              <p>
                We recognized that many companies struggle with outdated systems, inefficient processes, and the challenge of keeping up with rapidly evolving technology.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a full-service software development company. We've helped hundreds of businesses across various industries transform their operations, improve efficiency, and achieve their digital goals.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, combining innovative thinking with proven methodologies to deliver software solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Our team"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-header-primary/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-header-gray rounded-3xl p-8 border border-gray-200/50 hover:border-header-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {milestone.icon}
              </div>
              <div className="text-5xl font-black text-header-primary mb-3">{milestone.year}</div>
              <div className="text-xl font-bold text-header-text mb-2">{milestone.title}</div>
              <div className="text-sm text-header-text-light leading-relaxed">{milestone.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

