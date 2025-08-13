import React from 'react';
import './App.scss';
import Header from './components/Header';
import Education from './components/Education';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';
import DisableCopy from './components/Disablecopy';
import AboutMe from './components/Aboutme';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
const App: React.FC = () => {
  return (
    <div className="app">
      <DisableCopy />
      <Header />
      <main>
        <AboutMe />
        <ProfileSummary />
         <WorkExperience />
        <Skills />
        <Education />
        <Certifications />
       </main>
      <Footer />
    </div>
  );
};

export default App;