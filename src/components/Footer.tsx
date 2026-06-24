import { Icon } from "./Icon";
import { Link } from "react-router-dom";

export function Footer() {

  // ✅ Smooth scroll (same as navbar)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
<Link to="/" className="logo" onClick={() => scrollToSection("home")}>
  <img src="/logo.png" alt="Gen6 Software" className="logo-img" />
  <span className="logo-text">
    Gen 6 Software
  </span>
</Link>

            <p>
              Building modern digital products that move businesses forward —
              from strategy to launch and beyond.
            </p>

            <div className="socials">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7447581011179126784"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="linkedin" size={16} />
              </a>

              <a
                href="https://www.instagram.com/gen6studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={16} />
              </a>
            </div>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul>

              <li>
                <button
  onClick={() => scrollToSection("about")}
  aria-label="Go to About section"
>
                  About
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("services")}>
                  Services
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("portfolio")}>
                  Projects
                </button>
              </li>

              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="footer-col">
            <h5>Solutions</h5>
            <ul>
              <li><Link to="/service-details?id=web-dev">Web Development</Link></li>
              <li><Link to="/service-details?id=software">Software Development</Link></li>
              <li><Link to="/service-details?id=custom-software">Custom Software</Link></li>
              <li><Link to="/service-details?id=ecommerce">E-Commerce Solutions</Link></li>
              <li><Link to="/service-details?id=seo">SEO Optimization</Link></li>
              <li><Link to="/service-details?id=graphic-design">Graphic Design</Link></li>
<li><Link to="/service-details?id=poster-design">Poster Design</Link></li>
<li><Link to="/service-details?id=social-media">Social Media Design</Link></li>
              
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-col">
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:gen6software@gmail.com">
                  gen6software@gmail.com
                </a>
              </li>

              <li>
                <a href="tel:+918428254205">
                  +91 84282 54205
                </a>
              </li>

              {/* ✅ FIXED (no empty link) */}
              <li>
                <span>Erode, Tamil Nadu 🇮🇳</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://gen-6-software-pvt-ltd.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gen6 Software
            </a>. All rights reserved
          </div>

          <div>
            <Link to="/privacy-policy">Privacy</Link> ·{" "}
            <Link to="/terms">Terms</Link> ·{" "}
            <span>Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
}