import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import HowItWorks from "@/components/HowItWorks";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesCarousel />
      <HowItWorks />
      <ServicesGrid />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
