import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DataSources from "@/components/DataSources";
import Benefits from "@/components/Benefits";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <DataSources />
      <Benefits />
      <ServicesCTA />
      <Footer />
    </div>
  );
}
