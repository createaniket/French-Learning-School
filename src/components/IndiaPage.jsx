import React from "react";


import TopTicker from "./compnewIndia/components/ScrollingStrip";

import Hero from "./compnewIndia/components/Hero";
import InsideWebinar from "./compnewIndia/components/InsideWebinar";
import StarterKit from "./compnewIndia/components/StarterKit";
import HowItWorks from "./compnewIndia/components/HowItWorks";
import FAQ from "./compnewIndia/components/FAQ";
import CTA from "./compnewIndia/components/CTA";
import Footer from "./compnewIndia/components/Footer";
import TeamSection from "./compnewIndia/components/TeamSection";
import HeroSection from "./compnewIndia/components/HeroSection";
import FeaturesSection from "./compnewIndia/components/FeaturesSection";
import InfoStrip from "./compnewIndia/components/InfoStrip";
import WebinarPerfectFor from "./compnewIndia/components/WebinarPerfectFor";
import TestimonialsSection from "./compnewIndia/components/TestimonialsSection";
import WhyWeCreated from "./compnewIndia/components/WhyWeCreated";
import BottomStrip from "./compnewIndia/components/BottomStrip";
import LogoStrip from "./compnewIndia/components/LogoStrip";





export default function IndiaPage() {
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
