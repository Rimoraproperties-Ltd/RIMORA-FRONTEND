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
