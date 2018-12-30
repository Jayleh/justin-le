import React from 'react';

import './subtleEffects/normalize.css';
import './subtleEffects/demo.css';
import './subtleEffects/set1.css';

import testImg from './images/usgs-quake-min.PNG';

const ProjectsTest = () => {
  return (
    <main>
      <div className="content">
        <div className="grid">
          <figure className="effect-lily">
            <img src={testImg} alt="img01" />
            <figcaption>
              <h2>
                Nice <span>Lily</span>
              </h2>
              <p>Lily likes to play with crayons and pencils</p>
              <a href="#">View more</a>
            </figcaption>
          </figure>
          <figure className="effect-lily">
            <img src={testImg} alt="img12" />
            <figcaption>
              <div>
                <h2>
                  Nice <span>Lily</span>
                </h2>
                <p>Lily likes to play with crayons and pencils</p>
              </div>
              <a href="#">View more</a>
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default ProjectsTest;
