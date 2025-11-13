import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function EnterpriseSolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-primary/10 via-white to-header-accent/10 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-header-text mb-6">
                Enterprise Solutions
              </h1>
              <p className="text-base md:text-lg text-header-text-light mb-8 font-light leading-relaxed">
                Scalable, secure, and robust software solutions designed for large organizations. Transform your enterprise with technology that grows with your business.
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
                  Schedule Consultation
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Enterprise Solutions"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
              Built to handle the complexity and scale of large organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Scalable Architecture",
                description: "Design systems that can handle millions of users and transactions without performance degradation.",
                icon: "📈"
              },
              {
                title: "Enterprise Security",
                description: "Bank-level security with compliance for GDPR, HIPAA, SOC 2, and industry-specific regulations.",
                icon: "🔒"
              },
              {
                title: "High Availability",
                description: "99.9% uptime guarantee with redundant systems and disaster recovery solutions.",
                icon: "⚡"
              },
              {
                title: "Integration Ready",
                description: "Seamlessly integrate with existing enterprise systems, ERPs, CRMs, and third-party services.",
                icon: "🔌"
              },
              {
                title: "Custom Workflows",
                description: "Tailored business processes and workflows that match your organization's unique needs.",
                icon: "⚙️"
              },
              {
                title: "24/7 Support",
                description: "Dedicated support team available around the clock to ensure your systems run smoothly.",
                icon: "🛟"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-header-gray rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 hover:shadow-lg transition-all">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-header-text mb-3">{feature.title}</h3>
                <p className="text-header-text-light leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-header-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
              Enterprise Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "Enterprise Resource Planning (ERP)",
                description: "Comprehensive ERP solutions that integrate all business functions including finance, HR, supply chain, and operations.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Customer Relationship Management (CRM)",
                description: "Advanced CRM systems to manage customer interactions, sales pipelines, and marketing campaigns effectively.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Business Intelligence & Analytics",
                description: "Powerful BI platforms that transform data into actionable insights for strategic decision-making.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Supply Chain Management",
                description: "End-to-end supply chain solutions for inventory management, logistics, and vendor coordination.",
                image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-header-text mb-4">{useCase.title}</h3>
                  <p className="text-header-text-light leading-relaxed">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-base md:text-lg text-header-text-light mb-10">
            Let's discuss how our enterprise solutions can help your organization achieve its goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Our Enterprise Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

