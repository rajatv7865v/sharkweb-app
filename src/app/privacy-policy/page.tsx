import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Privacy Policy
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
            <h2 className="text-3xl font-bold text-header-text mb-4">Introduction</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              At Sharkwave Infotech, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Information We Collect</h2>
            <p className="text-header-text-light mb-4 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-header-text-light mb-8 space-y-2">
              <li>Name and contact information</li>
              <li>Email address and phone number</li>
              <li>Company information</li>
              <li>Payment and billing information</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-header-text-light mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-header-text-light mb-8 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze trends and usage</li>
            </ul>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Data Security</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Contact Us</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="/contact" className="text-header-primary hover:underline">privacy@sharkwave.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

