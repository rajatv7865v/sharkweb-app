import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-header-text mb-4">Agreement to Terms</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Use License</h2>
            <p className="text-header-text-light mb-4 leading-relaxed">
              Permission is granted to temporarily access our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-header-text-light mb-8 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Service Availability</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              We strive to provide reliable and continuous service, but we do not guarantee that our services will be available at all times. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              In no event shall Sharkwave Infotech or its suppliers be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damage.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Contact Us</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="/contact" className="text-header-primary hover:underline">legal@sharkwave.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

