"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/properties`);
        const data = await res.json();
        setProperties(data);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, []);

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>🏠 Rimora Property Listings</h1>
      {properties.length > 0 ? (
        <ul>
          {properties.map((p) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      ) : (
        <p>No properties found or API not connected yet.</p>
      )}
    </main>
  );
}
