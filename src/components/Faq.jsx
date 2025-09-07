import React from 'react';

function Faqs() {
  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of services, including branding, digital marketing, web and graphic design, and content creation.",
      delay: "0s",
      show: true
    },
    {
      id: 2,
      question: "How do you approach a new project?",
      answer: "We provide a comprehensive range of services, including branding, digital marketing, web and graphic design, and content creation.",
      delay: "0.2s",
      show: false
    },
    {
      id: 3,
      question: "What is the typical timeline for a project?",
      answer: "We provide a comprehensive range of services, including branding, digital marketing, web and graphic design, and content creation.",
      delay: "0.4s",
      show: false
    },
    {
      id: 4,
      question: "Will I be involved in the creative process?",
      answer: "We provide a comprehensive range of services, including branding, digital marketing, web and graphic design, and content creation.",
      delay: "0.6s",
      show: false
    }
  ];

  return (
    <div className="our-faqs">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="our-faqs-image">
              <figure>
                <img src="/assets/images/faqs-image.jpg" alt="FAQs" />
              </figure>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="our-faqs-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">FAQs</h3>
                <h2 className="wow fadeInUp" data-wow-delay="0.25s">Frequently asked questions</h2>
              </div>

              <div className="faq-accordion" id="faqaccordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className={`accordion-item wow fadeInUp`} data-wow-delay={faq.delay}>
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${!faq.show ? "collapsed" : ""}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={faq.show ? "true" : "false"}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${faq.show ? "show" : ""}`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#faqaccordion"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
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
  );
}

export default Faqs;
