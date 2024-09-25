import Link from "next/link";
import React from "react";

function ContactPage() {
  return (
    <div className="contact-sec ">
      <h2 className="main-heading-cont">
        Let&#39;s Work Together
      </h2>
      <div className="outer-div-cont">
        <div className="inner-div-cont">
          <section className="section-cont">
            <div className="main-container">
              <h2 className="get-in-heading">
                Get in Touch
              </h2>
              <p className="get-in-para">
                I&#39;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>

              <div className="form-div">
                <form className="form">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="form-input"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="button"
                  >
                    Send Message
                  </button>
                </form>

                <div className="connect-btn">
                  <p className="connect-para">
                    Or connect with me on social media:
                  </p>
                  <div className="btn-link">
                    <Link
                      href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/"
                      target="_blank"
                      className="link-one"
                      rel="noopener"
                    >
                      <i className="fab fa-linkedin"></i>
                    </Link>
                    <Link
                      href="https://github.com/alishba241?tab=repositories"
                      target="_blank"
                      className="link-one"
                      rel="noopener"
                    >
                      <i className="fab fa-github"></i>
                    </Link>
                  </div>
                  <div className="btn-two">
                    <div className="btn-two-links">
                      <Link
                        href="https://www.linkedin.com/in/alishba-naveed-a9ab38251/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="linkedin-btn">
                          LinkedIn
                        </button>
                      </Link>
                      <Link
                        href="https://github.com/alishba241?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="github-btn">
                          GitHub
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="direct-reach ">
                  <p className="direct-reach-para">
                    Prefer direct email? Reach me at{" "}
                    <Link
                      href="mailto:alishbasheikh723@gmail.com"
                      className="mail-link"
                    >
                      developer99@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
