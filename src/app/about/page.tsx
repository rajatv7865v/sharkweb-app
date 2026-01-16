import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStory from "@/components/AboutStory";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import AboutStats from "@/components/AboutStats";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <Footer />
    </div>
  );
}

