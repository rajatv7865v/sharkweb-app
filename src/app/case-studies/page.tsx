import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      client: "Fortune 500 Retail Company",
      industry: "Retail",
      challenge: "Migrating legacy systems to cloud infrastructure while maintaining zero downtime.",
      solution: "Implemented a phased migration strategy with automated testing and rollback capabilities.",
      results: [
        "50% reduction in infrastructure costs",
        "99.9% uptime achieved",
        "3x faster deployment cycles"
      ],
      image: "☁️"
    },
    {
      title: "E-commerce Platform Development",
      client: "Growing Fashion Brand",
      industry: "E-commerce",
      challenge: "Building a scalable e-commerce platform to handle 10x traffic growth.",
      solution: "Developed a modern, headless e-commerce solution with microservices architecture.",
      results: [
        "300% increase in conversion rate",
        "5x improvement in page load speed",
        "Seamless mobile experience"
      ],
      image: "🛒"
    },
    {
      title: "Healthcare Data Management System",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      challenge: "Creating a secure, HIPAA-compliant patient data management system.",
      solution: "Built a custom healthcare platform with advanced security and compliance features.",
      results: [
        "100% HIPAA compliance",
        "40% reduction in administrative time",
        "Improved patient data accuracy"
      ],
      image: "🏥"
    },
    {
      title: "FinTech Mobile Application",
      client: "Digital Banking Startup",
      industry: "Financial Services",
      challenge: "Developing a secure mobile banking app with real-time transaction processing.",
      solution: "Created a native mobile app with biometric authentication and real-time sync.",
      results: [
        "1M+ downloads in first year",
        "4.8/5 app store rating",
        "Zero security incidents"
      ],
      image: "💳"
    },
    {
      title: "SaaS Platform for Project Management",
      client: "Tech Startup",
      industry: "SaaS",
      challenge: "Building a scalable SaaS platform to serve thousands of concurrent users.",
      solution: "Developed a cloud-native platform with auto-scaling and multi-tenant architecture.",
      results: [
        "10,000+ active users",
        "99.95% uptime",
        "50% faster feature delivery"
      ],
      image: "📊"
    },
    {
      title: "IoT Integration for Manufacturing",
      client: "Manufacturing Company",
      industry: "Manufacturing",
      challenge: "Connecting legacy manufacturing equipment to modern IoT systems.",
      solution: "Implemented IoT gateways and data analytics platform for real-time monitoring.",
      results: [
        "30% reduction in downtime",
        "Real-time equipment monitoring",
        "Predictive maintenance enabled"
      ],
      image: "🏭"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Real results from real projects. See how we've helped businesses transform their operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{study.image}</div>
                <div className="mb-2">
                  <span className="text-xs font-semibold text-header-primary uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-header-text mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-header-text-light mb-4">
                  <span className="font-semibold">Client:</span> {study.client}
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-header-text mb-2">Challenge:</p>
                  <p className="text-sm text-header-text-light mb-4">{study.challenge}</p>
                  <p className="text-sm font-semibold text-header-text mb-2">Solution:</p>
                  <p className="text-sm text-header-text-light mb-4">{study.solution}</p>
                  <p className="text-sm font-semibold text-header-text mb-2">Results:</p>
                  <ul className="text-sm text-header-text-light space-y-1">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-header-primary mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className="inline-block text-header-primary hover:text-header-primary-dark font-medium text-sm"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

