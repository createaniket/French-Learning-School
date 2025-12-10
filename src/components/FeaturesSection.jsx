import React from "react";
import "./FeaturesSection.css";
import Check from "../assets/images/check.svg";

export default function FeaturesSection() {
  const featuresTop = [
    "A LIVE expert led trial class",
    "Clarity on your correct starting level",
    "A structured roadmap for A1 to B2",
    "Timeline to finish each level realistically",
    "Exam strategy for DELF, TEF and other tests"
  ];

  const featuresBottom = [
    "A Mini Assessment to identify your current level",
    "Do’s and Don’ts that save months of wasted time",
    "A simple 90 Days study plan",
    "Free Career Counselling"
  ];

  return (
    <div className="features-wrapper">
      <h1 className="features-title">
        Everything You Need <br /> To Start Learning French The Right Way
      </h1>

      <p className="price-text">For ₹99, you get:</p>

      {/* Top Row */}
      <div className="features-grid">
        {featuresTop.map((item, index) => (
          <div className="feature-card" key={index}>
           <img src={Check} alt="" />
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="features-grid bottom-row">
        {/* Normal cards */}
        {featuresBottom.map((item, index) => (
          <div className="feature-card" key={index}>
    <img src={Check} alt="" />
            <p>{item}</p>
          </div>
        ))}

        {/* Bonus Card */}
        <div className="feature-card bonus-card">
          <span className="bonus-tag">Special Offer</span>
          <p>Get 50 percent off on the full course. Your ₹99 will be adjusted.</p>
        </div>
      </div>
    </div>
  );
}
