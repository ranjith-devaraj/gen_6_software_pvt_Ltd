import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Icon } from "../components/Icon";
import { Reveal } from "../components/Reveal";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const services = [
  {
    id: "web-dev",
    ic: "code",
    t: "Web Development",
    d: "Build fast, responsive, and modern websites with clean UI and high performance."
  },
  {
    id: "software",
    ic: "settings",
    t: "Software Development",
    d: "Develop scalable and high-performance software solutions tailored to your business."
  },
  {
    id: "custom-software",
    ic: "code",
    t: "Custom Software",
    d: "Fully customized software solutions designed specifically for your unique business needs."
  },
  {
    id: "seo",
    ic: "chart",
    t: "SEO Optimization",
    d: "Improve search rankings, drive traffic, and grow your online visibility."
  },
  {
    id: "uiux",
    ic: "star",
    t: "UI / UX Design",
    d: "Design intuitive, user-friendly interfaces with modern aesthetics and usability."
  },
  {
    id: "ecommerce",
    ic: "chart",
    t: "E-Commerce Solutions",
    d: "Build powerful online stores with secure payments and seamless user experience."
  }
];
const benefits = [
  { ic: "bolt", t: "Innovation First", d: "We adopt and ship emerging tech before the rest of the market does." },
  { ic: "chart", t: "Strategic Thinking", d: "Every line of code maps back to a measurable business outcome." },
  { ic: "rocket", t: "Performance Obsessed", d: "Sub-second loads, smooth interactions, and rock-solid uptime." },
  { ic: "shield", t: "Enterprise Security", d: "SOC2-aligned processes, encryption, and zero-trust by default." },
];

const faqs = [
  {
    q: "Oru project complete aaga evlo time aagum?",
    a: "Usually 6–10 weeks la first version ready panniduvom. 2-week sprint la work pannuvom, weekly updates kudupom so neenga full clarity la irupeenga."
  },
  {
    q: "Startups kooda work pannuveengala illa big companies kooda?",
    a: "Rendum pannuvom. Startup ah irundhaalum, big company ah irundhaalum unga level ku set aana process la work pannuvom."
  },
  {
    q: "Neenga mostly enna technology use pannuveenga?",
a: "Mostly React, TypeScript, Node.js use pannuvom. Backend la Python, PHP mathiri languages um use pannuvom depending on project."  },
  {
    q: "Project mudinja apram maintain pannuveengala?",
    a: "Yes, kandippa. Regular updates, security fixes, new features ellam maintain pannuvom."
  },
  {
    q: "Pricing epdi irukum?",
    a: "Simple ah sollanum na — small work ku fixed price, long-term work ku monthly basis, illa flexible ah time-based ah decide pannuvom."
  },
];

const team = [
  {
    n: "M Skathi Sadhana",
    r: "Managing Director",
    role: "Director of Company",
    img: "/coat photo.webp",
  },
    {
    n: "D Ranjith",
    r: "Lead Developer",
    role: "TECH LEAD",
    img: "/ranjith.webp",
    featured: true,
  },
  {
    n: "S Periya Samy",
    r: "Business Development Executive",
    role: "STRATEGY",
    img: "/periyasamy.webp",
  },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "web",
    tech: "React • Flask • MongoDB",
    year: "2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 2,
    title: "AI Resume Analyzer",
    category: "ai",
    tech: "Python • NLP",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
  {
    id: 3,
    title: "Attendance System",
    category: "web",
    tech: "Flask • OpenCV",
    year: "2024",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    github: "https://github.com/your-repo",
    live: "https://your-live-site.com",
  },
];

