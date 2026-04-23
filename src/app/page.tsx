import { Header, Footer, WhatsAppFloat } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { 
  Segments, 
  About, 
  Partners, 
  Pests, 
  HowItWorks, 
  Quote, 
  Testimonials, 
  Gallery, 
  FAQ, 
  CTAFinal 
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Segments />
        <About />
        <Partners />
        <Pests />
        <HowItWorks />
        <Quote />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
