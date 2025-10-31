import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Founder = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4 md:px-[8rem]">
        <div className="max-w-[1000px] mx-auto">
          <h1 className="font-raleway font-bold text-[48px] md:text-[60px] leading-[1.2] mb-12">
            Our Founder
          </h1>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="founder-image bg-card rounded-xl overflow-hidden aspect-[3/4] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <p className="text-[18px]">Founder Image</p>
              </div>
            </div>

            <div className="founder-info flex flex-col justify-center">
              <h2 className="font-raleway font-semibold text-[36px] mb-4">Leadership Vision</h2>
              <p className="text-[18px] md:text-[21px] leading-[1.8] text-muted-foreground mb-6">
                Our founder brings decades of experience in strategic investments and business
                development across emerging markets, with a particular focus on Africa's evolving
                economic landscape.
              </p>
              <p className="text-[18px] md:text-[21px] leading-[1.8] text-muted-foreground">
                Driven by a vision to transform investments into sustainable enterprises, our
                leadership has built a reputation for identifying opportunities that create lasting
                impact while generating substantial returns.
              </p>
            </div>
          </div>

          <div className="founder-story bg-card rounded-xl p-8 md:p-12">
            <h3 className="font-raleway font-semibold text-[28px] mb-6">The Journey</h3>
            <div className="space-y-6 text-[17px] md:text-[19px] leading-[1.8] text-muted-foreground">
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Founder;
