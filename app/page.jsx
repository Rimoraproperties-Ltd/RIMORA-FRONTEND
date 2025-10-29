// app/page.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
