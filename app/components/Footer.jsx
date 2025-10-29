// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Rimora Properties</h4>
          <p>A real estate brokerage built on truth, transparency, and proven results.</p>
        </div>

        <div>
          <h5>Contact</h5>
          <p>Email: rimoraproperties@gmail.com</p>
          <p>Phone: +234 810 323 9545</p>
          <p>Phone: +234 905 362 4522</p>
        </div>

        <div>
          <h5>Quick Links</h5>
          <a href="/">Home</a><br />
          <a href="/properties">Our properties</a><br />
          <a href="/about">About us</a><br />
          <a href="/contact">Contact us</a>
        </div>

        <div>
          <h5>About the company</h5>
          <p>We offer only FCDA-approved land across Abuja, working directly with verified developers—no shady titles, no middlemen.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Rimora Properties — All rights reserved.</small>
      </div>
    </footer>
  );
}
