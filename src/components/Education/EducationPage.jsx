import React from "react";
import education from "../../assets/data/education";
import eduStyle from  '../Education/EducationPage.module.css';

export default function EducationPage() {
  return (
    <>
      <section className={eduStyle.education}>
        <h3>Education</h3>

        <div className={eduStyle.educationDetails}>
          {education.map((education) => (
            <div key ={education.id} className={eduStyle.educationCard}>
              <div class={eduStyle.profileImg}>
                <i class="fas fa-user-graduate fa-5x mt-5 mb-sm-0 mb-5 text-light"></i>
              </div>
              <div class={eduStyle.eduContent}>
                <h3>{education.university}</h3>
                <p>{education.clgName}</p>
                <p>{education.course}</p>
                <p>{education.dept}</p>
                <p>{education.duration}</p>
                <div class={eduStyle.edubottom}>
                  <div class="line"></div> <p>{education.city}, {education.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
