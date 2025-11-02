import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState, useEffect } from "react";

const Contact: React.FC = () => {
  // 🌟 Track form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isValid, setIsValid] = useState(false);

  // 🌟 Validate required fields
  useEffect(() => {
    const { firstName, lastName, email, subject, message } = formData;
    setIsValid (firstName && lastName && email && subject && message);
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    alert("✅ Message sent successfully!");
  };

  return (
    <div className="bg-black text-white font-raleway overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* Contact Hero */}
      <section className="text-center py-32 px-[8%]">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Let's Start a Conversation
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Whether you're a potential partner, investor, or have a groundbreaking
          idea, we're here to listen and explore opportunities together.
        </p>
      </section>

      {/* Contact Content */}
      <section className="grid md:grid-cols-[1fr_1.2fr] gap-20 border-[#333] py-20 px-[8%]">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-semibold mb-8">Get in Touch</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-[#4ecdc4] text-xl font-semibold mb-2">
                Email
              </h3>
              <p>
                <a
                  href="mailto:info@clarencegroup.com"
                  className="hover:text-[#4ecdc4] transition"
                >
                  info@clarencegroup.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[#4ecdc4] text-xl font-semibold mb-2">
                Phone
              </h3>
              <p>
                <a
                  href="tel:+2341234567890"
                  className="hover:text-[#4ecdc4] transition"
                >
                  +234 123 456 7890
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[#4ecdc4] text-xl font-semibold mb-2">
                Office Address
              </h3>
              <p>
                123 Victoria Island
                <br />
                Lagos, Nigeria
              </p>
            </div>
            <div>
              <h3 className="text-[#4ecdc4] text-xl font-semibold mb-4">
                Follow Us
              </h3>
              <div className="flex gap-6">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-2xl hover:bg-[#4ecdc4] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition"
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-2xl hover:bg-[#4ecdc4] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-2xl hover:bg-[#4ecdc4] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition"
                >
                  f
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-semibold mb-8">Send us a Message</h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-sm text-white/70 mb-2"
                >
                  First Name *
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-transparent border border-[#333] p-4 rounded focus:border-[#4ecdc4] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="text-sm text-white/70 mb-2"
                >
                  Last Name *
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-transparent border border-[#333] p-4 rounded focus:border-[#4ecdc4] outline-none"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-white/70 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent border border-[#333] p-4 rounded focus:border-[#4ecdc4] outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm text-white/70 mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+234 xxx xxx xxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border border-[#333] p-4 rounded focus:border-[#4ecdc4] outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-sm text-white/70 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-transparent border border-[#333] p-4 rounded focus:border-[#4ecdc4] outline-none"
              >
                <option value="" className="bg-black">
                  Select a subject
                </option>
                <option value="investment" className="bg-black">
                  Investment Inquiry
                </option>
                <option value="partnership" className="bg-black">
                  Partnership Opportunity
                </option>
                <option value="careers" className="bg-black">
                  Career Opportunities
                </option>
                <option value="general" className="bg-black">
                  General Inquiry
                </option>
                <option value="other" className="bg-black">
                  Other
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-sm text-white/70 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                placeholder="Tell us more about how we can help..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-transparent border border-[#333] p-4 rounded min-h-[150px] focus:border-[#4ecdc4] outline-none"
              ></textarea>
            </div>

            {/* ✅ Disabled button logic */}
            <button
              type="submit"
              disabled={!isValid}
              className={`px-10 py-4 rounded font-medium text-lg transform transition
                ${
                  isValid
                    ? "bg-[#4ecdc4] text-black hover:bg-[#3db8b0] hover:-translate-y-1"
                    : "bg-[#4ecdc4]/30 text-gray-400 cursor-not-allowed blur-[-2px]"
                }`}
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 border-t border-[#333]">
        <div className="text-center mb-12 px-4">
          <h2 className="text-5xl font-semibold">Visit Our Office</h2>
        </div>

        {/* Full-width responsive map */}
        <div className="relative w-full pb-[50%] md:pb-[40%] rounded-none overflow-hidden shadow-[0_0_30px_rgba(78,205,196,0.2)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126834.03056801974!2d3.3112429996503026!3d6.524021721415424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1730199041005!5m2!1sen!2sng"
            allowFullScreen
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0"
          ></iframe>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 px-[8%] border-t border-[#333] text-center">
        <h2 className="text-4xl font-semibold mb-12">Office Hours</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 hover:bg-[#0a4d3c] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition">
            <h3 className="text-[#4ecdc4] text-2xl font-semibold mb-2">
              Weekdays
            </h3>
            <p className="text-white/70">
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 hover:bg-[#0a4d3c] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition">
            <h3 className="text-[#4ecdc4] text-2xl font-semibold mb-2">
              Weekends
            </h3>
            <p className="text-white/70">
              Saturday - Sunday
              <br />
              Closed
            </p>
          </div>
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-8 hover:bg-[#0a4d3c] hover:border-[#4ecdc4] transform hover:-translate-y-1 transition">
            <h3 className="text-[#4ecdc4] text-2xl font-semibold mb-2">
              Response Time
            </h3>
            <p className="text-white/70">
              Within 24 hours
              <br />
              on business days
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
