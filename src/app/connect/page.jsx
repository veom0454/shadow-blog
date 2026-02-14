"use client";
import "./contact.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const page = () => {
  return (
    <>
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-hero-header">
                <Copy delay={0.3}>
                  <h1>Every great project begins with a conversation</h1>
                </Copy>
              </div>
              <div className="contact-copy-year">
                <Copy delay={0.1}>
                  <h1>&copy;25</h1>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.35}>
                    <p>Let’s Connect</p>
                    <p>Open to freelance, collaboration, and full-time opportunities.</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={0.4}>
                    <p>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/aditya-pandey-p1002/" target="_blank" rel="noopener noreferrer"><p>Aditya Pandey</p></a>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={0.45}>
                    <p>GitHub</p>
                    <a href="https://github.com/Aditya060806" target="_blank" rel="noopener noreferrer"><p>Aditya060806</p></a>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={0.5}>
                    <p>Instagram</p>
                    <a href="https://www.instagram.com/adityapandey_06" target="_blank" rel="noopener noreferrer"><p>@adityapandey_06</p></a>
                  </Copy>
                </div>
              </div>
              <div className="contact-img">
                <img
                  src="/contact/contact-img.jpg"
                  alt="Aditya Pandey workspace"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default page;
