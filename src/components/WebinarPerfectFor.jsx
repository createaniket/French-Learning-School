import React from "react";
import "./WebinarPerfectFor.css";
import Check from "../assets/images/check.svg";

export default function WebinarPerfectFor() {
  const items = [
    "Complete beginners who want to start French the right way",
    " Learners stuck between A1, A2 or B1 and unsure how to progress",
    "Anyone confused about timelines, level requirements, or study plans",
    "Working professionals planning to move to Canada or Europe for better opportunities",
    "College students who want to study abroad and need clarity on language levels",
    "People aiming for PR who must complete French levels systematically",
    "Students preparing for DELF or TEF exams",
    "Anyone who wants a clear, practical roadmap from A1 to B2",
  ];

  return (
    <section className="webinar-section">
      <div className="content-wrapper">
        <h2 className="webinar-title">This Trial Class Is Perfect For</h2>
        <p className="webinar-subtitle">
If French is part of your plan, this class will give you the exact clarity you need.
        </p>

        <div className="grid-container">
          {items.map((text, index) => (
            <div className="grid-card" key={index}>
        <img src={Check} alt="" />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
