import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Team collaboration"
          fill
          className="object-cover opacity-30"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-header-primary/80 via-header-primary/60 to-header-secondary/70 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-header-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-header-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-lg">
            <span>🏢</span>
            <span>About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-lg">
            About
            <br />
            <span className="bg-gradient-to-r from-white via-header-accent to-white bg-clip-text text-transparent">
              Sharkwave Infotech
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            We're a team of passionate developers, designers, and innovators dedicated to transforming businesses through cutting-edge software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

