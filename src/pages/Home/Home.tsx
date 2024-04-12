import Footer from "../../components/Footer";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
