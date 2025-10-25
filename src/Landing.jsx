import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import ResponsiveShowcase from "./components/ResponsiveShowcase";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";

export default function LandingPage() {
    return (
        <div className="font-sans font-extrabold text-white bg-gray-900 leading-relaxed tracking-wide">
            <Nav />
            <Hero />
            <Process />
            <Portfolio />
            <ResponsiveShowcase />
            <Benefits />
            <Contact />
        </div>
    );
}

