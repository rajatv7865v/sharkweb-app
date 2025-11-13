import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate with leading technology platforms and services.",
      benefits: [
        "Access to partner APIs and SDKs",
        "Co-marketing opportunities",
        "Technical support and resources"
      ]
    },
    {
      title: "Channel Partners",
      description: "Resell our solutions and earn competitive commissions.",
      benefits: [
        "Competitive commission structure",
        "Sales and marketing materials",
        "Dedicated partner support"
      ]
    },
    {
      title: "Integration Partners",
      description: "Build integrations and expand our ecosystem.",
      benefits: [
        "Developer resources and documentation",
        "Featured in our marketplace",
        "Revenue sharing opportunities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Partners
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Join our partner program and grow your business with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              Partner Programs
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Choose the partnership model that fits your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnerTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl font-bold text-header-text mb-3">
                  {type.title}
                </h3>
                <p className="text-header-text-light mb-6">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-header-text-light">
                      <span className="text-header-primary mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-header-gray rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-header-text mb-4">
              Become a Partner
            </h3>
            <p className="text-header-text-light mb-8 max-w-2xl mx-auto">
              Ready to partner with us? Get in touch and let's explore how we can work together.
            </p>
            <a
              href="/contact"
              className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Partnership Team
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

