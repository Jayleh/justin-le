import 'jvectormap-next/jquery-jvectormap.css';
import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';
import Breaker from '../breaker/Breaker';
import CardExperience from './CardExperience';

import bootcamp from './images/bootcamp-min.jpg';
import certificate from './images/certificate-min.jpg';
import cliff from './images/cliff-min.jpg';
import moon from './images/moon-min.jpg';
import pose from './images/pose-min.jpg';
import rest from './images/rest-min.jpg';
import turtle from './images/turtle-min.jpg';
import resume from '../../assets/docs/Justin Le Resume.pdf';

import './About.css';
import mapConfig from './mapConfig';

const {
  map,
  containerStyle,
  backgroundColor,
  zoomButtons,
  regionStyle,
  series
} = mapConfig;

class About extends Component {
  renderAccentSpan = text => {
    return <span className="color-accent">{text}</span>;
  };

  renderDates = (fromDate, toDate) => {
    return (
      <React.Fragment>
        {fromDate} - {this.renderAccentSpan(toDate)}
      </React.Fragment>
    );
  };

  renderWebLink = (link, name) => {
    return (
      <a
        href={link}
        target="_blank"
        className="color-accent"
        rel="noopener noreferrer"
      >
        {` ${name}`}
      </a>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div id="about" className="container">
          <div className="row">
            <div className="col s12">
              <h3>About</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p>
                <span className="text-important">Developer</span>, specializing
                in operations, sales analytics, and inventory management. Able
                to <span className="text-important">solve business needs</span>{' '}
                with quick deliverables, while{' '}
                <span className="text-important">constantly improving</span> and
                moving towards{' '}
                <span className="text-important">long-term goals</span>. Looking
                to build{' '}
                <span className="text-important">robust applications</span> with
                a <span className="text-important">fast-paced</span> and growing
                company.
              </p>
            </div>
          </div>
        </div>
        <Breaker />
        <div id="experience" className="container">
          <div className="row">
            <div className="col s12">
              <h3>Work Experience</h3>
            </div>
          </div>
          <section>
            <CardExperience
              location="Irvine, CA"
              dates={this.renderDates("Dec'17", 'today')}
              imageSrc={turtle}
              imageAlt="turtle"
              title="Developer &#124; Data Analyst &#124; Inventory Specialist"
              subTitle={this.renderWebLink('https://anteage.com/', 'Cellese')}
              description="Mix of web development, analytics, and inventory management
                    at Cellese, an ecommerce skin care company in Irvine. Here
                    is where I develop web applications, streamlining data and
                    projection reportings, and identity business trends to make
                    data-driven decisions."
              hashtags="#BuildWebApps #InventoryRevamp #ProjectionReport
                      #SalesTrends #IdentifyKPIs"
            />
            <CardExperience
              location="Sangju, South Korea"
              dates={"Feb'15 - Mar'17"}
              imageSrc={moon}
              imageAlt="moon"
              title="English Teacher"
              subTitle={this.renderWebLink(
                'http://www.epik.go.kr/index.do',
                'EPIK'
              )}
              description="English Program in Korea to help improve English-speaking
                    abilities in students, develop cultural exchange, and foster
                    and encourage individuals to take advantage of all the
                    things new age of information and globalization has to
                    offer."
              hashtags="#WorkAbroad #MakeADifference #Countryside
                      #UnderprivelegedStudents"
            />
          </section>
        </div>
        <Breaker />
        <div id="education" className="container">
          <div className="row">
            <div className="col s12">
              <h3>Education</h3>
            </div>
          </div>
          <section>
            <CardExperience
              location="Everywhere"
              dates={this.renderAccentSpan('Always')}
              imageSrc={rest}
              imageAlt="rest"
              title="Self-learning"
              subTitle={
                'From each job, className, co-worker, book, article, meet-up or life experience'
              }
              description="This is how I learned 80% of what I know now."
              hashtags="#LearnByDoing"
            />
            <CardExperience
              location="Irvine, CA"
              dates={"Jan'18 - Jul'18"}
              imageSrc={pose}
              imageAlt="pose"
              title="Data Analytics & Visualization"
              subTitle={this.renderWebLink(
                'https://bootcamp.ce.uci.edu/data/',
                'UCI Division of Continuing Education'
              )}
              description="Intensive 24-week data bootcamp dedicated to data mining, preparation, and visualization."
              hashtags="#WorkStudy #Python #JavaScript #MachineLearning #DataWrangling #Database #FullStack #WebDevelopment"
            />
            <CardExperience
              location="SLO, CA"
              dates={"Sep'09 - Jun'13"}
              imageSrc={cliff}
              imageAlt="cliff"
              title="Biological Sciences, Bachelor's Degree"
              subTitle={this.renderWebLink(
                'https://www.calpoly.edu/',
                'Cal Poly SLO'
              )}
              description="Experimental data collection, statistical analysis, prediction in research, and psychology."
              hashtags="#Biology #AskQuestions #Explore"
            />
          </section>
        </div>
        <div id="resume-linkedin">
          <div className="container">
            <div className="row">
              <div className="col s12 m6 xl12">
                <div className="bootcamp-image valign-wrapper">
                  <img
                    src={bootcamp}
                    className="responsive-img"
                    alt="bootcamp"
                  />
                </div>
                <div className="bootcamp-image valign-wrapper">
                  <img
                    src={certificate}
                    className="responsive-img"
                    alt="certificate"
                  />
                </div>
              </div>
              <div className="col s12 m6 xl12">
                <div className="resume-linkedin-description">
                  <p>
                    If you'd like a formal document please see my
                    <a
                      className="color-accent"
                      href={resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      resume
                    </a>
                    . You can also checkout my
                    <a
                      className="color-accent"
                      href="https://www.linkedin.com/in/jayleh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      Linkedin
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="where-ive-been" className="container">
          <div className="row">
            <div className="col s12">
              <h3>Where I've Been</h3>
            </div>
          </div>
          <div id="text-word" className="row">
            <div className="col s12 l2">
              <p>
                These are all the countries that I have{' '}
                <span className="color-accent">visited</span> or{' '}
                <span className="text-important">lived</span> in.
              </p>
            </div>
            <div className="col s12 l10 center-align">
              <div id="map">
                <VectorMap
                  containerStyle={containerStyle}
                  map={map}
                  backgroundColor={backgroundColor}
                  zoomButtons={zoomButtons}
                  regionStyle={regionStyle}
                  series={series}
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// function setFocusMapCenter() {
//   var mapObj = $('#map').vectorMap('get', 'mapObject'),
//     center = mapObj.pointToLatLng(mapObj.width / 2, mapObj.height / 2);

//   var config = {
//     animate: true,
//     lat: center.lat,
//     lng: center.lng,
//     scale: 1
//   };

//   mapObj.setFocus(config);
// }

export default About;
