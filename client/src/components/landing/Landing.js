import * as d3 from 'd3';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Breaker from '../breaker/Breaker';
import portrait from './images/portrait.jpg';
import Collision from '../visuals/Collision';
import ChartBubble from '../visuals/ChartBubble';
import ChartBar from '../visuals/ChartBar';
import './Landing.css';

class Landing extends Component {
  componentDidMount() {
    this.impressionHRef = d3.select(
      ReactDOM.findDOMNode(this.refs.impressionHRef)
    );
    this.impressionPRef = d3.select(
      ReactDOM.findDOMNode(this.refs.impressionPRef)
    );
    this.visualRef = d3.select(ReactDOM.findDOMNode(this.refs.visualRef));

    const ELEMENTS = [
      { ref: this.impressionHRef, intensity: 4 },
      { ref: this.impressionPRef, intensity: 2 },
      { ref: this.visualRef, intensity: 10 }
    ];

    window.addEventListener('scroll', () => {
      let wScroll = window.scrollY;

      // console.log(wScroll);

      ELEMENTS.forEach(({ ref, intensity }) =>
        this.parallax(wScroll, ref, intensity)
      );
    });
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll');
  }

  parallax(wScroll, element, intensity) {
    element.style('transform', 'translate(0px, -' + wScroll / intensity + '%)');
  }

  render() {
    return (
      <main>
        <div className="parallax-box valign-wrapper">
          <div
            id="impression"
            className="container valign-wrapper center-align"
          >
            <div className="intro center-align">
              <h2 ref="impressionHRef">I'm Justin,</h2>
              <p ref="impressionPRef">a developer!</p>
            </div>
            <div ref="visualRef" id="visual">
              <div id="collision" className="center-align">
                <Collision />
              </div>
            </div>
          </div>
        </div>
        <section id="hello">
          <div className="container center-align">
            <div className="row">
              <div className="col s12">
                <article>
                  <img
                    src={portrait}
                    alt="Justin Le"
                    className="circle responsive-img portrait-img"
                  />
                  <h3>Hi.</h3>
                  <p className="flow-text">
                    I'm a developer / data analyst based in Irvine, California.
                    I have a passion for building full stack web applications
                    and a goal to always be learning.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <Breaker />
        <section id="what-i-do">
          <div className="container center-align">
            <div className="row">
              <div className="col s12">
                <article>
                  <div className="row">
                    <div className="col s12">
                      <div className="heading">
                        <h3>What I can do.</h3>
                      </div>
                    </div>
                  </div>
                  <div id="data" className="row">
                    <div className="col s12 l5">
                      <div className="chart-container">
                        <ChartBubble />
                      </div>
                    </div>
                    <div className="col s12 l7">
                      <div className="details">
                        <h4>Straight up creation.</h4>
                        <p className="flow-text">
                          From ideation to deployment, my goals are to focus on
                          building intuitive content that streamlines processes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="grow" className="row">
                    <div className="col s12 l5 push-l7">
                      <div className="chart-container">
                        <ChartBar />
                      </div>
                    </div>
                    <div className="col s12 l7 pull-l5">
                      <div className="details">
                        <h4>Grow with you.</h4>
                        <p className="flow-text">
                          I'm a full-stack developer with a side in data
                          analytics. I'm driven to learn and adapt as technology
                          changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <Breaker />
        <section id="i-can-help">
          <div className="container center-align">
            <div className="row">
              <div className="col s12">
                <article>
                  <div className="heading">
                    <h3>I can help.</h3>
                    <h4>I'm currently on the job market.</h4>
                  </div>
                  <p className="flow-text">
                    Looking to build robust applications with a fast-paced
                    company.
                  </p>
                  <a
                    className="waves-effect waves-light btn-large"
                    href="mailto:jaylehyun@gmail.com"
                  >
                    <i className="material-icons left">mail</i>EMAIL ME
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Landing;
