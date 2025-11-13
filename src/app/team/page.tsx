import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutTeam from "@/components/AboutTeam";
import AboutHero from "@/components/AboutHero";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <AboutTeam />
      <Footer />
    </div>
  );
}

