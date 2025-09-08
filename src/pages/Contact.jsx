import React from "react";

const PageHeader = () => {
  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Page Header Box Start */}
              <div className="page-header-box">
                <h1 className="wow fadeInUp">Contact Us</h1>
                <nav className="wow fadeInUp" data-wow-delay="0.25s">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index-2.html">home</a>
                    </li>
                    <li
                      className="breadcrumb-item active"
                      aria-current="page"
                    >
                      contact us
                    </li>
                  </ol>
                </nav>
              </div>
              {/* Page Header Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* page Contact Us Start */}
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Conatct Info Item Start */}
              <div className="contact-info-item wow fadeInUp">
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/assets/images/icon-phone.svg" alt="Phone Icon" />
                </div>
                {/* Icon Box End */}

                {/* Contact Info Content Start */}
                <div className="contact-info-content">
                  <h3>Phone & Fax</h3>
                  <p>mobile : (+0)123 456 789</p>
                  <p>fax : +0 123 456 789 123</p>
                </div>
                {/* Contact Info Content End */}
              </div>
              {/* Conatct Info Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Conatct Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/assets/images/icon-mail.svg" alt="mail" />
                </div>
                {/* Icon Box End */}

                {/* Contact Info Content Start */}
                <div className="contact-info-content">
                  <h3>mail address</h3>
                  <p>info@domainname.com</p>
                  <p>sales@domainname.com</p>
                </div>
                {/* Contact Info Content End */}
              </div>
              {/* Conatct Info Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Conatct Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/assets/images/icon-location.svg" alt="location" />
                </div>
                {/* Icon Box End */}

                {/* Contact Info Content Start */}
                <div className="contact-info-content">
                  <h3>our address</h3>
                  <p>80082 Denny Lake, Schusterchester, NE 92734</p>
                </div>
                {/* Contact Info Content End */}
              </div>
              {/* Conatct Info Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Conatct Info Item Start */}
              <div
                className="contact-info-item wow fadeInUp"
                data-wow-delay="0.6s"
              >
                {/* Icon Box Start */}
                <div className="icon-box">
                  <img src="/assets/images/icon-watch.svg" alt="office hour" />
                </div>
                {/* Icon Box End */}

                {/* Contact Info Content Start */}
                <div className="contact-info-content">
                  <h3>office hour</h3>
                  <p>Sun - Thu 09 am - 06pm</p>
                  <p>Fri - Sat 4 pm - 10pm</p>
                </div>
                {/* Contact Info Content End */}
              </div>
              {/* Conatct Info Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* page Contact Us End */}

      {/* Contact Form Start */}
      <div className="conatct-us-form">
        <div className="container">
          <div className="row">
            {/* Google Map Start */}
            <div className="col-lg-6">
              <div className="google-map-iframe">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.863974900813!2d73.19870999999999!3d22.296272599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc59cb5eca937%3A0x8733d90ba84b3c3d!2sUTKRUSHT%20CONSULTANTS%20%7C%20Corporate%20Training%20%7C%20Digital%20Marketing%20%7C%20Sales%20%7C%20Branding%20%7C%20Recruitment%20%7C%20Counselling%20%7C%20DMIT!5e1!3m2!1sen!2sin!4v1757245629922!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Google Map End */}


            {/* Contact Form Start */}
            <div className="col-lg-6">
              <div className="contact-form">
                <div className="contact-form-title">
                  <h3 className="wow fadeInUp">Start your journey with us</h3>
                </div>
                {/* Contact Form Start */}
                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-4">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">
                          <span>submit now</span>
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* Contact Form End */}
              </div>
            </div>
            {/* Contact Form End */}
          </div>
        </div>
      </div>
      {/* Contact Form End */}

    </>
  );
};

export default PageHeader;
