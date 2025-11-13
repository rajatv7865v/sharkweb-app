import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SaaSDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-primary/10 via-white to-header-accent/10 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-header-text mb-6">
                SaaS Development
              </h1>
              <p className="text-xl md:text-2xl text-header-text-light mb-8 font-light leading-relaxed">
                Build scalable Software-as-a-Service platforms that can grow from startup to enterprise. Create subscription-based solutions that generate recurring revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center justify-center shadow-lg"
                >
                  Start Your SaaS
                </a>
                <a
                  href="/contact"
                  className="border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="SaaS Development"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              SaaS Platform Features
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Everything you need to build and scale a successful SaaS product
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "Multi-Tenant Architecture",
                description: "Efficiently serve thousands of customers from a single codebase with secure tenant isolation and data separation.",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Subscription Management",
                description: "Complete billing system with subscription plans, usage-based pricing, invoicing, and payment processing integration.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "User Management & Authentication",
                description: "Robust user management with role-based access control, SSO, 2FA, and comprehensive security features.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Analytics & Reporting",
                description: "Built-in analytics dashboard to track user behavior, revenue metrics, and business KPIs in real-time.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-header-text mb-4">{feature.title}</h3>
                  <p className="text-header-text-light leading-relaxed">{feature.description}</p>
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
              Why Choose Our SaaS Development?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Recurring Revenue Model",
                description: "Build a sustainable business with predictable monthly recurring revenue from subscriptions."
              },
              {
                icon: "📈",
                title: "Scalable Infrastructure",
                description: "Architecture designed to scale from 100 to 1 million users without major rewrites."
              },
              {
                icon: "🌍",
                title: "Global Reach",
                description: "Serve customers worldwide with multi-region deployment and localization support."
              },
              {
                icon: "⚡",
                title: "Fast Time to Market",
                description: "Launch your SaaS product quickly with our proven development frameworks and templates."
              },
              {
                icon: "🔧",
                title: "Easy Maintenance",
                description: "Single codebase means easier updates, bug fixes, and feature additions for all customers."
              },
              {
                icon: "📊",
                title: "Data-Driven Insights",
                description: "Built-in analytics help you understand user behavior and optimize your product."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 transition-all">
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
            Ready to Build Your SaaS Platform?
          </h2>
          <p className="text-xl text-header-text-light mb-10">
            Let's turn your SaaS idea into a scalable, revenue-generating platform.
          </p>
          <a
            href="/contact"
            className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your SaaS Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

