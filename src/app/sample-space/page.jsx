"use client";
import "./sample-space.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page sample-space">
        <section className="sample-space-hero">
          <div className="sample-space-hero-img">
            <img src="/sample-space/hero.jpg" alt="Arcade Residence Lisbon" />
          </div>
          <div className="sample-space-hero-overlay"></div>
          <div className="container">
            <div className="sample-space-hero-header">
              <Copy delay={0.3} animateOnScroll={false}>
                <h1>Celestia Dashboard</h1>
              </Copy>
            </div>
            <div className="sample-space-content">
              <div className="sample-space-col">
                <Copy delay={0.35} animateOnScroll={false}>
                  <p>Full-Stack Web Application</p>
                </Copy>
              </div>
              <div className="sample-space-col">
                <div className="sample-space-content-wrapper">
                  <Copy delay={0.4} animateOnScroll={false}>
                    <p>React / Next.js</p>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper">
                  <Copy delay={0.45} animateOnScroll={false}>
                    <h3>
                      Celestia Dashboard is a study in clarity and motion, where
                      data visualization and fluid interactions guide the user
                      through complex information with quiet elegance.
                    </h3>
                    <h3>
                      The design combines modern UI patterns with a focus on
                      accessibility, creating an experience that feels both
                      powerful and effortlessly intuitive.
                    </h3>
                  </Copy>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Date Completed</p>
                        <p>2025</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Project Type</p>
                        <p>Full-Stack Application</p>
                        <p>Dashboard & Analytics</p>
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="sample-space-content-wrapper sample-space-meta">
                  <div className="sample-space-hero-row">
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tech Stack</p>
                        <p>React & Next.js</p>
                        <p>Node.js & MongoDB</p>
                        <p>GSAP Animations</p>
                      </Copy>
                    </div>
                    <div className="sample-space-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tools</p>
                        <p>Figma</p>
                        <p>Vercel</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-1">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Technical Story</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <h3>
                  In Celestia Dashboard, the component architecture creates a
                  measured rhythm that guides interaction through the interface.
                  Each section frames data differently, shifting context as one
                  navigates from overview to detailed analytics.
                </h3>

                <h3>
                  Technologies were chosen for their reliability and performance:
                  React for reactivity, Node.js for scale, and GSAP for
                  motion. These tools work in harmony, ensuring the application
                  evolves gracefully with growing data.
                </h3>
              </Copy>
              <div className="sample-space-details-img">
                <img src="/sample-space/sample-space-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="sample-space-details sample-space-details-2">
          <div className="container">
            <div className="sample-space-col">
              <Copy delay={0.1}>
                <p>Technical Qualities</p>
              </Copy>
            </div>
            <div className="sample-space-col">
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>Performance</p>
                      <p>Optimized</p>
                      <p>Lazy loading</p>
                      <p>Edge caching</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>UX Flow</p>
                      <p>Intuitive</p>
                      <p>Guided navigation</p>
                      <p>Responsive</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-content-wrapper sample-space-meta">
                <div className="sample-space-hero-row">
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Frontend</p>
                      <p>React components</p>
                      <p>Custom hooks</p>
                      <p>CSS modules</p>
                    </Copy>
                  </div>
                  <div className="sample-space-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>Backend</p>
                      <p>REST APIs</p>
                      <p>Real-time updates</p>
                      <p>Auth & security</p>
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="sample-space-details-img">
                <img
                  src="/sample-space/sample-space-2.jpg"
                  alt="Celestia Dashboard interface"
                />
              </div>
              <Copy delay={0.2}>
                <h3>
                  Every technical choice within the dashboard was guided by
                  user experience. The aim was not only to display data but to
                  shape how information, interaction, and feedback are felt as
                  one navigates through the application.
                </h3>
              </Copy>
            </div>
          </div>
        </section>
        <CTAWindow
          img="/sample-space/next-project.jpg"
          header="Next Project"
          callout="Built for performance and clarity"
          description="A study in clean architecture and smooth interactions, this project invites exploration. Code, design, and motion come together."
        />
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
