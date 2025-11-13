export default function ServicesCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-header-primary/10 via-header-accent/10 to-header-primary/10 rounded-3xl p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg text-header-text-light mb-10 max-w-2xl mx-auto">
            Let's discuss how our software services can help transform your business and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              Get a Free Quote
            </a>
            <a
              href="/contact"
              className="border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center justify-center bg-white"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

