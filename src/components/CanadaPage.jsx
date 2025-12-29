import React from "react";
import "./CanadaPage.css";


import TopTicker from "./compnewpage/components/ScrollingStrip";
import Hero from "./compnewpage/components/Hero";
import InsideWebinar from "./compnewpage/components/InsideWebinar";
import StarterKit from "./compnewpage/components/StarterKit";
import HowItWorks from "./compnewpage/components/HowItWorks";
import FAQ from "./compnewpage/components/FAQ";
import CTA from "./compnewpage/components/CTA";
import Footer from "./compnewpage/components/Footer";
import TeamSection from "./compnewpage/components/TeamSection";
import HeroSection from "./compnewpage/components/HeroSection";
import FeaturesSection from "./compnewpage/components/FeaturesSection";
import InfoStrip from "./compnewpage/components/InfoStrip";
import WebinarPerfectFor from "./compnewpage/components/WebinarPerfectFor";
import TestimonialsSection from "./compnewpage/components/TestimonialsSection";
import WhyWeCreated from "./compnewpage/components/WhyWeCreated";
import BottomStrip from "./compnewpage/components/BottomStrip";
import LogoStrip from "./compnewpage/components/LogoStrip";





export default function CanadaPage() {
  return (
<>

            <div className="min-h-screen">
              <TopTicker />
              <LogoStrip />

              <header className="relative">
                <Hero />
              </header>

              <TeamSection />

              <main className="space-y-24">
                <HeroSection />
                <FeaturesSection />
                <InfoStrip />
                <WebinarPerfectFor />
                <InsideWebinar />
                <StarterKit />
                <TestimonialsSection />
                <WhyWeCreated />
                <HowItWorks />
                <FAQ />
                <CTA />
              </main>

              <BottomStrip />
              <Footer />
            </div>


</>
  );
}
