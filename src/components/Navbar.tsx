import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // ✅ Smooth scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => scrollToSection("home")}>

  {/* ✅ Logo Image */}
<img
  src="/logo.png"
  alt="Gen6 Software Logo"
  className="logo-img"
/>

  {/* ✅ Styled Text */}
  <span className="logo-text">
    Gen6 Software
  </span>

</Link>

        {/* NAV LINKS */}
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Main Navigation">

          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("portfolio")}>Portfolio</button>
          <button onClick={() => scrollToSection("team")}>Team</button>

          {/* 🔥 SERVICES DROPDOWN */}
          <div
            className="dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            {/* MAIN BUTTON */}
            <button
              className="dropdown-toggle"
              onClick={() => scrollToSection("services")}
            >
              Services ▾
            </button>

            {/* DROPDOWN MENU */}
            <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>

              <Link to="/service-details?id=web-dev" onClick={() => setOpen(false)}>
                Web Development
              </Link>

              <Link to="/service-details?id=software" onClick={() => setOpen(false)}>
                Software Development
              </Link>

              <Link to="/service-details?id=custom-software" onClick={() => setOpen(false)}>
                Custom Software
              </Link>

              <Link to="/service-details?id=ecommerce" onClick={() => setOpen(false)}>
                E-Commerce Solutions
              </Link>
              
              <Link to="/service-details?id=seo" onClick={() => setOpen(false)}>
                SEO Optimization
              </Link>

                <div className="sub-dropdown">
    <span className="sub-title">Design ▸</span>

    <div className="sub-menu">
      <Link to="/service-details?id=graphic-design">Graphic Design</Link>
      <Link to="/service-details?id=poster-design">Poster Design</Link>
      <Link to="/service-details?id=social-media">Social Media Design</Link>
    </div>
  </div>

              

            </div>
          </div>

          <button onClick={() => scrollToSection("contact")}>Contact</button>

        </nav>

        {/* CTA + HAMBURGER */}
        <div className="nav-cta">

          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get Started
          </button>

          <button
            className="hamburger"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </div>
    </header>
  );
}