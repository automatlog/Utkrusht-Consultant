import React from 'react';

function WorkingProcess() {
  const steps = [
    { id: 1, title: 'research', description: 'Research needs and trends for informed decisions.' },
    { id: 2, title: 'planning', description: 'Planning is actions to achieve business goals.' },
    { id: 3, title: 'development', description: 'Enhance offerings based on feedback and innovation.' },
    { id: 4, title: 'launch', description: 'Introduce products/services with a strategic rollout.' },
  ];

  return (
    <div className="working-process">
      <div className="container">

        <div className="row section-row align-items-center">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="wow fadeInUp">how it works</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.25s">
                Collaborative journey from concept to execute
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-btn wow fadeInUp" data-wow-delay="0.5s">
              <a href="/contact" className="btn-default">contact us</a>
            </div>
          </div>
        </div>

        <div className="row wow fadeInUp" data-wow-delay="0.5s">
          {steps.map((step) => (
            <div key={step.id} className="col-lg-3 col-md-6">
              <div className="working-process-step">
                
                <div className="working-process-header">
                  <div className="working-process-title">
                    <h3>{step.title}</h3>
                  </div>
                  <div className="working-process-no">
                    <p>{step.id}</p>
                  </div>
                </div>

                <div className="working-process-content">
                  <p>{step.description}</p>
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
