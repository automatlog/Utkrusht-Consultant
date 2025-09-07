import React from 'react';

function WorkingProcess() {
  const steps = [
    { title: 'research', description: 'Research needs and trends for informed decisions.' },
    { title: 'planning', description: 'Planning is actions to achieve business goals.' },
    { title: 'development', description: 'Enhance offerings based on feedback and innovation.' },
    { title: 'launch', description: 'Introduce products/services with a strategic rollout.' },
  ];

  return (
    <div className="why-choose-us">
  <div className="container">

    <div className="row section-row align-items-center">
      <div className="col-lg-6">
        <div className="section-title">
          <h3 className="wow fadeInUp">why choose us</h3>
          <h2 className="wow fadeInUp" data-wow-delay="0.25s">
            Your trusted partner for business success
          </h2>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
          <a href="/contact" className="btn-default">get started</a>
        </div>
      </div>
    </div>

    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      {[
        {
          id: 1,
          title: "Comprehensive Expertise",
          description:
            "We offer digital marketing, brand & sales management, HR management, DMIT & midbrain activation, business consultancy, and recruitment — all under one roof."
        },
        {
          id: 2,
          title: "One-Stop Solution",
          description:
            "Our multi-faceted services streamline operations, save time, and maximize efficiency for your business growth."
        },
        {
          id: 3,
          title: "Client-Centered Approach",
          description:
            "We tailor strategies to your unique needs, ensuring sustainable results and long-term partnerships."
        },
        {
          id: 4,
          title: "Proven Results",
          description:
            "With years of expertise, we’ve helped startups and large enterprises achieve measurable business success."
        }
      ].map((item) => (
        <div key={item.id} className="col-lg-3 col-md-6">
          <div className="why-choose-box">
            
            <div className="why-choose-header">
              <div className="why-choose-title">
                <h3>{item.title}</h3>
              </div>
              <div className="why-choose-no">
                <p>{item.id}</p>
              </div>
            </div>

            <div className="why-choose-content">
              <p>{item.description}</p>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</div>

  );
}

export default WorkingProcess;
