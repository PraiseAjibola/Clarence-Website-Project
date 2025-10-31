import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        {/* Split Hero Section */}
        <div className="px-4 md:px-[8rem] mb-20">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-[1400px]">
            <div>
              <h1 className="font-jacques text-[52px] md:text-[66px] leading-[1.1] mb-8">
                Let's Build<br />Something Great
              </h1>
              <p className="text-[18px] md:text-[21px] leading-[1.7] text-muted-foreground mb-12">
                We're always interested in hearing from potential partners, investors, and visionary
                entrepreneurs. Reach out to discuss how we can work together to build sustainable
                enterprises.
              </p>
              
              {/* Contact Information Cards - Vertical Stack */}
              <div className="space-y-6">
                <div className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-[20px]">✉</span>
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-[18px] mb-2">Email Us</h3>
                    <a
                      href="mailto:info@clarencegroup.com"
                      className="text-accent hover:underline text-[15px]"
                    >
                      info@clarencegroup.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-[20px]">📍</span>
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-[18px] mb-2">Visit Us</h3>
                    <p className="text-muted-foreground text-[15px]">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-[20px]">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-raleway font-semibold text-[18px] mb-2">Business Hours</h3>
                    <p className="text-muted-foreground text-[15px]">Monday - Friday</p>
                    <p className="text-muted-foreground text-[15px]">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="bg-card rounded-2xl p-8 md:p-10 border border-border">
              <h2 className="font-raleway font-semibold text-[28px] mb-6">Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="px-4 md:px-[8rem] mt-20">
          <div className="mb-8">
            <h2 className="font-jacques text-[36px] md:text-[46px] leading-[1.2] mb-4">
              Find Our Office
            </h2>
            <p className="text-[17px] text-muted-foreground">
              Located in the heart of Lagos, we're easily accessible for meetings and consultations.
            </p>
          </div>
          <Map />
        </div>

        {/* Additional Info Section */}
        <div className="px-4 md:px-[8rem] mt-20">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16">
            <div className="max-w-[800px] mx-auto text-center">
              <h2 className="font-jacques text-[32px] md:text-[42px] leading-[1.2] mb-6">
                Interested in Partnership Opportunities?
              </h2>
              <p className="text-[17px] md:text-[19px] leading-[1.7] text-muted-foreground mb-8">
                We're always looking to connect with innovative entrepreneurs, strategic investors,
                and industry experts who share our vision for sustainable growth across Africa.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-raleway font-medium text-[16px] hover:opacity-90 transition-opacity"
                >
                  View Portfolio
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-raleway font-medium text-[16px] border border-border hover:bg-accent/10 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
