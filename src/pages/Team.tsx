import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Helmet } from "react-helmet-async";

const team = [
  {
    id: 1,
    n: "D Ranjith",
    r: "Lead Developer",
    img: "/ranjith.webp",
    featured: true,
  },
  {
    id: 2,
    n: "S Periya Samy",
    r: "Business Development Executive",
    img: "/periyasamy.webp",
  },
  {
    id: 3,
    n: "B Uma Magesh",
    r: "Software Developer",
    img: "/uma.jpeg",
  },
  {
    id: 4,
    n: "K S Abineshwaran",
    r: "Digital Marketing",
    img: "/abi.jpeg",
  },
  {
    id: 5,
    n: "R Sanjay",
    r: "SEO Analyst",
    img: "/sanjay.jpeg",
  },
  {
    id: 6,
    n: "M Sakthi Sadhana",
    r: "Graphic Designer",
    img: "/coat photo.webp",
  },
];

export default function Team() {
  return (
    <>
    <Helmet>
  {/* Title */}
  <title>Our Team | Gen6 Software</title>

  {/* Basic SEO */}
  <meta
    name="description"
    content="Meet the talented team behind Gen6 Software. Our experienced developers, designers, digital marketers, and SEO specialists help businesses build modern digital solutions."
  />

  <meta
    name="keywords"
    content="Gen6 Software Team, Web Developers, Software Developers, Graphic Designer, SEO Analyst, Digital Marketing, Business Development"
  />

  <meta
    name="robots"
    content="index, follow"
  />

  <meta
    name="author"
    content="Gen6 Software Pvt Ltd"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <meta
    name="theme-color"
    content="#0F172A"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://www.gen6software.in/team"
  />

  {/* Open Graph */}
  <meta
    property="og:type"
    content="website"
  />

  <meta
    property="og:site_name"
    content="Gen6 Software"
  />

  <meta
    property="og:title"
    content="Meet Our Team | Gen6 Software"
  />

  <meta
    property="og:description"
    content="Meet the experienced developers, designers, and digital experts behind Gen6 Software."
  />

  <meta
    property="og:url"
    content="https://www.gen6software.in/team"
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
    content="Meet Our Team | Gen6 Software"
  />

  <meta
    name="twitter:description"
    content="Meet the professionals behind Gen6 Software and discover our expertise."
  />

  <meta
    name="twitter:image"
    content="https://www.gen6software.in/logo.png"
  />

  {/* Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Gen6 Software",
      url: "https://www.gen6software.in",
      logo: "https://www.gen6software.in/logo.png",
      employee: team.map((member) => ({
        "@type": "Person",
        name: member.n,
        jobTitle: member.r,
      })),
    })}
  </script>
</Helmet>
      <Navbar />

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
            {team.map((member, index) => (
              <Reveal key={member.id} delay={index * 80}>
                <div
                  className={`team-card${
                    member.featured ? " featured" : ""
                  }`}
                >
                  <div className="team-img">
<img
  src={member.img}
  alt={`${member.n} - ${member.r} | Gen6 Software`}
  loading="lazy"
  width="300"
  height="380"
/>
                  </div>

                  <h4>{member.n}</h4>

                  <p className="team-designation">{member.r}</p>

                  <div className="team-divider"></div>
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