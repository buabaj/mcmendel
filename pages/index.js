import About from "../components/about/about";
import Executive from "../components/executive/executive";
import Footer from "../components/footer/footer";
import Goal from "../components/goal/goal";
import GreenEnergy from "../components/green-energy/green-energy";
import Hero from "../components/hero-section/hero";
import News from "../components/news/news";
import RenewableEnergy from "../components/renewable-energy/renewable-energy";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      {/* <Executive /> */}
      <Goal />
      <RenewableEnergy />
      <GreenEnergy />
      <News/>
      <Footer/>
    </div>
  );
}
