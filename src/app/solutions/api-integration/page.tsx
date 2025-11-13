import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function APIIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-primary/10 via-white to-header-accent/10 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-header-text mb-6">
                API Integration
              </h1>
              <p className="text-xl md:text-2xl text-header-text-light mb-8 font-light leading-relaxed">
                Connect your systems seamlessly with robust API development and integration services. Build powerful integrations that streamline workflows and enhance productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center justify-center shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  View API Docs
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="API Integration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              API Services We Offer
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Comprehensive API solutions for modern applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "RESTful API Development",
                description: "Build clean, well-documented REST APIs following industry best practices. Support for JSON, XML, and custom data formats.",
                features: ["RESTful Architecture", "OpenAPI/Swagger Documentation", "Versioning Support", "Rate Limiting", "Authentication & Authorization"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "GraphQL API Development",
                description: "Modern GraphQL APIs that allow clients to request exactly the data they need, reducing over-fetching and improving performance.",
                features: ["GraphQL Schema Design", "Query Optimization", "Real-time Subscriptions", "Data Loaders", "Schema Stitching"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Third-Party Integrations",
                description: "Integrate with popular services like payment gateways, email providers, CRM systems, and cloud platforms.",
                features: ["Payment Gateways", "Email Services", "CRM Integration", "Cloud Services", "Social Media APIs"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "API Gateway & Management",
                description: "Set up API gateways for centralized management, security, monitoring, and traffic control across all your APIs.",
                features: ["API Gateway Setup", "Traffic Management", "API Analytics", "Security Policies", "Developer Portal"],
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-header-text mb-4">{service.title}</h3>
                  <p className="text-header-text-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-header-text-light">
                        <svg className="w-5 h-5 text-header-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-header-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              Benefits of API Integration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🔗",
                title: "System Connectivity",
                description: "Connect disparate systems and enable seamless data flow across your organization."
              },
              {
                icon: "⚡",
                title: "Improved Efficiency",
                description: "Automate workflows and eliminate manual data entry, saving time and reducing errors."
              },
              {
                icon: "📊",
                title: "Real-Time Data",
                description: "Access up-to-date information across all integrated systems in real-time."
              },
              {
                icon: "💰",
                title: "Cost Reduction",
                description: "Reduce operational costs by automating processes and eliminating redundant tasks."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 transition-all text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-header-text mb-3">{benefit.title}</h3>
                <p className="text-header-text-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-header-text mb-6">
            Need API Integration Services?
          </h2>
          <p className="text-xl text-header-text-light mb-10">
            Let's connect your systems and streamline your operations.
          </p>
          <a
            href="/contact"
            className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Discuss Your Integration Needs
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

