import React from 'react';

import Experience from './components/Experience/';
import Projects from './components/Projects/';

function App() {
  return (
    <React.Fragment>
        <div className="wrapper">


          <section id="about">
            <div className="row">
              <div className="col-12 text-center">
                <div className="profile-photo" style={{backgroundImage: 'url(assets/images/profile.jpg)'}}></div>
                <div className="details">
                  <h2>Hi, I am Daniel. <span>I solve </span><span id="writing-text"></span></h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 column">
                <div className="cta text-center">
                  <a className="my-button cta-button expand form-button" href="mailto:daniel.cortild@gmail.com">Get In Touch</a>
                </div>
              </div>
              <div className="small-12 column">
                <div className="my-arrow-div text-center">
                  <a href="https://github.com/DanielCortild"><i className="fa fa-github-alt fa-2x"></i></a>
                  <a href="https://www.linkedin.com/in/daniel-cortild-67413a166/"><i className="fa fa-linkedin fa-2x"></i></a>
                </div>
              </div>
            </div>

          </section>

          <Experience />
          <Projects />


          <section id="teaching">

            <h2 className="text-center">Coaching</h2>
            <div className="row">
              <div className="small-12 medium-8 medium-offset-2">
                <p className="text-center tag-line">I have enjoyed transfering knowledge to others for the last couple of years, having taught coding both in person and online</p>
              </div>
            </div>

            <div className="row work-row">
              <div className="small-12 medium-6 medium-push-6 columns">
                <img src="assets/images/techieslab.png" alt="" />
              </div>
              <div className="small-12 medium-5 medium-pull-7 columns">
                <div className="details details-ftm">
                  <h3>Techies Lab</h3>
                  <p>Techies Lab is an organization teaching children the basics of coding. This covers Scratch for the younger ones, and JavaScript for the older/more advanced ones.</p>
                  <a className="my-button" target="_blank" href="http://techieslab.be">Visit Website</a>
                </div>
              </div>
            </div>

            <div className="row work-row">
              <div className="small-12 medium-6 columns">
                <img src="assets/images/eurospace.jpg" alt="" />
              </div>
              <div className="small-12 medium-5 medium-offset-1 columns">
                <div className="details details-ftm">
                  <h3>Euro Space Center</h3>
                  <p>Euro Space Center is a former autronaut training center. They organize several arduino coding camps teaching how to code a micro-satellite, which I was participating in as a teacher.</p>
                  <a className="my-button" target="_blank" href="https://www.eurospacecenter.be/en/holiday-camps/satellite">Visit Website</a>
                </div>
              </div>
            </div>

          </section>

          <section id="footer-cta">
            <h2 className="text-center">Interested in working with me?</h2>
            <p></p>
            <div className="row text-center">
              <div className="small-12 medium-8 medium-offset-2 columns">
                <p className="text-center">I am currently available.</p>
              </div>
              <div className="small-12 columns" id="startButtonDiv">
                <a className="my-button form-button" href="mailto:daniel.cortild@gmail.com">Start Now</a>
              </div>
            </div>
          </section>

          <footer id="footer">
            <div className="row text-center">
              <div className="small-12 medium-6 medium-offset-3 columns">
                <p id="logo">DC</p>
                <p id="copyright">Copyright &copy; 2020 | Daniel Cortild</p>
              </div>
            </div>
          </footer>



        </div>
        <script src="script.js" charset="utf-8"></script>

    </React.Fragment>
  );
}

export default App;
