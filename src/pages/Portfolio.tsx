import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Industries from "@/components/Industries";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="px-4 md:px-[8rem] mb-16">
          <h1 className="font-raleway font-bold text-[48px] md:text-[60px] leading-[1.2] mb-6">
            Our Investment Portfolio
          </h1>
          <p className="text-[18px] md:text-[21px] leading-[1.6] text-muted-foreground max-w-[800px]">
            Discover our diverse portfolio of sustainable enterprises across Africa's most vital
            sectors. Each investment represents our commitment to building lasting value and
            transformative impact.
          </p>
        </div>
        <Industries />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
