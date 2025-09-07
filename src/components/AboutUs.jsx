import React from 'react';

function MarketAbout() {
  return (
    <>

      {/* Market Leader Section Start */}
      <div className="market-leader">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="section-title">
                <h3 className="wow fadeInUp">leaders</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                  Market leaders use diggy to grow
                </h2>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="market-leader-images">
                {[1, 2, 3, 4, 5, 6].map((num, index) => (
                  <div
                    key={num}
                    className="market-leader-img wow fadeInUp"
                    data-wow-delay={`${index * 0.2}s`}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/market-leader-img-${num}.svg`}
                      alt={`Market Leader ${num}`}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Market Leader Section End */}


      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row">

            {/* Left Column: Images */}
            <div className="col-lg-6">
              <div className="about-images">

                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/about-img-1.jpg`} alt="About 1" />
                  </figure>
                </div>

                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/about-img-2.jpg`} alt="About 2" />
                  </figure>
                </div>

                <div className="about-exprience-box wow fadeInUp">
                  <div className="icon-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-about-exprience.svg`} alt="Experience Icon" />
                  </div>
                  <div className="about-exprience-content">
                    <h3>experience advisor</h3>
                  </div>
                </div>

                <div className="satisfied-customer-box">
                  <div className="satisfied-progress-circle">
                    <div className="circle" data-value="0.9">
                      <div className="progress_value">
                        <span className="pro_data"></span><span>%</span>
                      </div>
                    </div>
                    <h3>90% Satisfied Customer</h3>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Content */}
            <div className="col-lg-6">
              <div className="about-content">

                <div className="section-title">
                  <h3 className="wow fadeInUp">about us</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Igniting your digital presence
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.4s">
                    We provide the best consulting services for businesses all over the world and in every industry.
                    Whether you are a new startup or a large company looking to broaden your horizons,
                    our team of experts will help you make the right decisions for you.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">
                    From helping you refine your supply chain management, enhance human resource strategies,
                    guiding you to choose the right corporate social responsibilities and managing your public relations,
                    we provide all services to ensure the success of your business.
                  </p>
                </div>

                <div className="about-cta-box wow fadeInUp" data-wow-delay="0.8s">
                  <div className="icon-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/icon-about-cta.svg`} alt="CTA Icon" />
                  </div>
                  <div className="about-cta-image">
                    <figure>
                      <img src={`${process.env.PUBLIC_URL}/assets/images/about-cta-image.jpg`} alt="CTA" />
                    </figure>
                  </div>
                  <div className="about-cta-content">
                    <p>Whether you have questions about our services? Call Now</p>
                  </div>
                </div>

                <div className="about-content-body wow fadeInUp" data-wow-delay="1s">
                  <ul>
                    <li>Tips and Tricks</li>
                    <li>Know About farm</li>
                    <li>Your Startup</li>
                    <li>Mistakes To Avoid</li>
                  </ul>
                </div>

                <div className="about-content-btn wow fadeInUp" data-wow-delay="1.2s">
                  <a href="/about" className="btn-default">let's start</a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* About Us Section End */}


    </>
  );
}

export default MarketAbout;