function Home() {
  const [filter, setFilter] = useState("all");

const filteredProjects =
  filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);
  return (
    <>
<Helmet>
  <title>Gen6 Software | Transform Your Business with Modern Technology</title>

  <meta
    name="description"
    content="Gen6 Software builds high-performance websites, custom software, and AI-powered solutions to help businesses grow."
  />

  {/* ✅ Canonical (IMPORTANT) */}
  <link
    rel="canonical"
    href="https://gen-6-software-pvt-ltd.onrender.com/"
  />

  {/* ✅ Open Graph */}
  <meta property="og:title" content="Gen6 Software" />
  <meta
    property="og:description"
    content="Modern web development and AI solutions for your business."
  />
  <meta property="og:image" content="/about-img.png" />
  <meta
    property="og:url"
    content="https://gen-6-software-pvt-ltd.onrender.com/"
  />
  <meta property="og:type" content="website" />

  {/* ✅ Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
</Helmet>
      <Navbar />
      <main id="home">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">Modern Software Studio</span>
              <h1>Transform Your Business with <span className="grad">Modern Technology</span></h1>
              <p className="lead">We design, build, and scale digital products for ambitious teams — combining premium engineering, design craft, and AI to ship faster.</p>
              <div className="hero-ctas">
                <a href="#contact" className="btn btn-primary">Start a Project <Icon name="arrow" size={16} /></a>
                <a href="#services" className="btn btn-ghost">Explore Services</a>
              </div>
              <div className="hero-meta">
                <div><b>30+</b><span>Happy Clients</span></div>
                <div><b>3+ yrs</b><span>Experience</span></div>
                <div><b>98%</b><span>Retention</span></div>
              </div>
            </div>
            <div className="hero-cards" aria-hidden>
              <div className="float-card fc1">
                <div className="ic"><Icon name="bolt" size={20}/></div>
                <h4>Lightning Performance</h4>
                <p>Sub-second loads, 99.9% uptime, global edge.</p>
              </div>
              <div className="float-card fc2">
                <div className="ic"><Icon name="shield" size={20}/></div>
                <h4>Enterprise Security</h4>
                <p>SOC2-aligned, encrypted, zero-trust ready.</p>
              </div>
              <div className="float-card fc3">
                <div className="ic"><Icon name="chart" size={20}/></div>
                <h4>Data-Driven Growth</h4>
                <p>Dashboards & AI insights baked in.</p>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats" style={{ padding: "70px 0" }}>
          <div className="container stats-grid">
            {[
              { n: "30+", l: "Happy Customers" },
              { n: "25+", l: "Projects Delivered" },
              { n: "99%", l: "Success Rate" },
              { n: "3+", l: "Years Experience" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <div className="stat-item">
                  <div className="num">{s.n}</div>
                  <div className="lbl">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <div className="about-grid">
<Reveal>
  <div className="about-img">
    <img src="/about-img.webp" alt="About Gen6" />

    {/* 🔥 EXPERIENCE BADGE */}
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

<p className="section-subtitle" style={{ marginBottom: 28 }}>
  We're a small, passionate team of developers, designers, and problem-solvers who love building things that make a real impact. Whether you're starting from scratch or improving an existing product, we work closely with you to turn your ideas into something powerful, simple, and reliable.
</p>

<a href="#services" className="btn btn-primary">
  Our Capabilities <Icon name="arrow" size={16} />
</a>

              </Reveal>
            </div>
            <div className="about-features">
              {[ { ic: "rocket", t: "Fast & reliable", d: "We don’t drag projects. We work fast and make sure everything runs smoothly." }, { ic: "star", t: "Skilled team", d: "You’ll work with experienced developers who actually care about your product." }, { ic: "globe", t: "Work with anyone", d: "No matter where you're from, we’re easy to work with and always stay connected." }, ].map((f, i) => (
                <Reveal key={f.t} delay={i * 100}>
                  <div className="feature-card">
                    <div className="ic"><Icon name={f.ic}/></div>
                    <h4>{f.t}</h4>
                    <p>{f.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
{/* SERVICES */}
<section id="services" className="section-alt">
  <div className="container">
    
    <div className="section-head">
      <span className="eyebrow">What We Do</span>
      <h2 className="section-title">Services built for modern teams</h2>
      <p className="section-subtitle">
        End-to-end product capabilities, from research to release and beyond.
      </p>
    </div>

    <div className="services-grid">
      {services.map((s, i) => (
        <Reveal key={s.id} delay={(i % 3) * 100}>
          
          <div className="service-card">
            
            {/* ICON */}
            <div className="ic">
              <Icon name={s.ic} />
            </div>

            {/* TITLE */}
            <h3>{s.t}</h3>

            {/* DESCRIPTION */}
            <p>{s.d}</p>

            {/* 🔥 ROUTER LINK */}
            <Link
             to={`/service-details?id=${s.id}`}
             className="learn-more"
            >
              Learn more <Icon name="arrow" size={14}/>
            </Link>

          </div>

        </Reveal>
      ))}
    </div>

  </div>
</section>

        {/* EXPERIENCE */}
        <section>
          <div className="container">
            <div className="exp-grid">
              <Reveal>
                <span className="eyebrow">Why Gen6</span>
                <h2 className="section-title">A decade of experience, distilled into your product.</h2>
                <p className="section-subtitle">We combine principled engineering with sharp product instincts to give your team an unfair advantage.</p>
                <a href="#contact" className="btn btn-primary" style={{ marginTop: 28 }}>Book a Consultation</a>
              </Reveal>
              <div className="exp-list">
                {benefits.map((b, i) => (
                  <Reveal key={b.t} delay={i * 80}>
                    <div className="exp-item">
                      <div className="ic"><Icon name={b.ic}/></div>
                      <div><h4>{b.t}</h4><p>{b.d}</p></div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

<section className="logos">
  <div className="container">
    <div className="logos-title">Why choose Gen6</div>

    {/* 🔥 WRAPPER (VERY IMPORTANT) */}
    <div className="logos-track-wrap">

      <div className="logos-track">
        {[
          ...[
            "Fast Delivery",
            "Affordable Pricing",
            "Modern Design",
            "Scalable Solutions",
            "Friendly Support",
            "Custom Development",
          ],
          ...[
            "Fast Delivery",
            "Affordable Pricing",
            "Modern Design",
            "Scalable Solutions",
            "Friendly Support",
            "Custom Development",
          ]
        ].map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>

    </div>
  </div>
</section>

        {/* CASE STUDY */}
<section id="portfolio">
  <div className="container">

   <h2 className="section-title" style={{ textAlign: "center" }}>
  Our Projects
</h2>
<br />

    {/* Filter Buttons */}
    <div className="filter-tabs">
      <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All Projects</button>
      <button className={filter === "web" ? "active" : ""} onClick={() => setFilter("web")}>Web Design</button>
      <button className={filter === "mobile" ? "active" : ""} onClick={() => setFilter("mobile")}>Mobile Apps</button>
      <button className={filter === "branding" ? "active" : ""} onClick={() => setFilter("branding")}>Branding</button>
      <button className={filter === "uiux" ? "active" : ""} onClick={() => setFilter("uiux")}>UI/UX</button>
    </div>

    {/* Project Grid */}
    <div key={filter} className="portfolio-grid">
      {filteredProjects.map((project) => (
        <div key={project.id} className="portfolio-card">

          {/* IMAGE + OVERLAY */}
          <div className="portfolio-img">
            <img src={project.image} alt={project.title} />

            <div className="portfolio-overlay">
              <a href={project.live} target="_blank" className="btn">
                Live
              </a>

            </div>
          </div>

          {/* CONTENT */}
          <div className="portfolio-content">
            <h3>{project.title}</h3>
            <p>Modern scalable application with real-world features.</p>

            <div className="portfolio-footer">
              <span className="tag">{project.tech}</span>
              <span className="year">{project.year}</span>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>

        {/* TEAM */}
<section className="section-alt" id="team">
  <div className="container">
    
    {/* Section Header */}
    <div className="section-head">
      <span className="eyebrow">Our Team</span>
      <h2 className="section-title">Meet the people behind Gen6</h2>
      <p className="section-subtitle">
        A senior team of builders, designers, and strategists.
      </p>
    </div>

    {/* Team Grid */}
    <div className="team-grid">
      {team.map((m, i) => (
        <Reveal key={m.n} delay={i * 80}>
          
          <div className={`team-card ${m.featured ? "featured" : ""}`}>

            {/* ✅ IMAGE */}
            <div className="team-img">
              <img src={m.img} alt={m.n} />
            </div>

            {/* ✅ ICONS BELOW IMAGE */}
            <div className="team-overlay">
              <a href="#"><Icon name="mail" size={16} /></a>
              <a href="#"><Icon name="linkedin" size={16} /></a>
            </div>

            {/* ✅ ROLE */}
            <span className="team-role">{m.role}</span>

            {/* ✅ NAME */}
            <h4>{m.n}</h4>

            {/* ✅ TITLE */}
            <p>{m.r}</p>

          </div>

        </Reveal>
      ))}
    </div>

  </div>
</section>
        {/* FAQ */}
        


<section id="contact" className="contact-section">
  <div className="container">

    {/* HEADER */}
    <div className="section-head center">
      <span className="eyebrow">Contact Us</span>
      <h2 className="section-title">Let’s build your next big idea 🚀</h2>
      <p className="section-subtitle">
        Have a project in mind? Tell us your requirements — we’ll respond within 24 hours.
      </p>
    </div>

    <div className="contact-grid">

      {/* LEFT - INFO */}
      <div className="contact-info">

        <div className="contact-card">
          <div className="ic"><Icon name="mail" size={20}/></div>
          <div>
            <h5>Email</h5>
            <p>gen6software@gmail.com</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="ic"><Icon name="phone" size={20}/></div>
          <div>
            <h5>Call / WhatsApp</h5>
            <p>+91 84282 54205</p>
          </div>
        </div>

        <div className="contact-card">
          <div className="ic"><Icon name="pin" size={20}/></div>
          <div>
            <h5>Location</h5>
            <p>Erode, Tamil Nadu 🇮🇳</p>
          </div>
        </div>

        <div className="contact-card highlight">
          <h4>🔥 Free Consultation</h4>
          <p>Get expert guidance for your project — no cost.</p>
        </div>

      </div>

      {/* RIGHT - FORM */}
      <form
        className="contact-form"
      onSubmit={async (e) => {
  e.preventDefault();

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const data = Object.fromEntries(formData.entries());

  try {
    await fetch("https://script.google.com/macros/s/AKfycbyU3XdsEdKTgcRMV-wyeXyLA0M86tJpzfq1aTbDKo141aor8aUTNHfLFQMl4alP24D9/exec", {
      method: "POST",
      body: JSON.stringify(data),
    });

    alert("Message sent 🚀");
    form.reset();

  } catch {
    alert("Error ❌");
  }
}}
      >

        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input name="name"required placeholder="Ranjith Kumar" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input name="phone" required placeholder="+91 98XXXXXXXX" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" required placeholder="you@gmail.com" />
          </div>

        </div>

        <div className="form-group">
          <label>Project Details</label>
          <textarea
            required
            name="message"
            placeholder="Explain your idea, timeline, and expectations..."
          />
        </div>

        <button type="submit" className="btn btn-primary full">
          Send Message <Icon name="arrow" size={16}/>
        </button>

      </form>

    </div>
  </div>
</section>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section>
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2 className="section-title">Questions, answered</h2>
          <p className="section-subtitle">Everything you need to know about working with us.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="chev"><Icon name="plus" size={18}/></span>
              </button>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Home;