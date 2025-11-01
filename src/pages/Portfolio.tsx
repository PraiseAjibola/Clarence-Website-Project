import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Industries from "@/components/Industries";
import Focuses from "@/components/FocusesSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        {/* Hero Section with Side Layout */}
        <div className="px-4 md:px-[8rem] mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-jacques text-[56px] md:text-[72px] leading-[1.1] mb-8">
                Investment Portfolio
              </h1>
              <div className="h-1 w-24 bg-accent mb-8"></div>
              <p className="text-[17px] md:text-[19px] leading-[1.8] text-muted-foreground">
                Discover our diverse portfolio of sustainable enterprises across Africa's most vital
                sectors. Each investment represents our commitment to building lasting value and
                transformative impact.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-raleway font-semibold text-[24px] mb-6">Portfolio Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-[20px]">6</span>
                  </div>
                  <span className="text-[16px]">Active Sectors</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-[20px]">15+</span>
                  </div>
                  <span className="text-[16px]">Strategic Partnerships</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-[20px]">10+</span>
                  </div>
                  <span className="text-[16px]">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <Focuses/>

        {/* Call to Action Section */}
        <div className="px-4 md:px-[8rem] mt-24">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16 text-center">
            <h2 className="font-jacques text-[36px] md:text-[48px] leading-[1.2] mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-[18px] leading-[1.6] text-muted-foreground max-w-[600px] mx-auto mb-8">
              We're always looking for innovative opportunities and strategic partnerships
              that align with our vision.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-raleway font-medium text-[18px] hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <span>→</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
