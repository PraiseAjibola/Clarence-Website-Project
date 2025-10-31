import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        {/* Hero Section - Full Width with Overlay Text */}
        <div className="px-4 md:px-[8rem] mb-24">
          <div className="relative bg-gradient-to-br from-accent/5 to-transparent rounded-3xl overflow-hidden p-12 md:p-20">
            <div className="max-w-[800px]">
              <div className="inline-block px-4 py-1 bg-accent/30 rounded-full mb-6">
                <span className="text-accent font-raleway text-[12px] font-semibold uppercase tracking-wider">
                  Leadership
                </span>
              </div>
              <h1 className="font-jacques text-[48px] md:text-[64px] leading-[1.1] mb-6">
                Meet Our Founder
              </h1>
              <p className="text-[19px] md:text-[22px] leading-[1.7] text-muted-foreground">
                Decades of strategic vision, transforming Africa's investment landscape through
                sustainable enterprise development.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="px-4 md:px-[8rem] mb-24">
          <div className="grid md:grid-cols-5 gap-12 max-w-[1200px] mx-auto">
            <div className="md:col-span-2">
              <div className="sticky top-8">
                <div className="founder-image bg-card rounded-2xl overflow-hidden aspect-[3/4] flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <p className="text-[18px]">Founder Image</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <h3 className="font-raleway font-semibold text-[22px]">Key Achievements</h3>
                  <div className="space-y-2 text-[15px] text-muted-foreground">
                    <p>• 10+ Years Investment Experience</p>
                    <p>• 6 Active Sector Portfolios</p>
                    <p>• 15+ Strategic Partnerships</p>
                    <p>• Pan-African Market Expertise</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-12">
              <div>
                <h2 className="font-jacques text-[38px] md:text-[46px] leading-[1.2] mb-6">
                  Leadership Vision
                </h2>
                <div className="space-y-6 text-[17px] md:text-[19px] leading-[1.8] text-muted-foreground">
                  <p>
                    Our founder brings decades of experience in strategic investments and business
                    development across emerging markets, with a particular focus on Africa's evolving
                    economic landscape.
                  </p>
                  <p>
                    Driven by a vision to transform investments into sustainable enterprises, our
                    leadership has built a reputation for identifying opportunities that create lasting
                    impact while generating substantial returns.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="font-raleway font-semibold text-[26px] mb-6">The Journey</h3>
                <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.8] text-muted-foreground">
                  <p>
                    Founded on the principle that strategic capital, combined with operational
                    expertise, can unlock transformative value, Clarence Gate Group represents years of
                    dedication to building sustainable businesses across Africa.
                  </p>
                  <p>
                    Through careful selection of industries and opportunities, we've established a
                    portfolio that addresses critical market needs while maintaining our commitment to
                    sustainable growth and community impact.
                  </p>
                  <p>
                    Our approach is grounded in deep market knowledge, rigorous analysis, and a
                    long-term perspective that prioritizes enduring value over short-term gains.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
                  <h4 className="font-raleway font-semibold text-[20px] mb-3 text-accent">
                    Investment Philosophy
                  </h4>
                  <p className="text-[15px] leading-[1.7] text-muted-foreground">
                    Long-term value creation through strategic capital deployment and operational excellence.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
                  <h4 className="font-raleway font-semibold text-[20px] mb-3 text-accent">
                    Market Focus
                  </h4>
                  <p className="text-[15px] leading-[1.7] text-muted-foreground">
                    Africa's emerging sectors with high growth potential and sustainable impact opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="px-4 md:px-[8rem]">
          <div className="max-w-[900px] mx-auto text-center py-16">
            <div className="text-accent text-[48px] mb-6">"</div>
            <blockquote className="font-jacques text-[28px] md:text-[36px] leading-[1.4] mb-8">
              Strategic capital, combined with operational expertise, unlocks transformative
              value across Africa's most promising sectors.
            </blockquote>
            <p className="text-[16px] text-muted-foreground">— Founder, Clarence Gate Group</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Founder;
