import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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
     <Helmet>
        {/* Basic SEO */}
        <title>Services | Gen6 Software - Web & Software Development</title>

        <meta
          name="description"
          content="Explore Gen6 Software's professional services including web development, custom software, UI/UX design, SEO optimization, e-commerce solutions, and digital transformation."
        />

        <meta
          name="keywords"
          content="Web Development, Software Development, Custom Software, UI UX Design, SEO Services, E-Commerce Development, Gen6 Software"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="Gen6 Software Pvt Ltd"
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.gen6software.in/services"
        />

        {/* Open Graph */}
        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Services | Gen6 Software"
        />

        <meta
          property="og:description"
          content="Discover our web development, software development, UI/UX, SEO, and e-commerce services."
        />

        <meta
          property="og:url"
          content="https://www.gen6software.in/services"
        />

        <meta
          property="og:image"
          content="https://www.gen6software.in/logo.png"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Services | Gen6 Software"
        />

        <meta
          name="twitter:description"
          content="Professional web development, software solutions, UI/UX design, SEO, and e-commerce services."
        />

        <meta
          name="twitter:image"
          content="https://www.gen6software.in/logo.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development and Software Development",
            provider: {
              "@type": "Organization",
              name: "Gen6 Software",
              url: "https://www.gen6software.in",
              logo: "https://www.gen6software.in/logo.png",
            },
            areaServed: "India",
          })}
        </script>
      </Helmet>
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
  to={`/services/${s.id}`}
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