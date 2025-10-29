// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Rimora Properties",
  description: "Rimora Properties — FCDA-approved land and real estate in Abuja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
