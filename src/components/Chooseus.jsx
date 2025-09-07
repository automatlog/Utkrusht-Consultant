import React from 'react';

function WhyUs() {
  return (
    <div className="why-us">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">why us ?</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                Discover the unique advantages
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="why-us-item wow fadeInUp">
              <div className="icon-box">
                <img src="/assets/images/icon-why-us-1.svg" alt="100% Secure" />
              </div>
              <div className="why-us-content">
                <h3>100% Secure</h3>
                <p>Our processes and solutions prioritize the security and confidentiality of your business information at every step.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-us-item wow fadeInUp" data-wow-delay="0.25s">
              <div className="icon-box">
                <img src="/assets/images/icon-why-us-2.svg" alt="24/7 Support" />
              </div>
              <div className="why-us-content">
                <h3>24/7 Support</h3>
                <p>Our team is available around the clock to provide guidance, support, and solutions whenever you need them.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-us-item wow fadeInUp" data-wow-delay="0.5s">
              <div className="icon-box">
                <img src="/assets/images/icon-why-us-3.svg" alt="Award Winner" />
              </div>

              <div className="why-us-content">
                <h3>Award Winner</h3>
                <p>Recognized for excellence, our consulting services have earned accolades for innovation, impact, and client satisfaction.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="why-us-item wow fadeInUp" data-wow-delay="0.75s">
              <div className="icon-box">
                <img src="/assets/images/icon-why-us-4.svg" alt="Mutual Help" />
              </div>
              <div className="why-us-content">
                <h3>Mutual Help</h3>
                <p>We collaborate closely with clients, offering personalized guidance and comprehensive expertise across all business domains.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
