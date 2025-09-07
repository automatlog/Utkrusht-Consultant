import React from 'react'
import Chooseus from'../components/Chooseus'
import Team from'../components/Team'
import Testimonial from'../components/Testimonial'
import Faq from'../components/Faq'



function About() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="wow fadeInUp">About Us</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      about us
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>

      <div className="page-about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page About Solutions Start */}
              <div className="page-about-solutions">

                {/* Page About Box 1 Start */}
                <div className="page-about-box-1">
                  {/* Page About Content Start */}
                  <div className="page-about-content">
                    {/* Section Title Start */}
                    <div className="section-title">
                      <h2 className="wow fadeInUp">
                        Our commitment to delivering exceptional creative solutions
                      </h2>
                      <p className="wow fadeInUp" data-wow-delay="0.25s">
                        We are a team of passionate creators, strategists, and innovators dedicated to transforming ideas into impactful brand experiences. Founded in 2010, our agency was born out of a desire to help businesses tell their unique stories through compelling design, effective marketing strategies, and actionable business solutions.
                      </p>
                    </div>
                    {/* Section Title End */}

                    {/* Contact Now Image Start */}
                    <div className="contact-now-image">
                      <img src="images/icon-contact-now.svg" alt="Contact Now" />
                    </div>
                    {/* Contact Now Image End */}
                  </div>
                  {/* Page About Content End */}

                  {/* Page About Image Start */}
                  <div className="page-about-image">
                    <figure className="reveal image-anime">
                      <img src="images/page-about-img-1.jpg" alt="About Us" />
                    </figure>
                  </div>
                  {/* Page About Image End */}
                </div>
                {/* Page About Box 1 End */}

                {/* Page About Box 2 Start */}
                <div className="page-about-box-2">
                  {/* Page About Image Start */}
                  <div className="page-about-image">
                    <figure className="reveal image-anime">
                      <img src="images/page-about-img-2.jpg" alt="Collaboration" />
                    </figure>
                  </div>
                  {/* Page About Image End */}

                  {/* Page About Content Start */}
                  <div className="page-about-content">
                    <p className="wow fadeInUp" data-wow-delay="0.5s">
                      Collaboration is at the heart of what we do. We work closely with our clients to understand their goals and vision, ensuring that every project is tailored to their specific needs. Our creative process is transparent and inclusive, allowing for continuous feedback and refinement.
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="0.75s">
                      Our mission is simple: to empower brands and businesses by delivering exceptional solutions that resonate with their target audiences. We believe that every brand has a story worth telling, and we're here to help you share it in the most engaging and authentic way possible.
                    </p>
                  </div>
                  {/* Page About Content End */}
                </div>
                {/* Page About Box 2 End */}

              </div>
              {/* Page About Solutions End */}
            </div>
          </div>
        </div>
      </div>

      <div className="about-fact">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">facts</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                  Key highlights of Utkrusht Consultants
                </h2>
              </div>
              {/* Section Title End */}
            </div>
            <div className="col-lg-6">
              {/* Section btn Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
                <a href="contact.html" className="btn-default">Contact Us</a>
              </div>
              {/* Section btn End */}
            </div>
          </div>

          <div className="row">
            {/* About Fact Counter Start */}
            <div className="col-lg-4 col-md-6">
              <div className="fact-counter-item">
                <h3 className="customer-counter">Happy Clients</h3>
                <h2><span className="counter">20</span>K<sup>+</sup></h2>
                <p>Our clients trust us to deliver tailored consulting solutions for their unique business needs.</p>
              </div>
            </div>
            {/* About Fact Counter End */}

            {/* About Fact Counter Start */}
            <div className="col-lg-4 col-md-6">
              <div className="fact-counter-item">
                <h3 className="impact-counter">Successful Campaigns</h3>
                <h2><span className="counter">40</span><sup>+</sup></h2>
                <p>We consistently deliver measurable results and impactful strategies that drive growth.</p>
              </div>
            </div>
            {/* About Fact Counter End */}

            {/* About Fact Counter Start */}
            <div className="col-lg-4 col-md-6">
              <div className="fact-counter-item">
                <h3 className="experience-counter">Expert Consultants</h3>
                <h2><span className="counter">2</span><sup>+</sup></h2>
                <p>Our team of experienced consultants brings expertise in multiple domains to ensure success.</p>
              </div>
            </div>
            {/* About Fact Counter End */}
          </div>
        </div>
      </div>

      <div className="how-it-work">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-6">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">how it works</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                  Our collaborative journey from idea to execution
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-6">
              {/* Section Button Start */}
              <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
                <a href="contact.html" className="btn-default">Contact Us</a>
              </div>
              {/* Section Button End */}
            </div>
          </div>
        </div>

        <div className="container-fluid">
          {/* Step 1: Research */}
          <div className="row no-gutters how-work-box align-items-center">
            <div className="col-md-6">
              <div className="how-work-content wow fadeInUp">
                <div className="how-work-title">
                  <h3>01</h3>
                  <h2>Research</h2>
                  <p>
                    We start by analyzing market trends, competitor benchmarks, and client insights to uncover opportunities and define challenges clearly.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="how-work-image">
                <figure>
                  <img src="images/how-work-image-1.jpg" alt="Research" />
                </figure>
              </div>
            </div>
          </div>

          {/* Step 2: Planning */}
          <div className="row no-gutters how-work-box align-items-center">
            <div className="col-md-6">
              <div className="how-work-content wow fadeInUp" data-wow-delay="0.25s">
                <div className="how-work-title">
                  <h3>02</h3>
                  <h2>Planning</h2>
                  <p>
                    Our team creates a tailored roadmap with clear milestones, resources, and strategies aligned to your business goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="how-work-image">
                <figure>
                  <img src="images/how-work-image-2.jpg" alt="Planning" />
                </figure>
              </div>
            </div>
          </div>

          {/* Step 3: Development */}
          <div className="row no-gutters how-work-box align-items-center">
            <div className="col-md-6">
              <div className="how-work-content wow fadeInUp" data-wow-delay="0.5s">
                <div className="how-work-title">
                  <h3>03</h3>
                  <h2>Development</h2>
                  <p>
                    We bring ideas to life through innovative solutions, continuous testing, and refinement based on real-time feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="how-work-image">
                <figure>
                  <img src="images/how-work-image-3.jpg" alt="Development" />
                </figure>
              </div>
            </div>
          </div>

          {/* Step 4: Launch & Growth */}
          <div className="row no-gutters how-work-box align-items-center">
            <div className="col-md-6">
              <div className="how-work-content wow fadeInUp" data-wow-delay="0.75s">
                <div className="how-work-title">
                  <h3>04</h3>
                  <h2>Launch & Growth</h2>
                  <p>
                    With a strategic rollout, we monitor results, optimize performance, and ensure sustainable growth post-launch.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="how-work-image">
                <figure>
                  <img src="images/how-work-image-3.jpg" alt="Launch & Growth" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Chooseus/>
      <Team/>
      <Testimonial/>
      <Faq/>
    </div>

  )
}

export default About