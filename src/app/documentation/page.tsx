import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DocumentationPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        { name: "Introduction", description: "Overview of our services and platform" },
        { name: "Quick Start Guide", description: "Get up and running in minutes" },
        { name: "Installation", description: "Step-by-step installation instructions" }
      ]
    },
    {
      title: "API Reference",
      items: [
        { name: "Authentication", description: "How to authenticate API requests" },
        { name: "Endpoints", description: "Complete API endpoint documentation" },
        { name: "Rate Limits", description: "Understanding API rate limits" }
      ]
    },
    {
      title: "Guides",
      items: [
        { name: "Best Practices", description: "Recommended practices for development" },
        { name: "Tutorials", description: "Step-by-step tutorials" },
        { name: "Examples", description: "Code examples and snippets" }
      ]
    },
    {
      title: "SDK & Tools",
      items: [
        { name: "JavaScript SDK", description: "Client library for JavaScript" },
        { name: "Python SDK", description: "Client library for Python" },
        { name: "CLI Tools", description: "Command-line interface tools" }
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
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive guides and references to help you build with our platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-header-gray rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-header-text mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-4 border border-gray-200 hover:border-header-primary/50 hover:shadow-md transition-all cursor-pointer"
                    >
                      <h3 className="font-semibold text-header-text mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-header-text-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-header-gray rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-header-text mb-4">
              Need Help?
            </h3>
            <p className="text-header-text-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support"
                className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Support
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

