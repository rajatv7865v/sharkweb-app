import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DevOpsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-header-primary/10 via-white to-header-accent/10 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-header-text mb-6">
                DevOps & CI/CD
              </h1>
              <p className="text-xl md:text-2xl text-header-text-light mb-8 font-light leading-relaxed">
                Accelerate your development lifecycle with automated CI/CD pipelines, containerization, and infrastructure as code. Deploy faster, more reliably, and with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors inline-flex items-center justify-center shadow-lg"
                >
                  Get Started
                </a>
                <a
                  href="/contact"
                  className="border-2 border-header-text text-header-text px-8 py-4 rounded-full text-base font-medium hover:bg-header-text hover:text-white transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="DevOps & CI/CD"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              DevOps Services
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              Complete DevOps solutions to streamline your development and deployment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "CI/CD Pipeline Setup",
                description: "Automated continuous integration and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, or Azure DevOps.",
                features: ["Automated Testing", "Build Automation", "Deployment Automation", "Rollback Capabilities", "Multi-Environment Support"],
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Containerization & Orchestration",
                description: "Docker containerization and Kubernetes orchestration for scalable, portable, and efficient application deployment.",
                features: ["Docker Containerization", "Kubernetes Setup", "Container Registry", "Auto-scaling", "Service Mesh"],
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Infrastructure as Code",
                description: "Manage infrastructure using code with Terraform, Ansible, or CloudFormation for version control and reproducibility.",
                features: ["Terraform", "Ansible", "CloudFormation", "Infrastructure Versioning", "Automated Provisioning"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              },
              {
                title: "Monitoring & Logging",
                description: "Comprehensive monitoring solutions with Prometheus, Grafana, ELK stack, and cloud-native monitoring tools.",
                features: ["Application Monitoring", "Infrastructure Monitoring", "Log Aggregation", "Alerting Systems", "Performance Metrics"],
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-header-text mb-4">{service.title}</h3>
                  <p className="text-header-text-light mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-header-text-light">
                        <svg className="w-5 h-5 text-header-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-header-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              DevOps Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Faster Deployments",
                description: "Reduce deployment time from days to minutes with automated CI/CD pipelines."
              },
              {
                icon: "🔄",
                title: "Continuous Delivery",
                description: "Release software updates frequently and reliably with automated testing and deployment."
              },
              {
                icon: "🛡️",
                title: "Improved Reliability",
                description: "Automated testing and deployment reduce human errors and improve system stability."
              },
              {
                icon: "📈",
                title: "Better Scalability",
                description: "Easily scale your infrastructure up or down based on demand with containerization."
              },
              {
                icon: "💰",
                title: "Cost Efficiency",
                description: "Optimize resource usage and reduce infrastructure costs with automated scaling."
              },
              {
                icon: "👥",
                title: "Team Collaboration",
                description: "Improve collaboration between development and operations teams for faster delivery."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-header-primary/50 transition-all">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-header-text mb-3">{benefit.title}</h3>
                <p className="text-header-text-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-header-text mb-4">
              Tools & Technologies
            </h2>
            <p className="text-xl text-header-text-light max-w-2xl mx-auto">
              We work with industry-leading DevOps tools and platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions", 
              "Terraform", "Ansible", "AWS", "Azure", "GCP", "Prometheus", "Grafana"
            ].map((tool, index) => (
              <div key={index} className="bg-header-gray rounded-xl p-6 text-center border border-gray-200 hover:border-header-primary/50 hover:shadow-md transition-all">
                <div className="font-semibold text-header-text">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-header-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-header-text mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-header-text-light mb-10">
            Let's set up a modern DevOps pipeline that accelerates your development and deployment.
          </p>
          <a
            href="/contact"
            className="inline-block bg-header-accent text-white px-8 py-4 rounded-full text-base font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
          >
            Start Your DevOps Journey
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

