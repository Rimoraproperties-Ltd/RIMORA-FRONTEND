// app/components/About.jsx
export default function About() {
  return (
    <section className="about container">
      <div className="about-grid">
        <div className="about-text">
          <h3>About Rimora</h3>
          <p>
            Rimora Properties is a fast-rising real estate company based in Abuja, Nigeria, committed to helping both
            first-time and seasoned investors acquire safe, strategic, and FCDA-approved properties. Our mission is to
            simplify real estate investment by focusing on transparency, trust, and long-term value.
          </p>

          <h4>Our Mission</h4>
          <p>
            To provide Nigerians and diaspora investors with safe, verified, and FCDA-approved land in Abuja —
            eliminating the fear of scams and ensuring long-term investment security.
          </p>

          <h4>Vision</h4>
          <p>
            To become Africa’s most trusted land brokerage firm by championing transparency, consistency, and digital
            innovation in the real estate market.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat">
            <h5>Only FCDA-Approved Properties</h5>
            <p>We deal exclusively in FCDA-approved land, meaning your investment is backed by the right allocation and documents.</p>
          </div>

          <div className="stat">
            <h5>No Hidden Charges</h5>
            <p>No ambiguity — clear pricing and transparent processes.</p>
          </div>

          <div className="stat">
            <h5>In-Depth Knowledge</h5>
            <p>Deep understanding of Abuja districts and verified developers.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
