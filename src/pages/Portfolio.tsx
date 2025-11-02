import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from 'react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const sectors = [
    {
      id: 'real-estate',
      icon: '🏢',
      title: 'Real Estate',
      companies: [
        {
          name: 'Dealo Global Services Limited',
          year: 'Est. 2022',
          desc: 'Leading property development company focused on sustainable residential and commercial projects across West Africa.',
          tags: ['Development', 'Commercial', 'Residential'],
          image: "/Images/Card1.jpg",
        },
        {
          name: 'Dealo Energy Limited',
          year: 'Est. 2009',
          desc: 'Pioneering renewable energy solutions and sustainable power infrastructure for urban and rural development.',
          tags: ['Renewable Energy', 'Infrastructure'],
          image: "/Images/Card2.jpg",
        },
      ],
    },
    {
      id: 'finance',
      icon: '💰',
      title: 'Finance & Insurance',
      companies: [
        {
          name: 'Turboserv Insurance Limited',
          year: 'Est. 2022',
          desc: 'Innovative insurance solutions providing comprehensive coverage and risk management services for businesses and individuals.',
          tags: ['Insurance', 'Risk Management', 'Coverage'],
          image: "/Images/TURBOSERV_LOGO_4x-100-removebg-preview.png",
        },
      ],
    },
    {
      id: 'hospitality',
      icon: '🏨',
      title: 'Hospitality',
      companies: [
        {
          name: 'Premier Hotels & Resorts',
          year: 'Est. 2020',
          desc: 'Delivering world-class hospitality experiences with a portfolio of hotels and resorts across prime African destinations.',
          tags: ['Hotels', 'Resorts', 'Tourism'],
            image: "/Images/Card4.jpg",
        },
        {
          name: 'Premier Hotels & Resorts',
          year: 'Est. 2020',
          desc: 'Delivering world-class hospitality experiences with a portfolio of hotels and resorts across prime African destinations.',
          tags: ['Hotels', 'Resorts', 'Tourism'],
            image: "/Images/Card5.jpg",
        },
      ],
    },
    {
      id: 'technology',
      icon: '💻',
      title: 'Technology',
      companies: [
        {
          name: '20B Limited',
          year: 'Est. 2022',
          desc: 'Cutting-edge technology solutions powering digital transformation for businesses across Africa.',
          tags: ['Software', 'Digital Solutions', 'Innovation'],
            image: "/Images/Card8.jpg",
        },
      ],
    },
    {
      id: 'consulting',
      icon: '📊',
      title: 'Consulting',
      companies: [
        {
          name: 'Clarence Advisory Services',
          year: 'Est. 2018',
          desc: 'Strategic consulting firm helping businesses navigate complex challenges and unlock growth opportunities.',
          tags: ['Strategy', 'Advisory', 'Growth'],
            image: "/Images/Card9.jpg",
        },
        {
          name: 'Clarence Advisory Services',
          year: 'Est. 2018',
          desc: 'Strategic consulting firm helping businesses navigate complex challenges and unlock growth opportunities.',
          tags: ['Strategy', 'Advisory', 'Growth'],
            image: "/Images/Card7.jpg",
        },
      ],
    },
  ];

  const filters = ['all', 'real-estate', 'finance', 'hospitality', 'technology', 'consulting'];

  return (
    <div className="bg-black text-white font-raleway overflow-x-hidden">
      {/* Header */}
      {/* <header className="flex justify-between items-center py-8 px-[8%] bg-black">
        <div className="logo">
          <img src="./Images/Logo.png" alt="Clarence Gate Logo" className="h-[90px] w-auto" />
        </div>
        <nav className="hidden md:flex gap-8">
          {['Home', 'About Us', 'Portfolio', 'Our Founder', 'Contact'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, '')}.html`}
              className="text-white text-[16px] hover:text-[#4ecdc4] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </header> */}
      <Header/>

      {/* Hero Section */}
      <section className="text-center px-[8%]  pb-16">
        <h1 className="lg:text-[60px] text-[50px] font-bold leading-tight mb-6 md:text-[57px]">Our Investment Portfolio</h1>
        <p className="text-[21px] text-white/80 max-w-3xl mx-auto mb-12 md:text-[18px]">
          A diversified collection of exceptional businesses driving growth and innovation across Africa's most promising sectors.
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full border border-white/30 text-[16px] transition-all ${
                activeFilter === filter
                  ? 'bg-[#4ecdc4] border-[#4ecdc4] text-black'
                  : 'bg-transparent text-white hover:bg-[#4ecdc4] hover:text-black'
              }`}
            >
              {filter === 'all'
                ? 'All Investments'
                : filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-[8%] pb-20">
        {sectors
          .filter((s) => activeFilter === 'all' || s.id === activeFilter)
          .map((sector) => (
            <div key={sector.id} className="mb-20">
              <div className="flex items-center gap-4 mb-12 border-b-2 border-[#4ecdc4] pb-4">
                <span className="text-[40px]">{sector.icon}</span>
                <h2 className="text-[40px] font-semibold md:text-[28px]">{sector.title}</h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {sector.companies.map((company, idx) => (
                  <div
                    key={idx}
                    className="bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden transition-all hover:-translate-y-2 hover:border-[#4ecdc4] hover:shadow-[0_10px_30px_rgba(78,205,196,0.3)]"
                  >
                    <div className="h-[220px] flex contain justify-center text-2xl font-semibold text-white bg-gradient-to-br from-[#4ecdc4] to-[#0a4d3c]">
                      {/* {company.name.split(' ')[0]} */}
                      <img src={company.image} />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-[24px] font-semibold mb-1">{company.name}</h3>
                          <p className="text-[#4ecdc4] text-[14px] font-semibold">{company.year}</p>
                        </div>
                      </div>
                      <p className="text-[16px] text-white/70 leading-relaxed mb-6">{company.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {company.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1 text-[#4ecdc4] text-[12px] border border-[#4ecdc4]/30 rounded-full bg-[#4ecdc4]/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[16px] text-white hover:text-[#4ecdc4] transition-colors"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </section>

      {/* Stats Section */}
      <section className="px-[8%] py-20 border-t border-[#333] text-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {[
            { number: '10+', label: 'Portfolio Companies' },
            { number: '5', label: 'Core Sectors' },
            { number: '$50M+', label: 'Total Investment' },
            { number: '100%', label: 'Success Rate' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl border border-[#4ecdc4]/20 bg-gradient-to-br from-[#4ecdc4]/5 to-black/30"
            >
              <div className="text-[50px] font-bold text-[#4ecdc4] mb-2">{stat.number}</div>
              <div className="text-[16px] text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
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

      {/* Footer */}
      <Footer/>
{/* 
      <footer className="border-t border-[#333] py-12 text-center text-white/60 text-[14px]">
        &copy; 2024 Clarence Gate Group. All rights reserved.
      </footer> */}
    </div>
  );
};
export default Portfolio;



