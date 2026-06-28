import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <img
            src="/logo.png"
            alt="Gen6 Software Logo"
            className="logo-img"
          />

          <span className="logo-text">
            Gen6 Software
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className={`nav-links ${open ? "open" : ""}`}>

          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link to="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link to="/team" onClick={() => setOpen(false)}>
            Team
          </Link>

          {/* SERVICES DROPDOWN */}
<div
  className="dropdown"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <Link
    to="/services"
    className="dropdown-toggle"
    onClick={() => setOpen(false)}
  >
    Services ▾
  </Link>

  <div className={`dropdown-menu ${servicesOpen ? "show" : ""}`}>

    <Link
      to="/services/web-dev"
      onClick={() => setOpen(false)}
    >
      Web Development
    </Link>

    <Link
      to="/services/software"
      onClick={() => setOpen(false)}
    >
      Software Development
    </Link>

    <Link
      to="/services/custom-software"
      onClick={() => setOpen(false)}
    >
      Custom Software
    </Link>

    <Link
      to="/services/ecommerce"
      onClick={() => setOpen(false)}
    >
      E-Commerce Solutions
    </Link>

    <Link
      to="/services/seo"
      onClick={() => setOpen(false)}
    >
      SEO Optimization
    </Link>

    {/* SUB MENU */}
    <div className="sub-dropdown">

      <span className="sub-title">
        Design ▸
      </span>

      <div className="sub-menu">

        <Link
          to="/services/graphic-design"
          onClick={() => setOpen(false)}
        >
          Graphic Design
        </Link>

        <Link
          to="/services/poster-design"
          onClick={() => setOpen(false)}
        >
          Poster Design
        </Link>

        <Link
          to="/services/social-media"
          onClick={() => setOpen(false)}
        >
          Social Media Design
        </Link>

      </div>

    </div>

  </div>
</div>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-cta">

          <Link
            to="/contact"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>

          <button
            className="hamburger"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
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