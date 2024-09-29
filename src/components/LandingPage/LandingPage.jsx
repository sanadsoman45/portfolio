import React from 'react';
import Header from '../HeaderPage/Header';
import Intro from '../Intro/Intro';
import SkillsPage from '../Skills/SkillsPage';
import EducationPage from '../Education/EducationPage';
import AchievementsPage from '../Achievements/AchievementsPage';
import styles from '../LandingPage/LandingPage.module.css';

function LandingPage() {
  return (
    <main className={styles.container}>
      <Header/>
      <Intro/>
      <SkillsPage/>
      <EducationPage/>
      <AchievementsPage/>
    </main>
  )
}

export default LandingPage