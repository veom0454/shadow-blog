"use client";
import "./studio.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import HowWeWork from "@/components/HowWeWork/HowWeWork";
import Spotlight from "@/components/Spotlight/Spotlight";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page studio">
        <section className="studio-hero">
          <div className="container">
            <div className="studio-hero-col">
              <Copy delay={0.3}>
                <p>
                  I see development as more than code. It is an ongoing
                  dialogue between design, technology, and user experience,
                  shaped with care, and built to endure.
                </p>
              </Copy>
            </div>
            <div className="studio-hero-col">
              <Copy delay={0.3}>
                <h2>
                  I exist to create digital experiences that feel intuitive,
                  well-crafted, and quietly transformative. Every project begins
                  with understanding and ends with an experience.
                </h2>
              </Copy>
              <div className="studio-hero-hero-img">
                <img src="/studio/about-hero.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="more-facts">
          <div className="container">
            <div className="more-facts-items">
              <div className="fact">
                <Copy delay={0.1}>
                  <p>Repositories</p>
                  <h2>80+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.2}>
                  <p>Technologies used</p>
                  <h2>20+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.3}>
                  <p>Projects delivered</p>
                  <h2>50+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.4}>
                  <p>Hours of coding</p>
                  <h2>10k+</h2>
                </Copy>
              </div>
              <div className="fact">
                <Copy delay={0.5}>
                  <p>Commits pushed</p>
                  <h2>5k+</h2>
                </Copy>
              </div>
            </div>
          </div>
        </section>
        <section className="how-we-work-container">
          <div className="container">
            <HowWeWork />
          </div>
        </section>
        <CTAWindow
          img="/studio/about-cta-window.jpg"
          header="The Archive"
          callout="Projects that speak through craft"
          description="Each project tells a story of code, design, and motion. Explore how ideas take shape and grow into polished digital experiences."
        />
        <Spotlight />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
