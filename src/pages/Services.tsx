import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";

const services = [
  {
    id: "web-dev",
    ic: "code",
    t: "Web Development",
    d: "Build fast, responsive, and modern websites with clean UI and high performance.",
  },
  {
    id: "software",
    ic: "settings",
    t: "Software Development",
    d: "Develop scalable and high-performance software solutions tailored to your business.",
  },
  {
    id: "custom-software",
    ic: "code",
    t: "Custom Software",
    d: "Fully customized software solutions designed specifically for your unique business needs.",
  },
  {
    id: "seo",
    ic: "chart",
    t: "SEO Optimization",
    d: "Improve search rankings, drive traffic, and grow your online visibility.",
  },
  {
    id: "uiux",
    ic: "star",
    t: "UI / UX Design",
    d: "Design intuitive, user-friendly interfaces with modern aesthetics and usability.",
  },
  {
    id: "ecommerce",
    ic: "chart",
    t: "E-Commerce Solutions",
    d: "Build powerful online stores with secure payments and seamless user experience.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section id="services" className="section-alt">
        <div className="container">

          <div className="section-head">
            <span className="eyebrow">What We Do</span>

            <h2 className="section-title">
              Services built for modern teams
            </h2>

            <p className="section-subtitle">
              End-to-end product capabilities, from research to release and
              beyond.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 100}>
                <div className="service-card">

                  <div className="ic">
                    <Icon name={s.ic} />
                  </div>

                  <h3>{s.t}</h3>

                  <p>{s.d}</p>

                  <Link
                    to={`/service-details?id=${s.id}`}
                    className="learn-more"
                  >
                    Learn more
                    <Icon name="arrow" size={14} />
                  </Link>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}