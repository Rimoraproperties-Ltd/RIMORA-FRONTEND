export const metadata = {
  title: "Rimora",
  description: "Rimora Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
