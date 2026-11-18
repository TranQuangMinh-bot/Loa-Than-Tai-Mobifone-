import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FloatingContact from "@/components/FloatingContact";
import Reasons from "@/components/Reasons";
import Solution from "@/components/Solution";
import BusinessTypes from "@/components/BusinessTypes";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <HowItWorks />
        <Reasons />
        <Solution />
        <BusinessTypes />
        <Testimonials />
        <Gallery />
        <Faq />
        <Contact />
        <Footer />
      </main>
      <FloatingContact />
    </>
  );
}