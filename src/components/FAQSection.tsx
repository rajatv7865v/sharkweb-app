"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What services does Sharkwave Infotech provide?",
    answer: "We provide comprehensive software development services including custom software development, cloud solutions, web and mobile application development, digital transformation, API integration, DevOps services, and technical consulting. We work with businesses of all sizes to deliver scalable, secure, and innovative software solutions."
  },
  {
    category: "General",
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, e-commerce, education, manufacturing, real estate, and technology startups. Our solutions are tailored to meet the specific needs and compliance requirements of each industry."
  },
  {
    category: "General",
    question: "How long has Sharkwave Infotech been in business?",
    answer: "Sharkwave Infotech has been delivering cutting-edge software solutions for several years, helping businesses transform their operations through innovative technology. We have a proven track record of successful projects and satisfied clients."
  },
  {
    category: "Services",
    question: "What technologies and frameworks do you use?",
    answer: "We work with modern technologies and frameworks including React, Next.js, Node.js, Python, Java, .NET, AWS, Azure, Docker, Kubernetes, and more. We choose the best technology stack based on your project requirements, scalability needs, and business objectives."
  },
  {
    category: "Services",
    question: "Do you provide cloud migration services?",
    answer: "Yes, we offer comprehensive cloud migration services. We help businesses migrate their applications and infrastructure to cloud platforms like AWS, Azure, and Google Cloud. Our team ensures minimal downtime and seamless transition while optimizing costs and performance."
  },
  {
    category: "Services",
    question: "Can you develop mobile applications?",
    answer: "Absolutely! We develop both native (iOS and Android) and cross-platform mobile applications using React Native, Flutter, and native technologies. We create user-friendly, high-performance mobile apps that provide excellent user experiences."
  },
  {
    category: "Process",
    question: "What is your development process?",
    answer: "We follow an agile development methodology that emphasizes collaboration, flexibility, and iterative delivery. Our process includes requirements analysis, design, development, testing, deployment, and ongoing support. We maintain transparent communication throughout the project lifecycle."
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope, complexity, and requirements. A simple web application might take 4-8 weeks, while enterprise solutions can take 3-6 months or longer. We provide detailed project timelines during the initial consultation and keep you updated throughout the development process."
  },
  {
    category: "Process",
    question: "Do you provide project updates during development?",
    answer: "Yes, we maintain regular communication with our clients through scheduled meetings, progress reports, and project management tools. You'll have access to a dedicated project manager who keeps you informed about milestones, deliverables, and any changes to the project timeline."
  },
  {
    category: "Pricing",
    question: "How do you price your services?",
    answer: "Our pricing is based on project scope, complexity, timeline, and specific requirements. We offer flexible engagement models including fixed-price projects, time and materials, and dedicated team models. We provide detailed quotes after understanding your needs during a free consultation."
  },
  {
    category: "Pricing",
    question: "Do you offer maintenance and support services?",
    answer: "Yes, we offer comprehensive maintenance and support services including bug fixes, security updates, feature enhancements, performance optimization, and 24/7 technical support. We provide flexible support packages tailored to your needs."
  },
  {
    category: "Pricing",
    question: "What is included in your support packages?",
    answer: "Our support packages typically include regular updates, security patches, bug fixes, performance monitoring, technical support, and consultation. We offer different tiers of support from basic maintenance to comprehensive managed services, allowing you to choose what fits your budget and requirements."
  },
  {
    category: "Technical",
    question: "How do you ensure code quality and security?",
    answer: "We follow industry best practices including code reviews, automated testing, security audits, and compliance with standards like OWASP. Our development team uses version control, CI/CD pipelines, and follows secure coding practices to ensure high-quality, secure software."
  },
  {
    category: "Technical",
    question: "Do you provide API development and integration?",
    answer: "Yes, we specialize in API development and integration. We create RESTful and GraphQL APIs, integrate third-party services, and build microservices architectures. We ensure APIs are well-documented, secure, scalable, and follow industry standards."
  },
  {
    category: "Technical",
    question: "What happens after the project is completed?",
    answer: "After project completion, we provide comprehensive documentation, training for your team, deployment assistance, and ongoing support options. We ensure a smooth handover and are available for maintenance, updates, and future enhancements."
  },
  {
    category: "Getting Started",
    question: "How do I get started with a project?",
    answer: "Getting started is easy! Simply contact us through our contact form or schedule a free consultation. We'll discuss your requirements, understand your business goals, and provide a detailed proposal with timeline and pricing. Once approved, we'll kick off the project with a discovery phase."
  },
  {
    category: "Getting Started",
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to discuss your project requirements, understand your business needs, and explore how our services can help you achieve your goals. This consultation helps us provide accurate estimates and recommendations."
  },
  {
    category: "Getting Started",
    question: "What information should I prepare for the initial consultation?",
    answer: "It's helpful to prepare information about your business goals, current challenges, project scope, target users, timeline expectations, and budget range. However, don't worry if you don't have everything ready - we'll guide you through the process and help identify requirements during our discussion."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqs.map(faq => faq.category)))];
  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-header-accent text-white"
                : "bg-header-gray text-header-text hover:bg-header-primary/10 hover:text-header-primary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-header-primary/50 transition-colors shadow-sm hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-header-primary focus:ring-inset"
            >
              <span className="font-semibold text-header-text text-lg pr-8">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-header-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 pt-0">
                <p className="text-header-text-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Results count */}
      <div className="mt-8 text-center text-sm text-header-text-light">
        Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? "question" : "questions"}
        {selectedCategory !== "All" && ` in ${selectedCategory}`}
      </div>
    </div>
  );
}

