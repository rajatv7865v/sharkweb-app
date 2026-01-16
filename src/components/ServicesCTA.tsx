export default function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-header-primary via-header-secondary to-header-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-12 lg:p-16 text-center shadow-2xl border border-white/20">
          <div className="inline-flex items-center gap-2 bg-header-primary/10 text-header-primary px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-header-primary/20">
            <span>🚀</span>
            <span>Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-header-text mb-6 leading-tight">
            Ready to Start Your
            <br />
            <span className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-header-text-light mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Let's discuss how our software services can help transform your business and achieve your goals.
            We're here to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-header-primary via-header-secondary to-header-accent text-white px-10 py-5 rounded-full text-base md:text-lg font-bold hover:from-header-primary/90 hover:via-header-secondary/90 hover:to-header-accent-hover transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-2xl hover:shadow-[0_20px_50px_rgba(10,37,64,0.4)] hover:scale-105 transform"
            >
              <span>Get a Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="/contact"
              className="group border-2 border-header-text text-header-text px-10 py-5 rounded-full text-base md:text-lg font-bold hover:bg-header-text hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2 bg-white shadow-lg hover:shadow-xl"
            >
              <span>Schedule a Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

