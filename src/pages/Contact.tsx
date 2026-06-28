import { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Icon } from "../components/Icon";
import { Helmet } from "react-helmet-async";

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
    a: "Mostly React, TypeScript, Node.js use pannuvom. Backend la Python, PHP mathiri languages um use pannuvom depending on project."
  },
  {
    q: "Project mudinja apram maintain pannuveengala?",
    a: "Yes, kandippa. Regular updates, security fixes, new features ellam maintain pannuvom."
  },
  {
    q: "Pricing epdi irukum?",
    a: "Simple ah sollanum na — small work ku fixed price, long-term work ku monthly basis, illa flexible ah time-based ah decide pannuvom."
  },
];

export default function Contact() {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyU3XdsEdKTgcRMV-wyeXyLA0M86tJpzfq1aTbDKo141aor8aUTNHfLFQMl4alP24D9/exec",
        {
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      alert("Message Sent Successfully 🚀");
      form.reset();
    } catch {
      alert("Something went wrong ❌");
    }
  };

  return (
    <>
    <Helmet>
  <title>Contact Gen6 Software | Get a Free Consultation</title>

  <meta
    name="description"
    content="Contact Gen6 Software for web development, custom software, AI solutions, mobile app development, SEO, and digital marketing services. Get a free consultation today."
  />

  <link
    rel="canonical"
    href="https://www.gen6software.in/contact"
  />

  <meta
    property="og:title"
    content="Contact Gen6 Software"
  />

  <meta
    property="og:description"
    content="Have a project in mind? Contact Gen6 Software for a free consultation and expert software development services."
  />

  <meta
    property="og:url"
    content="https://www.gen6software.in/contact"
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
    content="Contact Gen6 Software"
  />

  <meta
    name="twitter:description"
    content="Get in touch with Gen6 Software for web development, AI, and software solutions."
  />

  <meta
    name="twitter:image"
    content="https://www.gen6software.in/logo.png"
  />
</Helmet>
      <Navbar />

<section id="contact" className="contact-section">
  <div className="container">

    <div className="section-head center">
      <span className="eyebrow">Contact Us</span>

      <h2 className="section-title">
        Let's Build Your Next Big Idea 🚀
      </h2>

      <p className="section-subtitle">
        Have a project in mind? Tell us your requirements and we'll get back to you within 24 hours.
      </p>
    </div>

    <div className="contact-grid">

      {/* Contact Info */}
      <div className="contact-info">

        {/* Email */}
        <div className="contact-card">
          <div className="ic">
            <Icon name="mail" size={20} />
          </div>

          <div>
            <h5>Email</h5>

            <a
              href="mailto:gen6software@gmail.com"
              className="contact-link"
            >
              gen6software@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="ic">
            <Icon name="phone" size={20} />
          </div>

          <div>
            <h5>Call / WhatsApp</h5>

            <a
              href="https://wa.me/918428254205"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              +91 84282 54205
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="contact-card">
          <div className="ic">
            <Icon name="pin" size={20} />
          </div>

          <div>
            <h5>Location</h5>
            <p>Komarapalayam, Namakkal, Tamil Nadu, India</p>
          </div>
        </div>

        {/* Free Consultation */}
        <div className="contact-card highlight">
          <h4>🔥 Free Consultation</h4>

          <p>
            Get expert guidance for your project absolutely free.
          </p>
        </div>

      </div>

      {/* Contact Form */}
      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-row">

          <div className="form-group">
            <label>Full Name</label>

            <input
              name="name"
              required
              placeholder="Ranjith Kumar"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>

            <input
              name="phone"
              required
              placeholder="+91 98XXXXXXXX"
            />
          </div>

        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            required
            placeholder="you@gmail.com"
          />
        </div>

        <div className="form-group">
          <label>Project Details</label>

          <textarea
            name="message"
            required
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary full"
        >
          Send Message
          <Icon name="arrow" size={16} />
        </button>

      </form>

    </div>

  </div>
</section>
      <FAQ />

      <Footer />
    </>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq-section">
      <div className="container">

        <div className="section-head">
          <span className="eyebrow">FAQ</span>

          <h2 className="section-title">
            Questions, Answered
          </h2>

          <p className="section-subtitle">
            Everything you need to know about working with Gen6 Software.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`}
            >

              <button
                className="faq-q"
                onClick={() =>
                  setOpen(open === i ? null : i)
                }
              >
                <span>{f.q}</span>

                <span className="chev">
                  <Icon
                    name={open === i ? "minus" : "plus"}
                    size={18}
                  />
                </span>
              </button>

              {open === i && (
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}