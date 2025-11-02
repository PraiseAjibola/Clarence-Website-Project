import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VideoBackground from "@/components/VideoBackground";

export default function AboutPage() {
  const coreValues = [
    {
      icon: "💡",
      title: "Innovation",
      text: "We embrace forward-thinking approaches and cutting-edge solutions that drive progress and create competitive advantages.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      text: "We conduct business with the highest ethical standards, transparency, and accountability in every decision we make.",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      text: "We build enterprises designed to thrive for generations, creating value that extends beyond financial returns.",
    },
    {
      icon: "⚡",
      title: "Excellence",
      text: "We pursue operational excellence and best-in-class performance across every aspect of our portfolio.",
    },
    {
      icon: "🎯",
      title: "Strategic Focus",
      text: "We maintain disciplined investment criteria and concentrate our resources where we can create maximum impact.",
    },
    {
      icon: "🌍",
      title: "Community Impact",
      text: "We measure success not just in returns, but in the positive change we create in communities across Africa.",
    },
  ];

  return (
    <div className="bg-black text-white overflow-x-hidden font-raleway">
      {/* --- HERO SECTION --- */}
      <VideoBackground videoSrc="/BgVid.mp4">
        <Header variant="transparent" />

        <section className="text-center px-[8%] md:pt-32 pt-12 pb-16 transition-opacity duration-700 opacity-100">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto mb-6">
            Building Africa's Future Through Strategic Investment
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            We are more than an investment firm—we are architects of sustainable
            growth, committed to transforming bold ideas into enterprises that
            create lasting value.
          </p>
        </section>
      </VideoBackground>

      {/* --- MISSION & VISION --- */}
      <section className="px-[8%] py-20 grid md:grid-cols-2 gap-12 border-t border-gray-700">
        {[
          {
            title: "Our Mission",
            text: "To identify, invest in, and nurture exceptional businesses that drive economic growth, create employment opportunities, and deliver sustainable returns.",
          },
          {
            title: "Our Vision",
            text: "To be Africa's most trusted investment holding company, known for strategic foresight and long-term impact.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-12 rounded-xl border border-teal-300/20 bg-gradient-to-br from-teal-300/5 to-black/40 transition-transform duration-500 hover:-translate-y-2"
          >
            <h2 className="text-4xl font-semibold text-teal-300 mb-6">
              {item.title}
            </h2>
            <p className="text-lg leading-8 text-white/85">{item.text}</p>
          </div>
        ))}
      </section>

      {/* --- OUR STORY --- */}
      <section className="px-[8%] py-20 border-t border-gray-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">Our Story</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-8 text-white/85">
          <p>
            Clarence Gate was founded on a simple yet powerful belief: that
            Africa's greatest opportunities lie in building sustainable
            enterprises that address real needs while generating exceptional
            returns.
          </p>
          <p>
            Over the years, we've cultivated a diverse portfolio spanning real
            estate, energy, finance, hospitality, technology, and consulting.
          </p>
          <p>
            Today, Clarence Gate stands as a testament to strategic thinking,
            patient capital, and the power of building for the long term.
          </p>
        </div>
      </section>

      {/* --- CORE VALUES (3D FLIP) --- */}
      <section className="px-[8%] py-20 border-t border-gray-700 relative">
        <style>{`
          .flip-card {
            perspective: 1200px;
            height: 260px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
            transition: transform 0.8s ease;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
            overflow: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our Core Values
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {coreValues.map((value, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* FRONT SIDE */}
                <div className="flip-card-front p-10 bg-[#1a1a1a] border h-full border-white/10 rounded-xl flex flex-col items-start justify-start transition-transform hover:-translate-y-1">
                  <div className="w-14 bg-teal-300 rounded-full flex items-center h-20 justify-center mb-6 text-2xl">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                  <h5>{value.text}</h5>
                </div>

                {/* BACK SIDE */}
                <div className="flip-card-back p-10 bg-[#0f1a1a] border border-teal-300/20 rounded-xl flex flex-col items-center justify-center text-center">
                  <h3 className="text-2xl font-semibold text-teal-300 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-base leading-7">
                    {value.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OUR PROJECTS --- */}
      <section className="px-3 md:px-[8%] py-20 border-t border-gray-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">Our Projects</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            A glimpse into some of the premium residential and commercial
            properties we’ve developed across Africa.
          </p>
        </div>

        <div className="space-y-20">
          {/* PROJECT GROUP 1 */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="flex-1 relative group overflow-hidden rounded-2xl">
              <img
                src="/Images/projects1.jpg"
                alt="Project 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Lagos Smart Estate
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              {[
                {
                  src: "/Images/projects2.jpg",
                  title: "Abuja Business Hub",
                },
                {
                  src: "/Images/projects3.jpg",
                  title: "Accra Luxury Homes",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl h-1/2 transform transition-transform duration-500 hover:scale-105"
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT GROUP 2 */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 items-stretch">
            <div className="flex-1 relative group overflow-hidden rounded-2xl">
              <img
                src="/Images/projects4.jpg"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <h3 className="text-xl font-semibold text-white">
                  Nairobi Tech Towers
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-8 flex-1">
              {[
                {
                  src: "/Images/projects6.jpg",
                  title: "Cape Town Seaside Villas",
                },
                {
                  src: "/Images/projects5.jpg",
                  title: "Accra Green Residences",
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-2xl h-1/2 transform transition-transform duration-500 hover:scale-105"
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <h3 className="text-xl font-semibold text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT STATS --- */}
      <section className="px-[8%] py-20 border-t border-gray-700">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Our Impact in Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            { num: "10+", label: "Portfolio Companies" },
            { num: "$50M+", label: "Capital Deployed" },
            { num: "5+", label: "Core Sectors" },
            { num: "10+", label: "Years of Excellence" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center transition-transform duration-300 hover:scale-105"
            >
              <div className="lg:text-6xl text-[40px] font-bold text-teal-300 mb-2">
                {item.num}
              </div>
              <div className="text-white/70 text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
