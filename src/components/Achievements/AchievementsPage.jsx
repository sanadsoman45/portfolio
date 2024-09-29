import achievementStyles from "../Achievements/AchievementsPage.module.css";
import React, { useEffect, useState } from "react";
import certifications from "../../assets/data/certifcations";
import academicAchievements from "../../assets/data/academicAchievements";

export default function AchievementsPage() {
  const [index, setIndex] = useState(0);
  const [img, setImg] = useState(certifications[index]["img"]);

  //use effect to handle async ops or timer based operations
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % certifications.length);
    }, 4000); //calling the interval to set index after every 4 secs.

    setImg(certifications[index]["img"]); // Update the image immediately when index changes

    return () => clearInterval(interval); // clearing the interval to prevent the memory leaks
  }, [index]); // actively listening to change of index value in state.

  return (
    <div className={achievementStyles.achievements}>
      <h3>Achievements</h3>
      <div className={achievementStyles.certDes}>
        <div>
          <div>
            <h3>Certifications/Training</h3>
            <ul>
              {certifications.map((certification, i) => (
                <li key={i}>{certification["certName"]}</li>
              ))}
            </ul>
          </div>
          <br />
          <div>
            <h3>Academic Achievements</h3>
            <ul>{
              academicAchievements.map((academicAchievement, i)=>(
                <li key = {i}>{academicAchievement["event"]}</li>
              ))
              }</ul>
          </div>
        </div>


        <div className={achievementStyles.imgSlider}>
        
          <img src={img} alt="certImage" />
         
        </div>
      </div>
    </div>
  );
}
