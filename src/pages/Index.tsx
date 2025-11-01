import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Map from "@/components/Map";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Industries />
        <Process />
        <Map />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
