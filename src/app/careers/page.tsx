import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CareersPage() {
  const positions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "We're looking for an experienced full-stack developer to join our engineering team."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our DevOps team to help build and maintain scalable infrastructure."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Create beautiful and intuitive user experiences for our clients."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description: "Lead projects and ensure successful delivery for our clients."
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Remote / Hybrid",
      type: "Full-time",
      description: "Help grow our business by connecting with potential clients."
    },
    {
      title: "Cloud Solutions Architect",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement cloud solutions for enterprise clients."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Build your career with us. We're looking for talented individuals who share our passion for innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Explore opportunities to grow with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-header-text mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-3 py-1 bg-header-gray text-header-text text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-header-gray text-header-text text-sm font-medium rounded-full">
                        {position.location}
                      </span>
                      <span className="px-3 py-1 bg-header-gray text-header-text text-sm font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-header-text-light mb-6 leading-relaxed">
                  {position.description}
                </p>
                <a
                  href="/contact"
                  className="inline-block text-header-primary hover:text-header-primary-dark font-medium"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-header-gray rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-header-text mb-4">
              Don't see a position that fits?
            </h3>
            <p className="text-header-text-light mb-8 max-w-2xl mx-auto">
              We're always interested in connecting with talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

