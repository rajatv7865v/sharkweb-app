import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section className="relative bg-gradient-to-br from-header-primary-dark via-header-primary to-header-accent text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              API Reference
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Complete API documentation for developers. Build powerful integrations with our platform.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-header-gray rounded-xl p-8 border border-gray-200 mb-8">
              <h2 className="text-2xl font-bold text-header-text mb-4">
                Getting Started
              </h2>
              <p className="text-header-text-light mb-4">
                Our API uses RESTful principles and returns JSON responses. All requests require authentication via API key.
              </p>
              <div className="bg-black rounded-lg p-4 font-mono text-sm text-green-400">
                <div>Base URL: https://api.sharkwave.com/v1</div>
                <div className="mt-2">Authentication: Bearer YOUR_API_KEY</div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">GET</span>
                  <code className="text-lg font-mono text-header-text">/users</code>
                </div>
                <p className="text-header-text-light mb-4">
                  Retrieve a list of all users.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div>curl https://api.sharkwave.com/v1/users \</div>
                  <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY"</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">POST</span>
                  <code className="text-lg font-mono text-header-text">/users</code>
                </div>
                <p className="text-header-text-light mb-4">
                  Create a new user.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div>curl -X POST https://api.sharkwave.com/v1/users \</div>
                  <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                  <div className="ml-4">-H "Content-Type: application/json" \</div>
                  <div className="ml-4">-d '{"{"}"name": "John Doe", "email": "john@example.com"{"}"}'</div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded">PUT</span>
                  <code className="text-lg font-mono text-header-text">/users/:id</code>
                </div>
                <p className="text-header-text-light mb-4">
                  Update an existing user.
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300">
                  <div>curl -X PUT https://api.sharkwave.com/v1/users/123 \</div>
                  <div className="ml-4">-H "Authorization: Bearer YOUR_API_KEY" \</div>
                  <div className="ml-4">-H "Content-Type: application/json" \</div>
                  <div className="ml-4">-d '{"{"}"name": "Jane Doe"{"}"}'</div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center bg-header-gray rounded-2xl p-12">
              <h3 className="text-3xl font-bold text-header-text mb-4">
                Need More Help?
              </h3>
              <p className="text-header-text-light mb-8 max-w-2xl mx-auto">
                Check out our full documentation or contact our developer support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/documentation"
                  className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
                >
                  View Documentation
                </a>
                <a
                  href="/support"
                  className="inline-block border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

