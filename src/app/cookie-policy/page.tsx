import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Cookie Policy
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
            <h2 className="text-3xl font-bold text-header-text mb-4">What Are Cookies</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">How We Use Cookies</h2>
            <p className="text-header-text-light mb-4 leading-relaxed">
              We use cookies for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-header-text-light mb-8 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Managing Cookies</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              You can control and manage cookies in various ways. Most browsers allow you to refuse or accept cookies. However, please note that blocking cookies may impact your experience on our website.
            </p>

            <h2 className="text-3xl font-bold text-header-text mb-4 mt-12">Contact Us</h2>
            <p className="text-header-text-light mb-8 leading-relaxed">
              If you have any questions about our use of cookies, please contact us at{" "}
              <a href="/contact" className="text-header-primary hover:underline">sharkwave.infotech@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

