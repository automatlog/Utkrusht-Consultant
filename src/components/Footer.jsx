import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      {/* Footer Ticker Start */}
      <div className="footer-ticker">
        {/* Scrolling Ticker Start */}
        <div className="scrolling-ticker">
          {/* Scrolling Ticker Box Start */}
          <div className="scrolling-ticker-box">
            {/* Scrolling Ticker Content Start */}
            <div className="scrolling-content">
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
            </div>
            {/* Scrolling Ticker Content End */}

            {/* Scrolling Ticker Content Start */}
            <div className="scrolling-content">
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
              <span>Branding</span>
              <span>Development</span>
              <span>SEO</span>
              <span>Digital Marketing</span>
            </div>
            {/* Scrolling Ticker Content End */}
          </div>
          {/* Scrolling Ticker Box End */}
        </div>
        {/* Scrolling Ticker End */}
      </div>
      {/* Footer Ticker End */}


      <footer className="main-footer">

        {/* Let's Work Together start */}
        <div className="footer-work-together">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="work-together-content">
                  <div className="section-title">
                    <h2>Let's Work Together</h2>
                  </div>

                  <div className="work-together-btn">
                    <Link to="/contact"><i className="fa-solid fa-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Let's Work Together end */}

        {/* Footer Main Start */}
        <div className="footer-main">
          <div className="container">
            <div className="row">

              <div className="col-lg-7">
                {/* About Footer start */}
                <div className="about-footer">
                  <div className="about-footer-header">

                    {/* Footer Logo Start */}
                    <div className="footer-logo">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="Footer Logo" />
                    </div>
                    {/* Footer Logo End */}

                    {/* Footer Social List Start */}
                    <div className="footer-social-list">
                      <ul>
                        <li><a href="https://www.instagram.com/utkrushtconsultants"><i className="fa-brands fa-instagram"></i>instagram</a></li>
                      </ul>
                    </div>
                    {/* Footer Social List End */}

                  </div>

                  {/* Footer Links start */}
                  <div className="footer-links">
                    <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/">Blog</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                  {/* Footer Links end */}

                  {/* About Footer Content Start */}
                  <div className="about-footer-content">
                    <p>Our collaborative approach ensures that we understand your unique vision and deliver tailored solutions that drive results.</p>
                  </div>
                  {/* About Footer Content End */}

                </div>
                {/* About Footer end */}
              </div>

              <div className="col-lg-5">
                {/* Footer Newsletter start */}
                <div className="footer-newsletter">
                  <div className="newsletter-content">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for exclusive content and updates.</p>
                  </div>

                  <div className="newsletter-form">
                    <form id="newsletterForm" action="#" method="POST">
                      <div className="form-group">
                        <input type="email" name="email" className="form-control" id="mail" placeholder="Enter Email" required />
                        <button type="submit" className="btn-default">subscribe</button>
                      </div>
                    </form>
                  </div>

                  <div className="newsletter-form-content">
                    <p>We're excited to partner with you on your journey.</p>
                  </div>
                </div>
                {/* Footer Newsletter end */}
              </div>

            </div>

            {/* Footer Copyright Section Start */}
            <div className="footer-copyright">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <p>Build by <font color="#8040fe">Digency</font></p>
                </div>

                <div className="col-lg-5">
                  <div className="footer-copyright-text">
                    <p>Copyright © 2025 All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer Copyright Section End */}

          </div>
        </div>
        {/* Footer Main End */}

      </footer>

    </div>
  );
}

export default Footer;
