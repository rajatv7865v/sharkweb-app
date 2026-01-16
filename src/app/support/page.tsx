import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SupportPage() {
  const supportOptions = [
    {
      title: "Email Support",
      description: "Get help via email. We typically respond within 24 hours.",
      contact: "sharkwave.infotech@gmail.com",
      icon: "📧"
    },
    {
      title: "Live Chat",
      description: "Chat with our support team in real-time during business hours.",
      contact: "Available 9 AM - 6 PM IST",
      icon: "💬"
    },
    {
      title: "Phone / WhatsApp Support",
      description: "Speak directly with our technical support team or chat on WhatsApp.",
      contact: "+91 7982332910",
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
                {option.title === "Phone / WhatsApp Support" ? (
                  <div className="flex items-center gap-2">
                    <a href="tel:+917982332910" className="text-header-primary font-semibold hover:text-header-primary-dark transition-colors">
                      {option.contact}
                    </a>
                    <a 
                      href="https://wa.me/919782332910" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                  </div>
                ) : (
                  <p className="text-header-primary font-semibold">
                    {option.contact}
                  </p>
                )}
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

