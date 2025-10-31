import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ email: "", name: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact px-4 md:px-[8rem] py-20" id="contact">
      <div className="contact-header mb-12">
        <h2 className="font-raleway font-semibold text-[24px] md:text-[32px] text-center">
          Send us a message at{" "}
          <span className="email text-accent">info@clarencegroup.com</span>
        </h2>
      </div>
      <form className="contact-form max-w-[800px] mx-auto" onSubmit={handleSubmit}>
        <div className="form-row grid md:grid-cols-2 gap-6 mb-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
        </div>
        <div className="form-group mb-6">
          <textarea
            name="message"
            placeholder="Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-6 py-4 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="submit-btn bg-accent text-accent-foreground px-8 py-4 rounded-lg font-raleway font-medium text-[18px] flex items-center gap-3 hover:opacity-90 transition-opacity mx-auto"
        >
          <span className="submit-btnn">Send</span>
          <span className="arrow">
            <img src="/Images/arrow-right.png" alt="" className="w-5 h-5 invert" />
          </span>
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
