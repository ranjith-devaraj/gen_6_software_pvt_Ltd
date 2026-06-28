import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";

const team = [
  {
    n: "M Skathi Sadhana",
    r: "Managing Director",
    role: "Director",
    img: "/coat photo.webp",
  },
  {
    n: "D Ranjith",
    r: "Lead Developer",
    role: "Tech Lead",
    img: "/ranjith.webp",
    featured: true,
  },
  {
    n: "S Periya Samy",
    r: "Business Development Executive",
    role: "Strategy",
    img: "/periyasamy.webp",
  },
];

export default function Team() {
  return (
    <>
      <Navbar />

      <section className="section-alt" id="team">
        <div className="container">

          {/* ── Section Header ── */}
          <div className="section-head">
            <span className="eyebrow">Our Team</span>
            <h2 className="section-title">Meet the people behind Gen6</h2>
            <p className="section-subtitle">
              A senior team of builders, designers, and strategists.
            </p>
          </div>

          {/* ── Team Grid ── */}
          <div className="team-grid">
            {team.map((m, i) => (
              <Reveal key={m.n} delay={i * 80}>
                <div className={`team-card${m.featured ? " featured" : ""}`}>

                  {/* Circular Photo */}
                  <div className="team-img">
                    <img src={m.img} alt={m.n} />
                  </div>

                  {/* Role Badge */}
                  <span className="team-role">{m.role}</span>

                  {/* Name */}
                  <h4>{m.n}</h4>

                  {/* Designation */}
                  <p className="team-designation">{m.r}</p>

                  {/* Accent Divider */}
                  <div className="team-divider" />

                  {/* Social Icons */}
                  <div className="team-socials">
                    <a
                      href="mailto:info@gen6software.in"
                      aria-label="Send email"
                    >
                      <Icon name="mail" size={16} />
                    </a>
                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn profile"
                    >
                      <Icon name="linkedin" size={16} />
                    </a>
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