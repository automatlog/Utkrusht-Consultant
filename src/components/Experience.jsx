import React from 'react';

function OurWork() {
  const workItems = [
    {
      id: 1,
      img: 'portfolio-img-1.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'brand transformation',
      tag: 'marketing',
      description: 'Revamped the brand identity of XYZ Company to better align with its target audience and market trends.',
      delay: '0s',
      colClass: 'col-md-6',
      highlighted: true
    },
    {
      id: 2,
      img: 'portfolio-img-2.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'E-commerce Website',
      tag: 'branding',
      description: "Transformed ABC Retail's online target audience presence with a user-friendly e-commerce website.",
      delay: '0.25s',
      colClass: 'col-md-6',
      highlighted: false
    },
    {
      id: 3,
      img: 'portfolio-img-3.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Digital Marketing',
      tag: 'web development',
      description: 'Executed a comprehensive digital marketing campaign that increased and generated high-quality leads.',
      delay: '0.5s',
      colClass: 'col-lg-12',
      highlighted: true
    },
    {
      id: 4,
      img: 'portfolio-img-4.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'Content Creation',
      tag: 'web design',
      description: 'Developed engaging content for GHI Non-Profit, including blog posts, newsletters, and promotional videos.',
      delay: '0.75s',
      colClass: 'col-md-6',
      highlighted: false
    },
    {
      id: 5,
      img: 'portfolio-img-5.jpg',
      plusIcon: 'icon-plus.svg',
      title: 'social media strategy',
      tag: 'UI/UX design',
      description: 'Our team focused on content creation, including blog posts, scheduling, and audience interaction.',
      delay: '1s',
      colClass: 'col-md-6',
      highlighted: true
    },
  ];

  return (
    <div className="our-works">
      <div className="container">

        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our works</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">Showcasing our creative excellence</h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/portfolio" className="btn-default">view all portfolio</a>
            </div>
          </div>
        </div>

        <div className="row align-items-center">
          {workItems.map((item) => (
            <div key={item.id} className={item.colClass}>
              <div className={`our-work-item ${item.highlighted ? 'work-box work-highlighted-box' : ''}`}>

                {/* Work Item Image */}
                <div className="work-item-image">
                  <a href="/portfolio-single" data-cursor-text="View">
                    <figure className="image-anime reveal">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/${item.img}`} alt={item.title} />
                    </figure>
                  </a>
                  <div className="work-readmore-btn">
                    <a href="/portfolio-single">
                      <img src={`${process.env.PUBLIC_URL}/assets/images/${item.plusIcon}`} alt="Read More" />
                    </a>
                  </div>
                </div>

                {/* Work Item Body */}
                <div className="work-item-body wow fadeInUp" data-wow-delay={item.delay}>
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
                <div className="work-item-content wow fadeInUp" data-wow-delay={item.delay}>
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
