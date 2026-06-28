import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";
import { Icon } from "../components/Icon";

const team = [
  {
    n: "D Ranjith",
    r: "Lead Developer",
    img: "/ranjith.webp",
    featured: true,
  },
  {
    n: "S Periya Samy",
    r: "Business Development Executive",
    img: "/periyasamy.webp",
  },
  {
    n: "B Uma Magesh ",
    r: "Software Developer",
    img: "/uma.jpeg",
  },
  {
    n: "K S Abineshwaran",
    r: "Digital Marketing",
    img: "/abi.jpeg",
  },
  {
    n: "R Sanjay",
    r: "SEO Analyst",
    img: "/sanjay.jpeg",
  },
   {
    n: "M Skathi Sadhana",
    r: "Graphic Designer",
    role: "Director",
    img: "/coat photo.webp",
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


                  {/* Name */}
                  <h4>{m.n}</h4>

                  {/* Designation */}
                  <p className="team-designation">{m.r}</p>

                  {/* Accent Divider */}
                  <div className="team-divider" />

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