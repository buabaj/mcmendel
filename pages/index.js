import { useCycle } from "framer-motion";
import Head from "next/head";
import React from "react";
import About from "../components/about/about";
import Executive from "../components/executive/executive";
import Footer from "../components/footer/footer";
import Goal from "../components/goal/goal";
import GreenEnergy from "../components/green-energy/green-energy";
import Hero from "../components/hero-section/hero";
import Nav from "../components/nav/nav";
import News from "../components/news/news";
import RenewableEnergy from "../components/renewable-energy/renewable-energy";
import Meta from "../components/utilities/meta";
import SidebarComponent from "../components/utilities/sidebar";
import Sidebar from "../components/utilities/sidebar";

export default function Home() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <>
      <Meta title="Starzec Energy" />

      <Nav cycleOpen={cycleOpen} />
      <SidebarComponent open={open} cycleOpen={cycleOpen} />
      <Hero cycleOpen={cycleOpen} />
      <About />
      <Goal />
      <RenewableEnergy />
      <GreenEnergy />
      <News />
      <Footer />
    </>
  );
}
