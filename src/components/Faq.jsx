import React, { useState } from 'react';

function Faqs() {
  const [openId, setOpenId] = useState(1);

  const faqs = [
    {
      id: 1,
      question: "What services do you offer?",
      answer: "We provide a comprehensive range of consulting services including digital marketing, brand management, sales management, HR management, DMIT and midbrain activation, web development, e-commerce solutions, video production, and back office management.",
      delay: "0s"
    },
    {
      id: 2,
      question: "How do you approach a new project?",
      answer: "Our approach begins with understanding your business objectives, analyzing the market, and identifying key opportunities. We then design a customized strategy tailored to your needs, implement solutions, and track performance to ensure success.",
      delay: "0.2s"
    },
    {
      id: 3,
      question: "What is the typical timeline for a project?",
      answer: "Project timelines vary depending on the scope and complexity. Simple projects may take a few weeks, while larger initiatives like comprehensive digital marketing campaigns or web development projects can take several months. We always provide a clear timeline upfront.",
      delay: "0.4s"
    },
    {
      id: 4,
      question: "Will I be involved in the creative process?",
      answer: "Absolutely! We value client collaboration. You will be involved at key stages of the project, from strategy planning to final execution, to ensure the results align perfectly with your vision and business goals.",
      delay: "0.6s"
    },
    {
      id: 5,
      question: "How can Utkrusht Consultants help my business grow?",
      answer: "We help businesses grow by providing data-driven strategies, streamlining operations, improving branding and marketing efforts, enhancing human resource management, and implementing innovative solutions tailored to your business needs.",
      delay: "0.8s"
    },
    {
      id: 6,
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide ongoing support and guidance after project completion. Our team is available to assist with updates, troubleshooting, and continuous improvement to ensure your business continues to achieve optimal results.",
      delay: "1s"
    }
  ];

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id); // toggle open/close
  };

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
                        className={`accordion-button ${openId !== faq.id ? "collapsed" : ""}`}
                        type="button"
                        onClick={() => toggleFaq(faq.id)}
                        aria-expanded={openId === faq.id ? "true" : "false"}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${openId === faq.id ? "show" : ""}`}
                      aria-labelledby={`heading${faq.id}`}
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
