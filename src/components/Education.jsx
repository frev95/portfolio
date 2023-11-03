import React from "react";

export default function Education() {
  const educationData = [
    {
      date: "2015 - 2017",
      institution: "Barnett College",
      location: "Fairfield, NY",
      degree: "Master's in Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
    },
    {
      date: "2011 - 2015",
      institution: "ULA",
      location: "Los Angeles, CA",
      degree: "Undergraduate in Computer Science",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.",
    },
  ];

  return (
    <>
      <section>
        <h2 className="text-secondary fw-bolder mb-4">Education</h2>
        {educationData.map((education, index) => (
          <div className="card shadow border-0 rounded-4 mb-5" key={index}>
            <div className="card-body p-5">
              <div className="row align-items-center gx-5">
                <div className="col text-center text-lg-start mb-4 mb-lg-0">
                  <div className="bg-light p-4 rounded-4">
                    <div className="text-secondary fw-bolder mb-2">
                      {education.date}
                    </div>
                    <div className="mb-2">
                      <div className="small fw-bolder">
                        {education.institution}
                      </div>
                      <div className="small text-muted">
                        {education.location}
                      </div>
                    </div>
                    <div className="fst-italic">
                      <div className="small text-muted">{education.degree}</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div>{education.description}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div className="pb-5"></div>
    </>
  );
}
