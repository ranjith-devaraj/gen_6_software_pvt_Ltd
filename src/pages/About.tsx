import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
    <Helmet>
  <title>About Gen6 Software | Web Development Company</title>

  <meta
    name="description"
    content="Learn about Gen6 Software, our experienced team, mission, and expertise in web development, custom software, AI solutions, mobile apps, SEO, and digital transformation."
  />

  <link
    rel="canonical"
    href="https://www.gen6software.in/about"
  />

  <meta
    property="og:title"
    content="About Gen6 Software"
  />

  <meta
    property="og:description"
    content="Meet the team behind Gen6 Software and discover how we help businesses grow through innovative software solutions."
  />

  <meta
    property="og:url"
    content="https://www.gen6software.in/about"
  />

  <meta
    property="og:image"
    content="https://www.gen6software.in/about-img.webp"
  />

  <meta property="og:type" content="website" />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="About Gen6 Software"
  />

  <meta
    name="twitter:description"
    content="Learn more about Gen6 Software, our team, and our software development expertise."
  />

  <meta
    name="twitter:image"
    content="https://www.gen6software.in/about-img.webp"
  />
</Helmet>
      <Navbar />

      <section id="about">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div className="about-img">
                <img src="/about-img.webp" alt="About Gen6" />

                <div className="exp-badge">
                  <h3>3+</h3>
                  <span>Years Experience</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="eyebrow">About Gen6</span>

              <h2 className="section-title">
                We build modern software that actually works for you.
              </h2>

              <p
                className="section-subtitle"
                style={{ marginBottom: 28 }}
              >
                We're a small, passionate team of developers,
                designers, and problem-solvers who love building
                things that make a real impact. Whether you're
                starting from scratch or improving an existing
                product, we work closely with you to turn your ideas
                into something powerful, simple, and reliable.
              </p>

              <a href="/services" className="btn btn-primary">
                Our Capabilities{" "}
                <Icon name="arrow" size={16} />
              </a>
            </Reveal>
          </div>

          <div className="about-features">
            {[
              {
                ic: "rocket",
                t: "Fast & Reliable",
                d: "We don't drag projects. We work fast and make sure everything runs smoothly.",
              },
              {
                ic: "star",
                t: "Skilled Team",
                d: "You'll work with experienced developers who actually care about your product.",
              },
              {
                ic: "globe",
                t: "Work with Anyone",
                d: "No matter where you're from, we're easy to work with and always stay connected.",
              },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 100}>
                <div className="feature-card">
                  <div className="ic">
                    <Icon name={f.ic} />
                  </div>

                  <h4>{f.t}</h4>

                  <p>{f.d}</p>
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