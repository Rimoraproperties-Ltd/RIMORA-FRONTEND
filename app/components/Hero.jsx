// app/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <h2>Rimora Properties</h2>
          <p className="subtitle">
            A real estate brokerage built on truth, transparency, and proven results.
          </p>

          <p className="lead">
            We offer only FCDA-approved land across Abuja, working directly with verified developers—no shady titles,
            no middlemen, just genuine land, clear documents, and honest advice.
          </p>

          <div className="hero-cta">
            <a className="btn primary" href="/properties">View our properties</a>
            <a className="btn ghost" href="/contact">Book an inspection</a>
          </div>

          <div className="contact-inline">
            <strong>Email:</strong> rimoraproperties@gmail.com &nbsp;•&nbsp;
            <strong>Phone:</strong> +234 810 323 9545
          </div>
        </div>

        <div className="hero-image">
          <img src="/placeholder.jpg" alt="Rimora Properties hero" />
        </div>
      </div>
    </section>
  );
}
