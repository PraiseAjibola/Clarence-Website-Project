import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Process from "@/components/Process";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        {/* Hero Section - Centered Layout */}
        <div className="px-4 md:px-[8rem] mb-24 text-center">
          <div className="max-w-[1100px] mx-auto">
            <div className="inline-block px-6 py-2 bg-accent/20 rounded-full mb-8">
              <span className="text-accent font-raleway text-[14px] font-medium uppercase tracking-wider">
                Our Story
              </span>
            </div>
            <h1 className="font-jacques text-[52px] md:text-[68px] leading-[1.1] mb-8">
              Building Africa's Future,<br />One Investment at a Time
            </h1>
            <p className="text-[19px] md:text-[22px] leading-[1.7] text-muted-foreground max-w-[900px] mx-auto">
              Clarence Gate is a forward-thinking investment holding company dedicated to building
              sustainable enterprises across Africa's most vital sectors.
            </p>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="px-4 md:px-[8rem] mb-24">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <span className="text-accent text-[24px]">🎯</span>
              </div>
              <h3 className="font-raleway font-semibold text-[22px] mb-4">Our Mission</h3>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                To identify and nurture opportunities that drive economic growth while creating
                lasting value for our partners, investors, and communities.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <span className="text-accent text-[24px]">💡</span>
              </div>
              <h3 className="font-raleway font-semibold text-[22px] mb-4">Our Vision</h3>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                To transform bold ideas into thriving businesses by leveraging deep industry
                expertise and strategic partnerships across vital sectors.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                <span className="text-accent text-[24px]">⚡</span>
              </div>
              <h3 className="font-raleway font-semibold text-[22px] mb-4">Our Approach</h3>
              <p className="text-[16px] leading-[1.7] text-muted-foreground">
                Rigorous research, strategic capital deployment, and hands-on operational support
                to ensure measurable impact and enduring value.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <About />

        {/* Process Section */}
        <Process />

        {/* Values Section */}
        <div className="px-4 md:px-[8rem] mt-24">
          <div className="max-w-[1000px] mx-auto">
            <h2 className="font-jacques text-[42px] md:text-[54px] leading-[1.2] mb-16 text-center">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8">
                <h3 className="font-raleway font-semibold text-[24px] mb-4 text-accent">
                  Sustainability
                </h3>
                <p className="text-[17px] leading-[1.7] text-muted-foreground">
                  Every investment is evaluated for its long-term environmental and social impact,
                  ensuring we build enterprises that benefit future generations.
                </p>
              </div>
              <div className="p-8">
                <h3 className="font-raleway font-semibold text-[24px] mb-4 text-accent">
                  Innovation
                </h3>
                <p className="text-[17px] leading-[1.7] text-muted-foreground">
                  We embrace cutting-edge solutions and bold thinking to solve Africa's most
                  pressing challenges and unlock new opportunities.
                </p>
              </div>
              <div className="p-8">
                <h3 className="font-raleway font-semibold text-[24px] mb-4 text-accent">
                  Partnership
                </h3>
                <p className="text-[17px] leading-[1.7] text-muted-foreground">
                  Success comes through collaboration. We work closely with our portfolio companies
                  and stakeholders to achieve shared goals.
                </p>
              </div>
              <div className="p-8">
                <h3 className="font-raleway font-semibold text-[24px] mb-4 text-accent">
                  Excellence
                </h3>
                <p className="text-[17px] leading-[1.7] text-muted-foreground">
                  We maintain the highest standards in everything we do, from due diligence to
                  operational execution and strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
