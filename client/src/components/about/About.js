import 'jvectormap-next/jquery-jvectormap.css';
import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';
import Breaker from '../breaker/Breaker';
import AboutCard from './AboutCard';

import bootcampImg from './images/bootcamp-min.jpg';
import certificateImg from './images/certificate-min.jpg';
import cliffImg from './images/cliff-min.jpg';
import moonImg from './images/moon-min.jpg';
import poseImg from './images/pose-min.jpg';
import restImg from './images/rest-min.jpg';
import turtleImg from './images/turtle-min.jpg';
import resumePdf from '../../assets/docs/Justin Le Resume.pdf';

import styles from './About.module.css';
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
    return <span className="blue-dark">{text}</span>;
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
        className="blue-dark"
        rel="noopener noreferrer"
      >
        {` ${name}`}
      </a>
    );
  };

  render() {
    return (
      <main>
        <div id={styles.about} className="container">
          <div className="row">
            <div className="col s12">
              <h3 className={styles['h3-about']}>About</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p className={`${styles.p} text-light`}>
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
        <div id={styles.experience} className="container">
          <div className="row">
            <div className="col s12">
              <h3 className={styles.h3}>Work Experience</h3>
            </div>
          </div>
          <section>
            <AboutCard
              location="Irvine, CA"
              dates={this.renderDates("Dec'17", 'today')}
              imageSrc={turtleImg}
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
            <AboutCard
              location="Sangju, South Korea"
              dates={"Feb'15 - Mar'17"}
              imageSrc={moonImg}
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
        <div id={styles.education} className="container">
          <div className="row">
            <div className="col s12">
              <h3 className={styles.h3}>Education</h3>
            </div>
          </div>
          <section>
            <AboutCard
              location="Everywhere"
              dates={this.renderAccentSpan('Always')}
              imageSrc={restImg}
              imageAlt="rest"
              title="Self-learning"
              subTitle={
                'From each job, className, co-worker, book, article, meet-up or life experience'
              }
              description="This is how I learned 80% of what I know now."
              hashtags="#LearnByDoing"
            />
            <AboutCard
              location="Irvine, CA"
              dates={"Jan'18 - Jul'18"}
              imageSrc={poseImg}
              imageAlt="pose"
              title="Data Analytics & Visualization"
              subTitle={this.renderWebLink(
                'https://bootcamp.ce.uci.edu/data/',
                'UCI Division of Continuing Education'
              )}
              description="Intensive 24-week data bootcamp dedicated to data mining, preparation, and visualization."
              hashtags="#WorkStudy #Python #JavaScript #MachineLearning #DataWrangling #Database #FullStack #WebDevelopment"
            />
            <AboutCard
              location="SLO, CA"
              dates={"Sep'09 - Jun'13"}
              imageSrc={cliffImg}
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
        <div id={styles['resume-linkedin']}>
          <div className="container">
            <div className="row">
              <div
                className={`col s12 m6 xl12 ${styles['bootcamp-container']}`}
              >
                <div
                  className={`${
                    styles['bootcamp-image-container']
                  } valign-wrapper`}
                >
                  <img
                    src={bootcampImg}
                    className={`responsive-img ${styles['bootcamp-image']}`}
                    alt="bootcamp"
                  />
                </div>
                <div
                  className={`${
                    styles['bootcamp-image-container']
                  } valign-wrapper`}
                >
                  <img
                    src={certificateImg}
                    className={`responsive-img ${styles['bootcamp-image']}`}
                    alt="certificate"
                  />
                </div>
              </div>
              <div className="col s12 m6 xl12">
                <div className={styles['resume-linkedin-description']}>
                  <p className={`${styles.p} text-light`}>
                    If you'd like a formal document please see my
                    <a
                      className="blue-dark"
                      href={resumePdf}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {' '}
                      resume
                    </a>
                    . You can also checkout my
                    <a
                      className="blue-dark"
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
        <div id={styles['where-ive-been']} className="container">
          <div className="row">
            <div className="col s12">
              <h3 className={styles.h3}>Where I've Been</h3>
            </div>
          </div>
          <div id={styles['text-word']} className="row">
            <div className="col s12 l2">
              <p className={`${styles.p} text-light`}>
                These are all the countries that I have{' '}
                <span className="blue-dark">visited</span> or{' '}
                <span className="text-important">lived</span> in.
              </p>
            </div>
            <div className="col s12 l10 center-align">
              <div id={styles['map']}>
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
      </main>
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
