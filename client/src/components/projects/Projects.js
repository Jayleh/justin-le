import React from 'react';
import ProjectsCard from './ProjectsCard';

import './Projects.css';

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
            <ProjectsCard
              imageSrc={vidBrowserImg}
              imageAlt="Vid Browser"
              title="Vid Browser"
              description="Browse for the first 5 YouTube videos based on your search!"
              techStack="React, Semantic UI, YouTube Data API v3, JavaScript, HTML5/CSS3"
              webSiteLink="https://vid-browser.herokuapp.com"
              gitHubLink="https://github.com/Jayleh/videos"
            />
            <ProjectsCard
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
            <ProjectsCard
              imageSrc={nflDashImg}
              imageAlt="NFL Prediction"
              title="NFL Prediction"
              description="Machine learning project predicting NFL game outcomes"
              techStack="Python Flask, Sci-Kit Learn, JavaScript, HTML/CSS"
              webSiteLink="https://nfl-dashboard.herokuapp.com"
              gitHubLink="https://github.com/Jayleh/nfl-predict"
            />
            <ProjectsCard
              imageSrc={usgsQuakeImg}
              imageAlt="USGS Quake"
              title="USGS Quake"
              description="Earthquake datamap revealing all earthquakes in the past week"
              techStack="Python Flask, Javascript, D3.js, Leaflet.js, HTML/CSS/Bootstrap"
              webSiteLink="https://jayleh.github.io/usgs-quake/"
              gitHubLink="https://github.com/Jayleh/usgs-quake"
            />
          </div>
        </div>
        <div className="row grid">
          <div className="col s12 project-row">
            <ProjectsCard
              imageSrc={bellyButtonImg}
              imageAlt="Belly Button"
              title="Belly Button"
              description="Interactive dashboard investigating a 2011 study of belly button microbe diversity"
              techStack="Python Flask, SQLite, Javascript, Leaflet.js, HTML/CSS/Bootstrap"
              webSiteLink="https://bellybtn.herokuapp.com"
              gitHubLink="https://github.com/Jayleh/belly-button"
            />
            <ProjectsCard
              imageSrc={honeyProductionImg}
              imageAlt="Honey Production"
              title="Honey Production"
              description="Historical honey production data through interactive graphs and maps"
              techStack="Python Flask, Javascript, Leaflet.js, HTML/CSS/Bootstrap"
              webSiteLink="https://honeyproduction.herokuapp.com/bubble"
              gitHubLink="https://github.com/Jayleh/honey-production"
            />
          </div>
        </div>
        <div className="row grid">
          <div className="col s12 project-row">
            <ProjectsCard
              imageSrc={marsImg}
              imageAlt="Mars Mission"
              title="Mars Mission"
              description="Mars info page"
              techStack="Python Flask, Beautiful Soup, Splinter, MongoDB, Javascript, HTML/CSS/Bootstrap"
              gitHubLink="https://github.com/Jayleh/mars-mission"
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
