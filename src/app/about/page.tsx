import React from "react";

function AboutPage() {
  return (
    <div className="about-sec">

      <h2 className="main-heading">
        So Who I Am?
      </h2>

      <div className="outer-about">
        <div className="inner-about">
          <p className="name-heading">Hi, I&#39;m Alishba Naveed!</p>
          <br />
          <p className="paragraphs">
            I&#39;m a passionate Frontend Developer and Graphic Designer with a
            background in Medical Studies. With over 1.5 years of experience in
            web development, I specialize in creating visually appealing and
            responsive websites. My expertise includes HTML, CSS, JavaScript,
            TypeScript, and Tailwind CSS, and I&#39;m currently exploring
            Next.js to further enhance my development skills.
          </p>
          <br />
          <p className="paragraphs">
            In addition to coding, I have a strong foundation in graphic design,
            which allows me to craft cohesive digital experiences. I&#39;m also
            certified as an Amazon Virtual Assistant, showcasing my versatility
            in the tech industry.
          </p>
          <br />
          <p className="paragraphs">
            While balancing my studies as a first-year medical student, I&#39;m
            deeply interested in how technology and healthcare intersect,
            particularly with advancements in AI and Web3. I&#39;m currently
            pursuing a specialized course in Artificial Intelligence and
            Metaverse at Governor House to explore new horizons in this field.
          </p>
          <br />
          <p className="paragraphs">
            I&#39;m always excited to take on new challenges and collaborate
            with clients to bring their ideas to life through innovative design
            and development.
          </p>
          <br />
          <p className="paragraphs">
            Let&#39;s connect and create something amazing together!
          </p>
        </div>
      </div>

      <div>
        <div className="services-sec">
          <h1>My Services</h1>
        </div>
        <div className="services-grid">
          <div className="service-content">
            <p className="service-heading ">
              Responsive Website Design
            </p>
            <p className="service-para">
              I will design fully responsive websites that look great on any
              device, whether its a mobile phone, tablet, or laptop. Ensuring
              your site is visually appealing and functional across all screen
              sizes.
            </p>
          </div>

          <div className="service-content group">
            <p className="service-heading">
              Personal Portfolio Website Development
            </p>
            <p className="service-para">
              Showcase your work professionally with a customized portfolio
              website designed to highlight your skills and projects
              effectively.
            </p>
          </div>

          <div className="service-content group">
            <p className="service-heading">
              One-Page Websites
            </p>
            <p className="service-para">
              I build simple, stylish one-page websites that deliver all the
              essential information in a clean and engaging format. Ideal for
              small businesses or personal profiles.
            </p>
          </div>

          <div className="service-content group">
            <p className="service-heading">
              Next.js Website Development
            </p>
            <p className="service-para">
              I develop fast, SEO-friendly websites using Next.js, providing
              high performance and smooth navigation with dynamic routing.
            </p>
          </div>

          <div className="service-content group">
            <p className="service-heading">
              Frontend Bug Fixing and Improvements
            </p>
            <p className="service-para">
              I resolve frontend issues like layout problems, responsiveness
              errors, and browser compatibility bugs to ensure your website
              works flawlessly.
            </p>
          </div>

          <div className="service-content group">
            <p className="service-heading">
              Website Maintenance & Updates
            </p>
            <p className="service-para">
              I offer regular website updates, including content changes,
              security patches, and the addition of new features, ensuring your
              site remains up-to-date and secure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
