import Image from "next/image";

export default function AboutTeam() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in software development",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech expert specializing in cloud architecture and scalability",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      description: "Creative director focused on user experience and innovation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "David Thompson",
      role: "Lead Developer",
      description: "Full-stack developer passionate about clean code and best practices",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      description: "Ensures smooth delivery and client satisfaction",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      description: "Infrastructure and deployment specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
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
            <span>👥</span>
            <span>Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            Meet The
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Talented Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light max-w-3xl mx-auto font-light leading-relaxed">
            The passionate individuals behind our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-200/50 hover:border-header-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-header-primary/5 via-header-secondary/5 to-header-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-gray-200 group-hover:ring-header-primary/50 transition-all duration-300 shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-black text-header-text mb-2">
                  {member.name}
                </h3>
                <div className="text-header-primary font-bold mb-4 text-lg">
                  {member.role}
                </div>
                <p className="text-base text-header-text-light leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-header-primary via-header-secondary to-header-accent rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Join Our Team
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <a
                href="/careers"
                className="inline-flex items-center gap-2 bg-white text-header-primary px-10 py-5 rounded-full text-base md:text-lg font-bold hover:bg-white/95 transition-all duration-300 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-105 transform"
              >
                <span>View Open Positions</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

