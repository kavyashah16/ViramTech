import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TechnologyStack from "@/components/technology-stack";
import WhyChooseUs from "@/components/why-choose-us";
import ClientSuccess from "@/components/client-success";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologyStack />
        <WhyChooseUs />
        <ClientSuccess />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
