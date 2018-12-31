import React from 'react';
import ProjectsTestCard from './ProjectsTestCard';

// import './subtleEffects/normalize.css';
// import './subtleEffects/demo.css';
import './subtleEffects/test.css';

import vidBrowserImg from './images/vid-browser-min.PNG';
import shipLiveImg from './images/shiplive-min.PNG';
import nflDashImg from './images/nfl-dash-min.PNG';
import usgsQuakeImg from './images/usgs-quake-min.PNG';
import bellyButtonImg from './images/belly-button-min.PNG';
import honeyProductionImg from './images/honey-production-min.PNG';
import marsImg from './images/mars-min.PNG';

const ProjectsTest = () => {
  return (
    <main>
      <div id="projects-title" className="container">
        <div className="row">
          <div className="col s12 center-align">
            <h3>Projects</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row grid">
          <div className="col s12 project-row">
            <ProjectsTestCard
              imageSrc={vidBrowserImg}
              imageAlt="Vid Browser"
              title="Vid Browser"
              description="Browse for the first 5 YouTube videos based on your search!"
              techStack="React, Semantic
                UI, YouTube Data API v3, JavaScript, HTML5/CSS3"
              webSiteLink="https://vid-browser.herokuapp.com"
              gitHubLink="https://github.com/Jayleh/videos"
            />
            <ProjectsTestCard
              imageSrc={shipLiveImg}
              imageAlt="Ship Live"
              title="Ship Live"
              description="Shipstation dashboard"
              techStack="Python Flask, SQLite, JavaScript, HTML5/CSS3"
              webSiteLink="https://ship-live.herokuapp.com/demo"
              gitHubLink="https://github.com/Jayleh/shipstation-live"
            />
          </div>
        </div>
        <div className="row grid">
          <div className="col s12 project-row">
            <ProjectsTestCard
              imageSrc={nflDashImg}
              imageAlt="NFL Prediction"
              title="NFL Prediction"
              description="Machine learning project predicting NFL game outcomes"
              techStack="Python Flask,
                Sci-Kit Learn, JavaScript, HTML/CSS"
              webSiteLink="https://nfl-dashboard.herokuapp.com"
              gitHubLink="https://github.com/Jayleh/nfl-predict"
            />
          </div>
        </div>
      </div>
      <div id="github-btn" className="container center-align">
        <a
          className="waves-effect waves-light btn-large"
          href="https://github.com/Jayleh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View All Projects
        </a>
      </div>
    </main>
  );
};

export default ProjectsTest;
