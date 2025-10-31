import { Link } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully subscribed to newsletter!");
  };

  return (
    <footer className="px-4 md:px-[8rem] py-16 border-t border-border">
      <div className="footer-content">
        <div className="footer-brand mb-12">
          <div className="logo-text mb-6">
            <img src="/Images/Logo.png" alt="Clarence Gate Group Logo" className="h-[80px] w-auto" />
          </div>
          <p className="text-muted-foreground text-[16px] leading-[1.6] max-w-[500px]">
            Born from a vision to transform investments into sustainable
            enterprises, we turn bold ideas into lasting impact.
          </p>
        </div>

        <div className="bottom-border h-[1px] bg-border mb-12"></div>

        <div className="footer-links-container grid md:grid-cols-2 gap-12">
          <div className="footer-links">
            <h3 className="font-raleway font-semibold text-[20px] mb-6">Pages</h3>
            <div className="footer-links-grid grid grid-cols-2 gap-4">
              <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/founder" className="text-muted-foreground hover:text-accent transition-colors">
                Our Founder
              </Link>
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact Us
              </Link>
              <Link to="/portfolio" className="text-muted-foreground hover:text-accent transition-colors">
                Our Investment Portfolio
              </Link>
            </div>
          </div>

          <div className="newsletter">
            <h3 className="font-raleway font-semibold text-[20px] mb-6">Join our Newsletter</h3>
            <form className="newsletter-form flex gap-4" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <button
                type="submit"
                className="newsletter-btn bg-accent text-accent-foreground px-6 py-3 rounded-lg font-raleway font-medium flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                <span>Subscribe</span>
                <img src="/Images/arrow-right.png" alt="" className="w-4 h-4 invert" />
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-[14px]">
            © {new Date().getFullYear()} Clarence Gate Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
