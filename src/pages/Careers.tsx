import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Helmet } from "react-helmet-async";

/*
==================================================
 HOW TO ADD A NEW JOB
==================================================

1. Keep the array EMPTY if there are NO openings.

const jobs = [];

2. Add a new object when hiring.

Example:

const jobs = [
  {
    id: 1,
    title: "Python Full Stack Developer",
    type: "Full Time",
    experience: "0-2 Years",
    location: "Komarapalayam, Tamil Nadu",
  },
];

==================================================
*/

const jobs: {
  id: number;
  title: string;
  type: string;
  experience: string;
  location: string;
}[] = [];
export default function Careers() {
  return (
    <>
  <Helmet>
    <title>Careers at Gen6 Software | Join Our Team</title>

    <meta
      name="description"
      content="Explore career opportunities at Gen6 Software. Join our team of developers, designers, and innovators building modern web, AI, and software solutions."
    />

    <link
      rel="canonical"
      href="https://www.gen6software.in/careers"
    />

    <meta
      property="og:title"
      content="Careers at Gen6 Software"
    />

    <meta
      property="og:description"
      content="Join Gen6 Software and build innovative web applications, AI solutions, and modern digital products."
    />

    <meta
      property="og:url"
      content="https://www.gen6software.in/careers"
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
      content="Careers at Gen6 Software"
    />

    <meta
      name="twitter:description"
      content="Explore exciting career opportunities at Gen6 Software."
    />

    <meta
      name="twitter:image"
      content="https://www.gen6software.in/logo.png"
    />
  </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="career-hero">
        <div className="container">
          <span className="eyebrow">CAREERS AT GEN6 SOFTWARE</span>

          <h1>
            Build the Future <br />
            With Gen6 Software
          </h1>

          <p>
            Join our passionate team of developers, designers and innovators
            creating modern digital solutions.
          </p>

          <a href="#jobs" className="btn btn-primary">
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why Join */}
      <section className="career-section">
        <div className="container">
          <h2>Why Join Gen6?</h2>

          <div className="career-grid">
            <div className="career-card">
              <h3>💻 Modern Technologies</h3>
              <p>React, AI, Cloud, Python & more.</p>
            </div>

            <div className="career-card">
              <h3>🚀 Career Growth</h3>
              <p>Continuous learning and mentorship.</p>
            </div>

            <div className="career-card">
              <h3>🤝 Great Team</h3>
              <p>Collaborative and friendly environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Jobs */}
{/* Open Jobs */}
<section id="jobs" className="career-section section-alt">
  <div className="container">

    <div className="section-head">
      <span className="eyebrow">Careers</span>

      <h2 className="section-title">
        Open Positions
      </h2>

      <p className="section-subtitle">
        Explore opportunities to join Gen6 Software.
      </p>
    </div>

    {jobs.length === 0 ? (

      <div className="no-job-card">

        <div className="no-job-icon">
          💼
        </div>

        <h3>No Open Positions Available</h3>

        <p>
          We currently don't have any active job openings.
          Thank you for your interest in joining Gen6 Software.

          <br /><br />

          Please check back later or send your resume for future opportunities.
        </p>

        <a
          href="mailto:gen6software@gmail.com"
          className="btn btn-primary"
        >
          Send Resume
        </a>

      </div>

    ) : (

      <div className="career-grid">

        {jobs.map((job) => (

          <div className="job-card" key={job.id}>

            <h3>{job.title}</h3>

            <p>
              <strong>Employment:</strong> {job.type}
            </p>

            <p>
              <strong>Experience:</strong> {job.experience}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <button className="btn btn-primary">
              Apply Now
            </button>

          </div>

        ))}

      </div>

    )}

  </div>
</section>


      {/* CTA */}
      <section className="career-cta">
        <div className="container">
          <h2>Don't see the right role?</h2>

          <p>
            Send your resume and we'll contact you when a suitable position
            becomes available.
          </p>

          <a
            href="mailto:gen6software@gmail.com"
            className="btn btn-primary"
          >
            Send Resume
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}