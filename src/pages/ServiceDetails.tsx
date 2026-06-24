import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Icon } from "../components/Icon";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type Service = {
  title: string;
  desc: string;
  img: string;
};

function ServiceDetails() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("id");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
const navigate = useNavigate();
const serviceData: Record<string, Service> = {
  "web-dev": {
    title: "Web Development",
    desc: "We create fast, modern, and responsive websites that help your business grow online.",
    img: "/webdev.webp"
  },
  "software": {
    title: "Software Development",
    desc: "Custom-built software solutions designed to solve real business problems efficiently.",
    img: "/soft.webp"
  },
  "custom-software": {
    title: "Custom Software",
    desc: "We build software tailored exactly to your needs — simple, scalable, and effective.",
    img: "/software.webp"
  },
    "ecommerce": {
    title: "E-Commerce Solutions",
    desc: "Launch powerful online stores with smooth user experience and secure payments.",
    img: "/e-commerce.webp"
  },
  "seo": {
    title: "SEO Optimization",
    desc: "Improve your website ranking and bring more customers with smart SEO strategies.",
    img: "/seo.webp"
  },
  /* 🔥 NEW DESIGN SERVICES */

  "graphic-design": {
    title: "Graphic Design",
    desc: "Creative and eye-catching designs for branding, posters, and digital content.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d"
  },
  "poster-design": {
    title: "Poster Design",
    desc: "Modern and attractive posters for promotions, ads, and business marketing.",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
  },
  "social-media": {
    title: "Social Media Design",
    desc: "Engaging social media creatives that help your brand stand out and grow online.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113"
  }
};

  if (!serviceData[id as string]) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "100px", textAlign: "center" }}>
          <h2>Service not found</h2>
          <Link to="/">Go back</Link>
        </div>
        <Footer />
      </>
    );
  }

  const service = serviceData[id as string];

  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>{service.title} | Gen6 Software</title>

        <meta
          name="description"
          content={`${service.title} by Gen6 Software. ${service.desc} Get started today.`}
        />

        <link
          rel="canonical"
          href={`https://gen-6-software-pvt-ltd.onrender.com/service-details?id=${id}`}
        />

        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.desc} />
        <meta property="og:image" content={service.img} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />

      <main className="service-page">

        {/* HERO */}
        <section className="service-hero container">
          <h1>{service.title}</h1>
          <p>{service.desc}</p>
        </section>

        {/* MAIN */}
        <section className="container service-layout">

          {/* LEFT */}
          <div className="service-content">

            <img
              src={service.img}
              alt={service.title}
              className="service-img"
              loading="lazy"
              width="800"
              height="500"
            />

            <h2>About this service</h2>
            <p>{service.desc}</p>

            {/* WHY CHOOSE */}
            <h3>Why choose this?</h3>
            <p>
              We focus on simple, fast, and reliable solutions that actually help your business grow.
              No unnecessary complexity — just clean and effective results.
            </p>

            {/* FEATURES */}
            <div className="features-grid">
              <div><Icon name="bolt"/> Fast Delivery</div>
              <div><Icon name="shield"/> Secure Systems</div>
              <div><Icon name="chart"/> Scalable</div>
              <div><Icon name="rocket"/> High Performance</div>
            </div>

            {/* PROCESS */}
            <div className="process">
              <div className="process-step">
                <span className="step-number">01</span>
                <div>
                  <h4>Understand</h4>
                  <p>We listen to your idea and understand your goals.</p>
                </div>
              </div>

              <div className="process-step">
                <span className="step-number">02</span>
                <div>
                  <h4>Plan</h4>
                  <p>We create a simple and clear plan before starting.</p>
                </div>
              </div>

              <div className="process-step">
                <span className="step-number">03</span>
                <div>
                  <h4>Build</h4>
                  <p>We develop your product with clean and efficient code.</p>
                </div>
              </div>

              <div className="process-step">
                <span className="step-number">04</span>
                <div>
                  <h4>Launch</h4>
                  <p>We deliver and help you go live smoothly.</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="service-sidebar">

            {/* SERVICES */}
            <div className="card services-card">
              <h4>All Services</h4>

              <ul>
                {Object.keys(serviceData).map((key) => (
                  <li key={key} className={id === key ? "active" : ""}>
                    <Link
                      to={`/service-details?id=${key}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <span>{serviceData[key].title}</span>
                      <span className="arrow">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="card cta-card">
              <h4>Let’s work together</h4>
              <p>Tell us your idea — we’ll help you build it.</p>

<button
  className="btn btn-primary full"
  onClick={() => navigate("/#contact")}
>
  Contact Us →
</button>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default ServiceDetails;