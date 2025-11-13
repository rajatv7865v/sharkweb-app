import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help via email. We typically respond within 24 hours.",
      contact: "support@sharkwave.com",
      icon: "📧"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time during business hours.",
      contact: "Available 9 AM - 6 PM EST",
      icon: "💬"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our technical support team.",
      contact: "+1 (555) 123-4567",
      icon: "📞"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and get answers from the community.",
      contact: "Visit Forum",
      icon: "👥"
    }
  ];

  const faqCategories = [
    {
      category: "Technical Support",
      questions: [
        "How do I reset my password?",
        "How do I integrate the API?",
        "What are the system requirements?"
      ]
    },
    {
      category: "Billing",
      questions: [
        "How does billing work?",
        "Can I change my plan?",
        "What payment methods do you accept?"
      ]
    },
    {
      category: "Account Management",
      questions: [
        "How do I update my account information?",
        "Can I have multiple users?",
        "How do I export my data?"
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
              Support
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              We're here to help. Get the support you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              Get Help
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Choose the support option that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-2xl font-bold text-header-text mb-3">
                  {option.title}
                </h3>
                <p className="text-header-text-light mb-4">
                  {option.description}
                </p>
                <p className="text-header-primary font-semibold">
                  {option.contact}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-header-text mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => (
                <div key={index} className="bg-header-gray rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-header-text mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.questions.map((question, idx) => (
                      <li key={idx} className="text-header-text-light hover:text-header-primary transition-colors cursor-pointer">
                        {question}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-header-gray rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-header-text mb-4">
              Still Need Help?
            </h3>
            <p className="text-header-text-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact us directly and we'll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

