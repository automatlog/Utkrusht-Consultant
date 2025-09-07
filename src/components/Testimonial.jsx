import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      author: "emily carter",
      company: "Creative Solutions Co.",
      image: "/assets/images/author-1.jpg"
    },
    {
      id: 2,
      text: "Their data-driven approach helped us reach our target audience effectively, resulting in a significant increase in leads. Highly recommend!",
      author: "emily carter",
      company: "Creative Solutions Co.",
      image: "/assets/images/author-1.jpg"
    },
    {
      id: 3,
      text: "Their data-driven approach helped us reach our target audience effectively, resulting in a significant increase in leads. Highly recommend!",
      author: "mark thompson",
      company: "Tech Innovations Inc.",
      image: "/assets/images/author-1.jpg"
    },
    {
      id: 4,
      text: "Their data-driven approach helped us reach our target audience effectively, resulting in a significant increase in leads. Highly recommend!",
      author: "laura chen",
      company: "CEO Trendy Boutique",
      image: "/assets/images/author-3.jpg"
    }
  ];

  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">testimonials</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                Success stories that speak for themselves
              </h2>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/contact" className="btn-default">contact now</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonials.map((t) => (
                    <div key={t.id} className="swiper-slide">
                      <div className="testimonial-item">
                        <div className="testimonial-header">
                          <div className="testimonial-rating">
                            <img src="/assets/images/icon-star.svg" alt="star" />
                          </div>
                          <div className="testimonial-quote">
                            <img src="/assets/images/testimonial-quote.svg" alt="quote" />
                          </div>
                        </div>

                        <div className="testimonial-content">
                          <p>{t.text}</p>
                        </div>

                        <div className="testimonial-body">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src={t.image} alt={t.author} />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>{t.author}</h3>
                            <p>{t.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
