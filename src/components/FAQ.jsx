import React, { useState } from "react";
import "./FAQ.css";

import ArrowDown from "../assets/images/up.svg"; // your arrow icon


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      q: "I am a beginner. Will this help me?",
      a: "Yes. This trial class is designed for complete beginners and gives you a clear starting point."
    },
    {
      q: "I have completed A1 or A2. Should I still join?",
      a: "Yes. You will get clarity on your level, progress plan, and exam strategy."
    },
    {
      q: "Who are your trainers?",
      a: "Certified French trainers with years of experience teaching A1 to B2."
    },
    {
      q: "Is career guidance included?",
      a: "Yes. It is provided as a free value add if relevant to your goals."
    },
    {
      q: "Will I get recording?",
      a: "No. It is a live class and meant to be attended live for maximum benefit."
    },
    {
      q: "Is ₹99 refundable?",
      a: "No. It is a non refundable trial class fee."
    },
    {
      q: "Will you sell a course inside the trial class?",
      a: "We will share the 50 percent offer for students who want to continue learning with us. There is no pressure to join."
    }
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-wrapper">
      <h2 className="faq-title">Frequently Asked Questions</h2>

      <div className="faq-box">
        {faqData.map((item, i) => (
          <div key={i} className="faq-item">
            <button className="faq-question" onClick={() => toggle(i)}>
              <span className={openIndex === i ? "active-q" : ""}>
                {item.q}
              </span>

              <img
                src={ArrowDown}
                alt="toggle"
                className={`faq-arrow ${openIndex === i ? "rotate" : ""}`}
              />
            </button>

            {openIndex === i && (
              <p className="faq-answer">{item.a}</p>
            )}

            {i !== faqData.length - 1 && <div className="faq-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
