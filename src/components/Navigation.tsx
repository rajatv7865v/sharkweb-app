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
      scrolled 
        ? "bg-white/98 backdrop-blur-xl shadow-lg border-b border-gray-200/50" 
        : "bg-white/90 backdrop-blur-md border-b border-gray-100/50"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 z-10">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
          <div className="relative group">
              <Link 
                href="/" 
                className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 rounded-lg hover:bg-header-primary/5 relative group"
              >
                Home
              
              </Link>
           
            </div>
            <Link 
              href="/about" 
              className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-header-primary/5"
            >
              About
            </Link>
            <div className="relative group">
              <Link 
                href="/services" 
                className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 rounded-lg hover:bg-header-primary/5 relative group"
              >
                Services
              
              </Link>
           
            </div>

            <div className="relative group">
              <Link 
                href="/solutions" 
                className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 rounded-lg hover:bg-header-primary/5"
              >
                Solutions
                <svg 
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-[420px] bg-white rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200/50 p-6 z-50 backdrop-blur-xl">
                <div className="space-y-2">
                  <Link href="/solutions/enterprise" className="block group/item p-4 rounded-xl hover:bg-gradient-to-r hover:from-header-primary/5 hover:via-header-secondary/5 hover:to-header-accent/5 transition-all duration-200 border border-transparent hover:border-header-primary/20">
                    <div className="font-bold text-header-text group-hover/item:text-header-primary transition-colors text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-header-primary opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                      Enterprise Solutions
                    </div>
                    <div className="text-sm text-header-text-light mt-1.5 group-hover/item:text-header-text">Scalable solutions for large organizations</div>
                  </Link>
                  <Link href="/solutions/saas" className="block group/item p-4 rounded-xl hover:bg-gradient-to-r hover:from-header-primary/5 hover:via-header-secondary/5 hover:to-header-accent/5 transition-all duration-200 border border-transparent hover:border-header-primary/20">
                    <div className="font-bold text-header-text group-hover/item:text-header-primary transition-colors text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-header-primary opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                      SaaS Development
                    </div>
                    <div className="text-sm text-header-text-light mt-1.5 group-hover/item:text-header-text">Build subscription-based platforms</div>
                  </Link>
                  <Link href="/solutions/api-integration" className="block group/item p-4 rounded-xl hover:bg-gradient-to-r hover:from-header-primary/5 hover:via-header-secondary/5 hover:to-header-accent/5 transition-all duration-200 border border-transparent hover:border-header-primary/20">
                    <div className="font-bold text-header-text group-hover/item:text-header-primary transition-colors text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-header-primary opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                      API Integration
                    </div>
                    <div className="text-sm text-header-text-light mt-1.5 group-hover/item:text-header-text">Connect systems seamlessly</div>
                  </Link>
                  <Link href="/solutions/devops" className="block group/item p-4 rounded-xl hover:bg-gradient-to-r hover:from-header-primary/5 hover:via-header-secondary/5 hover:to-header-accent/5 transition-all duration-200 border border-transparent hover:border-header-primary/20">
                    <div className="font-bold text-header-text group-hover/item:text-header-primary transition-colors text-base flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-header-primary opacity-0 group-hover/item:opacity-100 transition-opacity"></span>
                      DevOps & CI/CD
                    </div>
                    <div className="text-sm text-header-text-light mt-1.5 group-hover/item:text-header-text">Automate deployment pipelines</div>
                  </Link>
                </div>
              </div>
            </div>

            <Link 
              href="/case-studies" 
              className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-header-primary/5"
            >
              Case Studies
            </Link>

          

          

            <Link 
              href="/contact" 
              className="text-header-text hover:text-header-primary px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg hover:bg-header-primary/5"
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
           
            <Link
              href="/contact"
              className="bg-gradient-to-r from-header-primary via-header-secondary to-header-accent text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:from-header-primary/95 hover:via-header-secondary/95 hover:to-header-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform relative overflow-hidden group"
            >
              <span className="relative z-10">Start Project</span>
              <span className="absolute inset-0 bg-gradient-to-r from-header-primary via-header-secondary to-header-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-header-text hover:text-header-primary p-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/50 bg-white/98 backdrop-blur-xl animate-in slide-in-from-top">
          <div className="px-4 pt-6 pb-8 space-y-2">
            <div className="mb-6">
              <div className="text-xs font-bold text-header-text-light uppercase tracking-wider mb-4 px-4">Services</div>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                View All Services
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Custom Software Development
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Cloud Solutions
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Web & Mobile Apps
              </Link>
            </div>
            <div className="mb-6">
              <div className="text-xs font-bold text-header-text-light uppercase tracking-wider mb-4 px-4">Company</div>
              <Link 
                href="/case-studies" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Case Studies
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                About
              </Link>
              <Link 
                href="/blog" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-header-text hover:bg-header-primary/5 rounded-xl transition-all duration-200 font-semibold border border-transparent hover:border-header-primary/20"
              >
                Contact
              </Link>
            </div>
            <div className="pt-4 border-t border-gray-200/50 space-y-3">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3.5 bg-gradient-to-r from-header-primary via-header-secondary to-header-accent text-white rounded-xl text-center font-bold hover:from-header-primary/95 hover:via-header-secondary/95 hover:to-header-accent-hover transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Project
              </Link>
              <button
                onClick={() => {
                  setContactModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full px-4 py-3.5 border-2 border-header-primary/30 text-header-text rounded-xl text-center font-bold hover:bg-header-primary/5 hover:border-header-primary/50 transition-all duration-200"
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in-0"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setContactModalOpen(false);
            }
          }}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 slide-in-from-bottom-4">
            {/* Close button */}
            <button
              onClick={() => setContactModalOpen(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 transition-colors z-10 p-2 rounded-lg hover:bg-gray-100"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal content */}
            <div className="p-8 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get a Quote</h2>
              <p className="text-gray-600 mb-8 text-lg">Fill out the form below and we'll get back to you as soon as possible.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
