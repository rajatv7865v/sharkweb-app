import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogHero from "@/components/BlogHero";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <BlogHero />
      <BlogList />
      <Footer />
    </div>
  );
}

