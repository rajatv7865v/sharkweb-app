import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-primary/10 via-white to-header-accent/10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-header-text mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-header-text-light max-w-2xl mx-auto font-light">
              Find answers to common questions about our software services and solutions
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-header-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-header-text mb-4">Still have questions?</h2>
          <p className="text-header-text-light mb-8 text-lg">
            Can't find the answer you're looking for? Please get in touch with our friendly team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

