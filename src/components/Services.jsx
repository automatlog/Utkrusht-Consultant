import React from 'react';

function OurServices() {
  const services = [
    {
      id: 1,
      icon: "digital_market.png",
      title: "Digital Marketing",
      description:
        "Boost your online presence with SEO, content marketing, social media, paid ads, and analytics to drive visibility and conversions.",
      link: "/services/digital-marketing",
    },
    {
      id: 2,
      icon: "HR_management.png",
      title: "HR Management",
      description:
        "Comprehensive workforce solutions including recruitment, training, employee relations, and strategic HR planning.",
      link: "/services/hr-management",
      delay: "0.25s",
    },
    {
      id: 3,
      icon: "brand_management.jpg",
      title: "Brand Management",
      description:
        "Build a strong market presence through effective brand positioning, messaging, visual identity, and customer engagement.",
      link: "/services/brand-management",
      delay: "0.5s",
    },
    {
      id: 4,
      icon: "sales_management.jpg",
      title: "Sales Management",
      description:
        "Maximize revenue with sales goal setting, performance tracking, and strategies for consistent business growth.",
      link: "/services/sales-management",
      delay: "0.75s",
    },
    {
      id: 5,
      icon: "office_management.jpg",
      title: "Back Office Management",
      description:
        "Efficient handling of accounting, data management, and operations to support smooth day-to-day business processes.",
      link: "/services/back-office",
      delay: "1s",
    },
    {
      id: 6,
      icon: "DMIT.jpg",
      title: "DMIT & Midbrain Activation",
      description:
        "Explore talents with DMIT analysis and innovative techniques like midbrain activation for personal growth and insights.",
      link: "/services/dmit",
      delay: "1.25s",
    },
    {
      id: 7,
      icon: "web-dev.png",
      title: "Web Development",
      description:
        "Custom websites and web applications designed to be fast, secure, and scalable for businesses of all sizes.",
      link: "/services/web-development",
      delay: "1.5s",
    },
    {
      id: 8,
      icon: "icon-ecommerce.svg",
      title: "Ecommerce & Digital Products",
      description:
        "Complete ecommerce solutions including online stores, digital product platforms, and seamless payment integration.",
      link: "/services/ecommerce",
      delay: "1.75s",
    },
    {
      id: 9,
      icon: "icon-video.svg",
      title: "Video Production",
      description:
        "High-quality video production services: product shoots, launch videos, brand campaigns, and real estate promotions.",
      link: "/services/video-production",
      delay: "2s",
    },
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
              <div
                className="service-item wow fadeInUp"
                data-wow-delay={service.delay || '0s'}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${service.icon})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="service-body" style={{ position: "relative", zIndex: 2 }}>
                  <div className="service-content">
                    <h3 style={{ color: "#f5f5f5" }}>{service.title}</h3>
                    <p style={{ color: "#eaeaea" }}>{service.description}</p>
                  </div>
                  <div className="service-btn">
                    <a href={service.link} className="readmore-btn" style={{ color: "#f5f5f5", border: "1px solid #f5f5f5" }}>
                      read more
                    </a>
                  </div>
                </div>

                {/* Dark overlay for text readability */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurServices;
