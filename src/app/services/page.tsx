import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import ServicesProcess from "@/components/ServicesProcess";
import ServicesCTA from "@/components/ServicesCTA";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
      <Footer />
    </div>
  );
}

