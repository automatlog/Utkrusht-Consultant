import React from 'react';

function Hero() {
  return (

    <div>
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">

            {/* Hero Content Start */}
            <div className="hero-content">

              {/* Section Title Start */}
              <div className="section-title">
                <h1 className="wow fadeInUp">
                   🚀Empowering Businesses to Grow, Scale & Succeed
                </h1>
                <p className="wow fadeInUp" data-wow-delay="0.25s">
                  At <strong>Utkrusht Consultant</strong>, we combine expertise in
                  <em> Digital Marketing, HR, Sales, Brand Management, and Business Strategy </em>
                  to transform challenges into opportunities. From startups to global enterprises,
                  our 360° consulting solutions help you achieve measurable growth and long-term success.
                </p>
              </div>
              {/* Section Title End */}

              <div className="hero-content-body wow fadeInUp" data-wow-delay="0.5s">

              </div>

            </div>
            {/* Hero Content End */}

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Hero;
