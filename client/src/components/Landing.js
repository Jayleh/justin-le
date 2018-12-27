import React from 'react';

const Landing = () => {
  return (
    <div>
      <div class="parallax-box valign-wrapper">
        <div id="impression" class="container valign-wrapper center-align">
          <div class="intro center-align">
            <h2>I'm Justin,</h2>
            <p>a developer!</p>
          </div>
          <div id="visual">
            <div id="collision" class="center-align" />
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="container center-align">
            <div className="row">
              <div className="col s12">
                <article>
                  <img src="" alt="" className="circle responsive-img" />
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
      </main>
    </div>
  );
};

export default Landing;
