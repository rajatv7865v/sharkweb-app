import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Community
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Join our vibrant community of developers, designers, and innovators.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-header-text mb-3">
                Forum
              </h3>
              <p className="text-header-text-light mb-6">
                Join discussions, ask questions, and share knowledge with other community members.
              </p>
              <a
                href="#"
                className="inline-block text-header-primary hover:text-header-primary-dark font-medium"
              >
                Visit Forum →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-header-text mb-3">
                GitHub
              </h3>
              <p className="text-header-text-light mb-6">
                Contribute to open-source projects, report issues, and collaborate on code.
              </p>
              <a
                href="#"
                className="inline-block text-header-primary hover:text-header-primary-dark font-medium"
              >
                View on GitHub →
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-lg transition-all text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-header-text mb-3">
                Discord
              </h3>
              <p className="text-header-text-light mb-6">
                Chat in real-time with community members, get instant help, and share ideas.
              </p>
              <a
                href="#"
                className="inline-block text-header-primary hover:text-header-primary-dark font-medium"
              >
                Join Discord →
              </a>
            </div>
          </div>

          <div className="bg-header-gray rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-header-text mb-4">
              Community Guidelines
            </h2>
            <p className="text-header-text-light max-w-3xl mx-auto mb-8">
              We believe in fostering a welcoming and inclusive community. Be respectful, helpful, and constructive in all interactions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-header-text mb-2">Be Respectful</h3>
                <p className="text-sm text-header-text-light">
                  Treat all community members with kindness and respect.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-header-text mb-2">Share Knowledge</h3>
                <p className="text-sm text-header-text-light">
                  Help others learn and grow by sharing your expertise.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-header-text mb-2">Stay On Topic</h3>
                <p className="text-sm text-header-text-light">
                  Keep discussions relevant and constructive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

