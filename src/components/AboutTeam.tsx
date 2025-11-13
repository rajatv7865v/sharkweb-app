export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in software development",
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech expert specializing in cloud architecture and scalability",
      image: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creative director focused on user experience and innovation",
      image: "👩‍🎨"
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      description: "Full-stack developer passionate about clean code and best practices",
      image: "👨‍🔧"
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      description: "Ensures smooth delivery and client satisfaction",
      image: "👩‍💼"
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      description: "Infrastructure and deployment specialist",
      image: "👨‍💻"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-header-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
            Meet Our Team
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
            The talented individuals behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 hover:shadow-lg transition-all text-center"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-bold text-header-text mb-1">
                {member.name}
              </h3>
              <div className="text-header-primary font-semibold mb-3">
                {member.role}
              </div>
              <p className="text-header-text-light text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-header-text mb-4">
            Join Our Team
          </h3>
          <p className="text-base text-header-text-light mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}

