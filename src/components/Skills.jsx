import React from "react";

export default function Skills() {
  const professionalSkillsOne = [
    "SEO/SEM Marketing",
    "Statistical Analysis",
    "Web Development",
  ];

  const professionalSkillsTwo = [
    "Network Security",
    "Adobe Software Suite",
    "User Interface Design",
  ];

  const languagesOne = ["HTML", "CSS", "JavaScript"];

  const languagesTwo = ["Python", "Ruby", "Node.js"];

  const Skill = ({ text }) => (
    <div className="col mb-4 mb-md-0">
      <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
        {text}
      </div>
    </div>
  );

  return (
    <section>
      <div className="card shadow border-0 rounded-4 mb-5">
        <div className="card-body p-5">
          <div className="mb-5">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i className="bi bi-tools"></i>
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">
                  Professional Skills
                </span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              {professionalSkillsOne.map((text, index) => (
                <Skill key={index} text={text} />
              ))}
            </div>
            <div className="row row-cols-1 row-cols-md-3">
              {professionalSkillsTwo.map((text, index) => (
                <Skill key={index} text={text} />
              ))}
            </div>
          </div>
          <div className="mb-0">
            <div className="d-flex align-items-center mb-4">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3 className="fw-bolder mb-0">
                <span className="text-gradient d-inline">Languages</span>
              </h3>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-4">
              {languagesOne.map((text, index) => (
                <Skill key={index} text={text} />
              ))}
            </div>
            <div className="row row-cols-1 row-cols-md-3">
              {languagesTwo.map((text, index) => (
                <Skill key={index} text={text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
