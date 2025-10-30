// app/page.jsx
export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Rimora hero section.mp4" type="video/mp4" />
      </video>

      {/* Overlay for slight dark tint (optional, can remove if your Figma has no overlay) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-16 py-6 text-white text-lg font-semibold z-10">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">RIMORA</div>

        {/* Links */}
        <ul className="flex space-x-12">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#featured" className="hover:text-gray-300">Featured Properties</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          <li>
            <a
              href="#book"
              className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-100 transition"
            >
              Book an Inspection
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
