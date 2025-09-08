import React from 'react';

function OurWork() {
  const workItems = [
    {
      id: 1,
      img: 'digital-marketing.jpg',
      plusIcon: 'how-work-image-1.jpg',
      title: 'Digital Marketing Boost',
      tag: 'Marketing',
      description:
        'Increased client leads by 150% through targeted campaigns across social media and SEO optimization.',
      delay: '0s',
      colClass: 'col-md-6',
      highlighted: true,
    },
    {
      id: 2,
      img: 'hr-management.jpg',
      plusIcon: 'ihow-work-image-2.jpg',
      title: 'Smart HR Solutions',
      tag: 'Workforce',
      description:
        'Streamlined recruitment process, reducing hiring time by 40% and boosting employee retention.',
      delay: '0.25s',
      colClass: 'col-md-6',
      highlighted: false,
    },
    {
      id: 3,
      img: 'brand-management.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Brand Identity Refresh',
      tag: 'Branding',
      description:
        'Transformed client’s brand presence with new messaging and design, resulting in stronger customer loyalty.',
      delay: '0.5s',
      colClass: 'col-lg-12',
      highlighted: true,
    },
    {
      id: 4,
      img: 'sales-management.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Sales Growth Strategy',
      tag: 'Revenue',
      description:
        'Implemented structured sales processes that helped a retail client achieve a 60% revenue growth.',
      delay: '0.75s',
      colClass: 'col-md-6',
      highlighted: false,
    },
    {
      id: 5,
      img: 'back-office.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Back Office Automation',
      tag: 'Operations',
      description:
        'Reduced manual workload by automating finance and inventory processes, saving 20 hours weekly.',
      delay: '1s',
      colClass: 'col-md-6',
      highlighted: true,
    },
    {
      id: 6,
      img: 'dmit-midbrain.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Talent Insights (DMIT)',
      tag: 'Analysis',
      description:
        'Helped parents and educators identify key strengths in children using scientific aptitude mapping.',
      delay: '1.25s',
      colClass: 'col-md-6',
      highlighted: false,
    },
    {
      id: 7,
      img: 'consulting.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Business Consulting',
      tag: 'Strategy',
      description:
        'Guided a manufacturing client in restructuring supply chain operations, cutting costs by 25%.',
      delay: '1.5s',
      colClass: 'col-md-6',
      highlighted: true,
    },
  ];

  return (
    <div className="our-works">
      <div className="container">
        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our works</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                Real results from our consulting projects
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/portfolio" className="btn-default">
                view all portfolio
              </a>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          {workItems.map((item) => (
            <div key={item.id} className={item.colClass}>
              <div
                className={`our-work-item ${
                  item.highlighted ? 'work-box work-highlighted-box' : ''
                }`}
              >
                {/* Work Item Image */}
                <div className="work-item-image">
                  <a href="/portfolio-single" data-cursor-text="View">
                    <figure className="image-anime reveal">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/${item.img}`}
                        alt={item.title}
                      />
                    </figure>
                  </a>
                  <div className="work-readmore-btn">
                    <a href="/portfolio-single">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/${item.plusIcon}`}
                        alt="Read More"
                      />
                    </a>
                  </div>
                </div>

                {/* Work Item Body */}
                <div
                  className="work-item-body wow fadeInUp"
                  data-wow-delay={item.delay}
                >
                  <div className="work-item-title">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="work-item-tags">
                    <ul>
                      <li>{item.tag}</li>
                    </ul>
                  </div>
                </div>

                {/* Work Item Content */}
                <div
                  className="work-item-content wow fadeInUp"
                  data-wow-delay={item.delay}
                >
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

export default OurWork;
