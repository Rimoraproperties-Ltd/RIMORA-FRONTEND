// app/components/Testimonials.jsx
export default function Testimonials() {
  const items = [
    {
      text: "I almost gave up on buying land in Abuja until I met Rimora. Their transparency is unmatched. Everything was explained clearly, and they walked me through the process.",
      author: "– Chinedu O."
    },
    {
      text: "The videos are what drew me in, but the service kept me. These guys don’t just sell land – they help you feel secure about your investment.",
      author: "– Fatima B."
    },
    {
      text: "For once, someone showed me land in Abuja that had proper FCDA documentation from Day 1. No games, no stories.",
      author: "– Joshua M."
    }
  ];

  return (
    <section className="testimonials container">
      <h3>Testimonals</h3>
      <div className="test-grid">
        {items.map((t, i) => (
          <blockquote className="test-card" key={i}>
            <div className="quote-mark">“</div>
            <p className="quote">{t.text}</p>
            <footer className="author">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
