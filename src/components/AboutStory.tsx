export default function AboutStory() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-header-text-light leading-relaxed">
              <p>
                Sharkwave Infotech was founded with a simple yet powerful vision: to empower businesses with technology that drives real results. We recognized that many companies struggle with outdated systems, inefficient processes, and the challenge of keeping up with rapidly evolving technology.
              </p>
              <p>
                What started as a small team of passionate developers has grown into a full-service software development company. We've helped hundreds of businesses across various industries transform their operations, improve efficiency, and achieve their digital goals.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, combining innovative thinking with proven methodologies to deliver software solutions that not only meet but exceed our clients' expectations.
              </p>
            </div>
          </div>
          <div className="bg-header-gray rounded-2xl p-8 lg:p-12 border border-gray-200">
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-header-primary mb-2">2018</div>
                <div className="text-header-text font-semibold">Company Founded</div>
                <div className="text-sm text-header-text-light mt-1">Started with a vision to transform businesses through technology</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-header-primary mb-2">500+</div>
                <div className="text-header-text font-semibold">Projects Delivered</div>
                <div className="text-sm text-header-text-light mt-1">Successfully completed projects across various industries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-header-primary mb-2">98%</div>
                <div className="text-header-text font-semibold">Client Satisfaction</div>
                <div className="text-sm text-header-text-light mt-1">Consistently high ratings from our clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

