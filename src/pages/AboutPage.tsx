import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Process from "@/components/Process";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="px-4 md:px-[8rem] mb-16">
          <div className="max-w-[900px]">
            <h1 className="font-raleway font-bold text-[48px] md:text-[60px] leading-[1.2] mb-8">
              About Clarence Gate Group
            </h1>
            <p className="text-[18px] md:text-[21px] leading-[1.8] text-muted-foreground mb-6">
              Clarence Gate is a forward-thinking investment holding company dedicated to building
              sustainable enterprises across Africa's most vital sectors. Our mission is to identify
              and nurture opportunities that drive economic growth while creating lasting value for
              our partners, investors, and the communities we serve.
            </p>
            <p className="text-[18px] md:text-[21px] leading-[1.8] text-muted-foreground mb-6">
              With a portfolio spanning real estate, energy, finance, hospitality, technology, and
              consulting, we leverage deep industry expertise and strategic partnerships to
              transform bold ideas into thriving businesses.
            </p>
            <p className="text-[18px] md:text-[21px] leading-[1.8] text-muted-foreground">
              Our approach combines rigorous research, strategic capital deployment, and hands-on
              operational support to ensure every investment delivers measurable impact and enduring
              value.
            </p>
          </div>
        </div>
        <About />
        <Process />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
