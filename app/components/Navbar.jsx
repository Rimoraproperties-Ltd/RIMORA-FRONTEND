// app/components/Navbar.jsx
export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <h1>Rimora Properties</h1>
          <div className="tag">FCDA-approved land in Abuja</div>
        </div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/properties">Our properties</a>
          <a href="/contact">Contact</a>
          <a className="btn" href="/contact">Book an inspection</a>
        </nav>
      </div>
    </header>
  );
}
