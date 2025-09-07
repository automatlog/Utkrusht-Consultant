import React from 'react';

function OurServices() {
  const services = [
    {
      id: 1,
      icon: 'icon-services-1.svg',
      title: 'optimization',
      description: 'Our services include SEO Optimization to enhance organic search visibility.',
      link: '/service-single'
    },
    {
      id: 2,
      icon: 'icon-services-2.svg',
      title: 'pay-par click',
      description: 'Pay-Per-Click (PPC) Advertising for targeted lead generation.',
      link: '/service-single',
      delay: '0.25s'
    },
    {
      id: 3,
      icon: 'icon-services-3.svg',
      title: 'SEO optimiz',
      description: "SEO Optimization service focuses on improving your website's visibility.",
      link: '/service-single',
      delay: '0.5s'
    }
  ];

  return (
    <div className="our-services">
      <div className="container">

        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our services</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">The digital solution you need</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/service" className="btn-default">view all services</a>
            </div>
          </div>
        </div>

        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className="service-item wow fadeInUp" data-wow-delay={service.delay || '0s'}>
                <div className="icon-box">
                  <img 
                    src={`${process.env.PUBLIC_URL}/assets/images/${service.icon}`} 
                    alt={service.title} 
                  />
                </div>
                <div className="service-body">
                  <div className="service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                  <div className="service-btn">
                    <a href={service.link} className="readmore-btn">read more</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurServices;
