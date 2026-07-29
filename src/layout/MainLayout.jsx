import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import About from "../components/About";
import Plans from "../components/Plans";
import Trainers from "../components/Trainers";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

function MainLayout() {
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Hero />
        <About />
        <Plans setSelectedPlan={setSelectedPlan} />
        <Trainers />
        <Gallery />
        <Contact
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
        />
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}

export default MainLayout;