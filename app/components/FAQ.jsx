// app/components/FAQ.jsx
"use client";
import { useState } from "react";

const questions = [
  {
    q: "Q1: Are all your properties FCDA-approved?",
    a: "Yes. We deal exclusively in FCDA-approved land, meaning your investment is backed by the right allocation and documents."
  },
  {
    q: "Q2: Do you charge inspection fees?",
    a: "No, inspections are free. We believe you should be able to view your potential investment without barriers."
  },
  {
    q: "Q3: How can I verify the land title?",
    a: "We’ll show you all relevant documents during inspection. You’re also free to do independent verification with FCDA."
  },
  {
    q: "Q4: Do you help with allocation after purchase?",
    a: "Yes. We work closely with developers to ensure smooth and documented allocation for all clients."
  },
  {
    q: "Q5: Can I pay in installments?",
    a: "Yes. Some properties come with payment plans. Let us know your budget and we’ll show you suitable options."
  }
];

export default function FAQ() {
  return (
    <section className="faq container">
      <h3>Frequently asked question</h3>
      <div className="faq-list">
        {questions.map((item, i) => (
          <Accordion key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </section>
  );
}

function Accordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion ${open ? "open" : ""}`}>
      <button className="acc-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="acc-icon">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="acc-a">
          <p>{a}</p>
        </div>
      )}
    </div>
  );
}
