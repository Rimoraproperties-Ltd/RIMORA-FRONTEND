// app/page.jsx  (or pages/index.jsx)
export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/Rimora hero section.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content (optional, based on your Figma design) */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/30">
        <h1 className="text-6xl font-bold">Milk & Honey</h1>
        <p className="mt-4 text-lg">Luxury Redefined</p>
        <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </main>
  );
}
// app/page.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <WhyChooseUs />
        <h2 className="container" style={{marginTop:36}}>Our Properties</h2>
        {/* properties grid placeholder — we'll connect to backend next */}
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
