import React from 'react';

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'sophia mitchell',
      role: 'creative director',
      img: 'team-1.jpg',
      delay: '0s',
    },
    {
      id: 2,
      name: 'john smith',
      role: 'marketing manager',
      img: 'team-2.jpg',
      delay: '0.25s',
    },
    {
      id: 3,
      name: 'emily johnson',
      role: 'software engineer',
      img: 'team-3.jpg',
      delay: '0.5s',
    },
  ];

  return (
    <div className="our-team">
      <div className="container">

        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">our team</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                Meet the minds behind the magic
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/team" className="btn-default">view team</a>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6">
              <div className="team-member-item wow fadeInUp" data-wow-delay={member.delay}>

                {/* Team Image */}
                <div className="team-image">
                  <a href="/team-single" data-cursor-text="View">
                    <figure>
                      <img 
                        src={`${process.env.PUBLIC_URL}/assets/images/${member.img}`} 
                        alt={member.name} 
                      />
                    </figure>
                  </a>
                </div>

                {/* Team Social List */}
                <div className="team-social-list">
                  <div className="team-social-link">
                    <a href="#"><i className="fa-solid fa-share-nodes"></i></a>
                  </div>
                  <div className="team-social-icon">
                    <ul>
                      <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                  </div>
                </div>

                {/* Team Content */}
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default OurTeam;
