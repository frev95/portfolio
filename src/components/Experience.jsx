import React from "react";

export default function Experience() {
  const experienceData = [
    {
      date: "2019 - Present",
      position: "Web Developer",
      company: "Stark Industries",
      location: "Los Angeles, CA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
    },
    {
      date: "2017 - 2019",
      position: "SEM Specialist",
      company: "Wayne Enterprises",
      location: "Gotham City, NY",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
    },
  ];

  return (
    <section>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h2 className="text-primary fw-bolder mb-0">Experience</h2>
        <a className="btn btn-primary px-4 py-3" href="#!">
          <div className="d-inline-block bi bi-download me-2"></div>
          Download Resume
        </a>
      </div>
      {experienceData.map((experience, index) => (
        <div className="card shadow border-0 rounded-4 mb-5" key={index}>
          <div className="card-body p-5">
            <div className="row align-items-center gx-5">
              <div className="col text-center text-lg-start mb-4 mb-lg-0">
                <div className="bg-light p-4 rounded-4">
                  <div className="text-primary fw-bolder mb-2">
                    {experience.date}
                  </div>
                  <div className="small fw-bolder">{experience.position}</div>
                  <div className="small text-muted">{experience.company}</div>
                  <div className="small text-muted">{experience.location}</div>
                </div>
              </div>
              <div className="col-lg-8">
                <div>{experience.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
