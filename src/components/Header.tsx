import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  variant?: "transparent" | "default";
}

const Header = ({ variant = "default" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const navContainer = document.getElementById("navContainer");
      const hamburger = document.getElementById("hamburger");

      if (
        isMenuOpen &&
        navContainer &&
        !navContainer.contains(target) &&
        hamburger &&
        !hamburger.contains(target)
      ) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className={`flex justify-between items-center px-4 md:px-[8%] w-full z-[100] ${variant === "transparent" ? "bg-transparent" : "bg-background py-8 backdrop-blur-[10px]"}`}>
      <Link to="/" className="logo">
        <img
          src="/Images/Logo.png"
          alt="Clarence Gate Group Logo"
          className="lg:h-[90px] h-[80px] w-auto"
        />
      </Link>

      <div
        id="hamburger"
        className={`hamburger w-[30px] h-[23px] items-center lg:h-[24px] relative cursor-pointer flex flex-col justify-between z-[1100] transition-opacity duration-400 ${
          isMenuOpen ? "opacity-0 pointer-events-none" : ""
        }`}
        onClick={toggleMenu}
      >
        <span className="block h-[3px] w-full bg-foreground rounded-[10px] transition-all duration-400"></span>
        <span className="block h-[3px] w-full bg-foreground rounded-[10px] transition-all duration-400"></span>
      </div>

      <div
        id="navContainer"
        className={`nav-container fixed top-[50px] w-[664px] max-w-[90%] bg-background border-l border-b border-border p-[60px_80px] transition-all duration-1000 ease-in-out z-[1000] ${
          isMenuOpen ? "right-8 lg:right-[30%] xl:right-[50%]" : "-right-full"
        }`}
        style={{
          boxShadow: "0 3px 6px rgba(var(--glow-rgb), 0.534)",
        }}
      >
        <div className="glow-top absolute top-[-2px] left-[-2px] w-full h-[2px] pointer-events-none bg-gradient-to-r from-white/30 to-transparent"></div>
        <div className="glow-left absolute top-[-2px] left-[-2px] w-[2px] h-full pointer-events-none bg-gradient-to-b from-white/30 via-transparent via-30% to-[hsl(var(--glow))]"></div>
        <div className="glow-bottom absolute bottom-[-2px] left-[-2px] w-full h-[2px] pointer-events-none bg-gradient-to-r from-[hsl(var(--glow))] to-transparent"></div>

        <button
          id="closeBtn"
          className="close-btn absolute top-[30px] right-[30px] w-[40px] h-[40px] cursor-pointer bg-none border-none before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:w-[30px] before:h-[2px] before:bg-foreground before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:w-[30px] after:h-[2px] after:bg-foreground after:-translate-x-1/2 after:-translate-y-1/2 after:-rotate-45"
          aria-label="Close menu"
          onClick={closeMenu}
        ></button>

        <h2 className="text-foreground text-[32px] font-normal mb-[50px] tracking-[-0.5px]">
          Pages
        </h2>

        <nav className="nav-grid grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          {[
            { path: "/", label: "Home" },
            { path: "/portfolio", label: "Our Investment Portfolio" },
            { path: "/about", label: "About Us" },
            { path: "/founder", label: "Our Founder" },
            { path: "/contact", label: "Contact Us" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`relative text-foreground no-underline text-[23px] font-light transition-all duration-300 hover:opacity-60 pb-2
        ${
          location.pathname === item.path
            ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-white after:rounded-full"
            : ""
        }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
