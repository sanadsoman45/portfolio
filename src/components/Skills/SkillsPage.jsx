import React from "react";
import styles from "./SkillsPage.module.css";

import skills from "../../assets/data/skills";

export default function SkillsPage() {
  return (
    <>
      <section className={styles.skills}>
        <h3>Skill Set</h3>
        <p>
          "I have been working on the following technologies from past 5+ years.
          The journey of my tech career started from my Diploma in Information
          Technology followed by Bachelor's in Information Technology and Master
          of Science in Computer Science, where I came across computer
          programming and their fundamentals. Since then I have been exploring
          several different technologies which I found quite interesting. I
          believe sticking to just one technology in today's modern tech-world
          will keep your knowledge limited. I strongly believe in, 'Explore
          more, Learn more'."
        </p>

        <div>
          <div className={styles.techinfo}>
            <h3>FrontEnd AND Backend Technologies</h3>
            <div className={styles.maintech}>
              {skills[0]["primarySkills"].map((skill) => (
                <div key={skill.id} className={styles.techStack}>
                  {skill.icon}
                  <p>{skill.skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.techinfo}>
            <h3>Other Tools And Technologies</h3>
            <div className={styles.maintech}>
              {skills[0]["secondarySkills"].map((secondarySkill) => (
                <div key={secondarySkill.id} className={styles.techStack}>
                  {secondarySkill.icon}
                  <p>{secondarySkill.skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
