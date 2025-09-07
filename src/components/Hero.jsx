import React from 'react';

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Hero Content Start */}
            <div className="hero-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h1 className="wow fadeInUp">
                  Unlock your online potential and get a success
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  We are a collective of visionary designers, storytellers, and strategists, passionate about bringing your brand to life. From initial concept to final delivery, we are committed to driving your success.
                </p>
              </div>
              {/* Section Title End */}

              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">

                <div className="hero-agency-image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/hero-agency-image.svg`} 
                    alt="Hero Agency"
                  />
                </div>

                <div className="hero-client-box">
                  <div className="hero-client-image">
                    <img 
                      src={`${process.env.PUBLIC_URL}/assets/images/hero-client-image.svg`} 
                      alt="Hero Client"
                    />
                  </div>
                  <div className="hero-client-content">
                    <p>ask a question to manager</p>
                  </div>
                </div>

              </div>

            </div>
            {/* Hero Content End */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
