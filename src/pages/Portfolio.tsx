import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    tech: "React • Flask • MongoDB",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    live: "https://your-live-site.com",
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    category: "ai",
    tech: "Python • NLP",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    live: "https://your-live-site.com",
  },
  {
    id: 3,
    title: "Attendance System",
    category: "web",
    tech: "Flask • OpenCV",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    live: "https://your-live-site.com",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <>
    <Helmet>
  <title>Portfolio | Gen6 Software - Our Projects</title>

  <meta
    name="description"
    content="Explore Gen6 Software's portfolio of web applications, AI solutions, mobile apps, UI/UX designs, and custom software projects built for businesses."
  />

  <link
    rel="canonical"
    href="https://www.gen6software.in/portfolio"
  />

  <meta
    property="og:title"
    content="Portfolio | Gen6 Software"
  />

  <meta
    property="og:description"
    content="Discover our latest web development, AI, mobile app, and software development projects."
  />

  <meta
    property="og:url"
    content="https://www.gen6software.in/portfolio"
  />

  <meta
    property="og:image"
    content="https://www.gen6software.in/logo.png"
  />

  <meta property="og:type" content="website" />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Portfolio | Gen6 Software"
  />

  <meta
    name="twitter:description"
    content="Explore our portfolio of web development, AI, and software solutions."
  />

  <meta
    name="twitter:image"
    content="https://www.gen6software.in/logo.png"
  />
  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Gen6 Software Portfolio",
    url: "https://www.gen6software.in/portfolio",
    description:
      "Portfolio showcasing web development, AI, mobile app, and software development projects by Gen6 Software."
  })}
</script>
</Helmet>
      <Navbar />

      <section id="portfolio">
        <div className="container">

          <div className="section-head">
            <span className="eyebrow">Portfolio</span>
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">
              Explore some of our recent work and digital solutions.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="filter-tabs">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All Projects</button>
      <button className={filter === "web" ? "active" : ""} onClick={() => setFilter("web")}>Web Design</button>
      <button className={filter === "mobile" ? "active" : ""} onClick={() => setFilter("mobile")}>Mobile Apps</button>
      <button className={filter === "branding" ? "active" : ""} onClick={() => setFilter("branding")}>Branding</button>
      <button className={filter === "uiux" ? "active" : ""} onClick={() => setFilter("uiux")}>UI/UX</button>
            
          </div>

          {/* Projects */}
          <div className="portfolio-grid">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <div className="portfolio-card">

                  <div className="portfolio-img">
                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="portfolio-overlay">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        Live Preview
                      </a>
                    </div>
                  </div>

                  <div className="portfolio-content">
                    <h3>{project.title}</h3>

                    <p>
                      Modern scalable application with real-world
                      features.
                    </p>

                    <div className="portfolio-footer">
                      <span className="tag">
                        {project.tech}
                      </span>

                      <span className="year">
                        {project.year}
                      </span>
                    </div>
                  </div>

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