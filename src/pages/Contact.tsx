import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="px-4 md:px-[8rem] mb-16">
          <h1 className="font-raleway font-bold text-[48px] md:text-[60px] leading-[1.2] mb-6">
            Get in Touch
          </h1>
          <p className="text-[18px] md:text-[21px] leading-[1.6] text-muted-foreground max-w-[800px]">
            We're always interested in hearing from potential partners, investors, and visionary
            entrepreneurs. Reach out to discuss how we can work together to build sustainable
            enterprises.
          </p>
        </div>

        <div className="px-4 md:px-[8rem] mb-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-[1000px]">
            <div className="contact-info-card bg-card rounded-xl p-6 border border-border">
              <h3 className="font-raleway font-semibold text-[20px] mb-3">Email</h3>
              <a
                href="mailto:info@clarencegroup.com"
                className="text-accent hover:underline text-[16px]"
              >
                info@clarencegroup.com
              </a>
            </div>

            <div className="contact-info-card bg-card rounded-xl p-6 border border-border">
              <h3 className="font-raleway font-semibold text-[20px] mb-3">Location</h3>
              <p className="text-muted-foreground text-[16px]">Lagos, Nigeria</p>
            </div>

            <div className="contact-info-card bg-card rounded-xl p-6 border border-border">
              <h3 className="font-raleway font-semibold text-[20px] mb-3">Business Hours</h3>
              <p className="text-muted-foreground text-[16px]">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>

        <ContactForm />
        <div className="px-4 md:px-[8rem] mt-16">
          <Map />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
