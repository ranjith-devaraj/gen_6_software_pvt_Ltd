import { Icon } from "./Icon";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <Link to="/" className="logo">
              <img
                src="/logo.png"
                alt="Gen6 Software"
                className="logo-img"
              />

              <span className="logo-text">
                Gen6 Software
              </span>
            </Link>

            <p>
              Building modern websites, custom software, AI solutions,
              and digital products that help businesses grow.
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

          {/* Company */}
          <div className="footer-col">

            <h5>Company</h5>

            <ul>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/services">Services</Link>
              </li>

              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>

              <li>
                <Link to="/team">Team</Link>
              </li>

              <li>
                <Link to="/careers">Careers</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>

            </ul>

          </div>

          {/* Services */}
          <div className="footer-col">

            <h5>Services</h5>

            <ul>

              <li>
                <Link to="/service-details?id=web-dev">
                  Web Development
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=software">
                  Software Development
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=custom-software">
                  Custom Software
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=ecommerce">
                  E-Commerce
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=seo">
                  SEO Optimization
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=graphic-design">
                  Graphic Design
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=poster-design">
                  Poster Design
                </Link>
              </li>

              <li>
                <Link to="/service-details?id=social-media">
                  Social Media Design
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}
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

              <li>
                Komarapalayam,
                <br />
                Namakkal,
                Tamil Nadu
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Gen6 Software Pvt. Ltd.
            All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}