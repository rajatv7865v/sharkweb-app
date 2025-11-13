export default function ServicesList() {
  const services = [
    {
      title: "Custom Software Development",
      icon: "💻",
      description: "Build tailored software solutions that perfectly fit your business requirements and workflows.",
      features: [
        "Enterprise Applications",
        "Business Process Automation",
        "Legacy System Modernization",
        "API Development",
        "Microservices Architecture",
        "Scalable Solutions"
      ],
      color: "from-header-primary/20 to-header-primary/5"
    },
    {
      title: "Web Development",
      icon: "🌐",
      description: "Create modern, responsive, and high-performance web applications that engage users and drive conversions.",
      features: [
        "React & Next.js Development",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "Single Page Applications",
        "Full-Stack Development"
      ],
      color: "from-header-primary/20 to-header-primary/5"
    },
    {
      title: "Mobile App Development",
      icon: "📱",
      description: "Develop native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
      features: [
        "iOS App Development",
        "Android App Development",
        "React Native Apps",
        "Flutter Development",
        "App Store Optimization",
        "Mobile UI/UX Design"
      ],
      color: "from-header-primary/20 to-header-primary/5"
    },
    {
      title: "Cloud Solutions & Migration",
      icon: "☁️",
      description: "Leverage the power of cloud computing with our comprehensive cloud services and seamless migration solutions.",
      features: [
        "AWS Cloud Services",
        "Azure Migration",
        "Google Cloud Platform",
        "Cloud Architecture Design",
        "DevOps Implementation",
        "Containerization & Kubernetes"
      ],
      color: "from-cyan-500/20 to-cyan-500/5"
    },
    {
      title: "Digital Transformation",
      icon: "🔄",
      description: "Transform your business operations with digital solutions that improve efficiency, reduce costs, and drive growth.",
      features: [
        "Process Digitization",
        "Workflow Automation",
        "Data Analytics & BI",
        "AI & Machine Learning",
        "IoT Solutions",
        "Digital Strategy Consulting"
      ],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      title: "API Development & Integration",
      icon: "🔌",
      description: "Build robust APIs and integrate third-party services to connect your systems and streamline operations.",
      features: [
        "RESTful API Development",
        "GraphQL APIs",
        "Third-Party Integrations",
        "API Gateway Setup",
        "API Documentation",
        "Webhook Implementation"
      ],
      color: "from-orange-500/20 to-orange-500/5"
    },
    {
      title: "DevOps & CI/CD",
      icon: "⚙️",
      description: "Implement DevOps practices and CI/CD pipelines to accelerate development and ensure reliable deployments.",
      features: [
        "CI/CD Pipeline Setup",
        "Docker & Containerization",
        "Kubernetes Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
        "Automated Testing"
      ],
      color: "from-red-500/20 to-red-500/5"
    },
    {
      title: "UI/UX Design",
      icon: "🎨",
      description: "Create intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Visual Design",
        "Design Systems",
        "Usability Testing",
        "Responsive Design"
      ],
      color: "from-pink-500/20 to-pink-500/5"
    },
    {
      title: "Quality Assurance & Testing",
      icon: "✅",
      description: "Ensure your software is bug-free and performs flawlessly with comprehensive testing services.",
      features: [
        "Automated Testing",
        "Manual Testing",
        "Performance Testing",
        "Security Testing",
        "Load Testing",
        "Test Automation Frameworks"
      ],
      color: "from-teal-500/20 to-teal-500/5"
    },
    {
      title: "Maintenance & Support",
      icon: "🛠️",
      description: "Keep your software running smoothly with ongoing maintenance, updates, and 24/7 technical support.",
      features: [
        "24/7 Technical Support",
        "Bug Fixes & Updates",
        "Security Patches",
        "Performance Optimization",
        "Feature Enhancements",
        "System Monitoring"
      ],
      color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
      title: "Consulting Services",
      icon: "💡",
      description: "Get expert guidance on technology strategy, architecture, and best practices to make informed decisions.",
      features: [
        "Technology Consulting",
        "Architecture Review",
        "Code Review & Audit",
        "Best Practices Guidance",
        "Technical Roadmap Planning",
        "Team Training & Mentoring"
      ],
      color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
      title: "SaaS Development",
      icon: "🚀",
      description: "Build scalable Software-as-a-Service platforms that can grow with your business and serve thousands of users.",
      features: [
        "Multi-Tenant Architecture",
        "Subscription Management",
        "Payment Integration",
        "Scalable Infrastructure",
        "User Management Systems",
        "Analytics & Reporting"
      ],
      color: "from-emerald-500/20 to-emerald-500/5"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-4">
            Comprehensive Software Services
          </h2>
          <p className="text-base md:text-lg text-header-text-light max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your software solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-header-primary/50 hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-header-text mb-3">
                {service.title}
              </h3>
              <p className="text-header-text-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-header-text-light">
                    <svg className="w-5 h-5 text-header-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block text-header-primary font-semibold hover:text-header-primary-dark transition-colors group/link"
              >
                Learn More
                <svg className="inline-block ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

