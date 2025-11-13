"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import ContactForm from "./ContactForm";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && contactModalOpen) {
        setContactModalOpen(false);
      }
    };
    if (contactModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [contactModalOpen]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white backdrop-blur-md shadow-lg" : "bg-white"
    } border-b border-gray-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <div className="relative group">
              <Link href="/services" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors rounded-lg hover:bg-gray-100">
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 p-6">
                <div className="space-y-4">
                  <Link href="/services" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">View All Services</div>
                    <div className="text-sm text-header-text-light mt-1">Explore our comprehensive software solutions</div>
                  </Link>
                  <Link href="/services" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">Custom Software Development</div>
                    <div className="text-sm text-header-text-light mt-1">Tailored solutions built for your unique business needs</div>
                  </Link>
                  <Link href="/services" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">Cloud Solutions</div>
                    <div className="text-sm text-header-text-light mt-1">Scalable cloud infrastructure and migration services</div>
                  </Link>
                  <Link href="/services" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">Web & Mobile Apps</div>
                    <div className="text-sm text-header-text-light mt-1">Modern web and mobile applications that engage users</div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium flex items-center gap-1 transition-colors rounded-lg hover:bg-gray-100">
                Solutions
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 p-6">
                <div className="space-y-4">
                  <Link href="/solutions/enterprise" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">Enterprise Solutions</div>
                    <div className="text-sm text-header-text-light mt-1">Scalable solutions for large organizations</div>
                  </Link>
                  <Link href="/solutions/saas" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">SaaS Development</div>
                    <div className="text-sm text-header-text-light mt-1">Build subscription-based platforms</div>
                  </Link>
                  <Link href="/solutions/api-integration" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">API Integration</div>
                    <div className="text-sm text-header-text-light mt-1">Connect systems seamlessly</div>
                  </Link>
                  <Link href="/solutions/devops" className="block group/item">
                    <div className="font-semibold text-header-text group-hover/item:text-header-primary transition-colors">DevOps & CI/CD</div>
                    <div className="text-sm text-header-text-light mt-1">Automate deployment pipelines</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/case-studies" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">
              Case Studies
            </Link>

            <Link href="/about" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">
              About
            </Link>

            <Link href="/faq" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">
              FAQ
            </Link>
            <Link href="/blog" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">
              Blog
            </Link>
            <Link href="/contact" className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-100">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-header-text hover:text-header-primary px-4 py-2 text-sm font-medium transition-colors"
            >
              Get Quote
            </button>
            <Link
              href="/contact"
              className="bg-header-accent text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-header-accent-hover transition-colors shadow-lg hover:shadow-xl"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-header-text hover:text-header-primary p-2 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top">
          <div className="px-4 pt-4 pb-6 space-y-1">
            <div className="mb-4">
              <div className="text-xs font-semibold text-header-text-light uppercase tracking-wider mb-2 px-3">Services</div>
              <Link href="/services" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">View All Services</Link>
              <Link href="/services" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Custom Software Development</Link>
              <Link href="/services" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Cloud Solutions</Link>
              <Link href="/services" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Web & Mobile Apps</Link>
            </div>
            <div className="mb-4">
              <div className="text-xs font-semibold text-header-text-light uppercase tracking-wider mb-2 px-3">Company</div>
              <Link href="#" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Case Studies</Link>
              <Link href="/about" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">About</Link>
                  <Link href="/faq" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">FAQ</Link>
                  <Link href="/blog" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Blog</Link>
                  <Link href="/contact" className="block px-3 py-2 text-header-text hover:bg-gray-100 rounded-lg transition-colors">Contact</Link>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link href="/contact" className="block px-3 py-2.5 bg-header-accent text-white rounded-lg text-center font-medium hover:bg-header-accent-hover transition-colors">
                Start Project
              </Link>
              <button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-3 py-2.5 border-2 border-header-text text-header-text rounded-lg text-center font-medium hover:bg-header-text hover:text-white transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in-0"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setContactModalOpen(false);
            }
          }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-header-text mb-2">Get a Quote</h2>
              <p className="text-header-text-light mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
