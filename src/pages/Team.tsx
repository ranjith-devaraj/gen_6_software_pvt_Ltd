import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Reveal } from "../components/Reveal";

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
                      alt={member.n}
                      loading="lazy"
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