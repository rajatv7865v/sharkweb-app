export default function BlogHero() {
  return (
    <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Our Blog
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Insights, trends, and expert perspectives on technology, software development, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
}

