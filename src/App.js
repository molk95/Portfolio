import React from 'react';

import About from './components/About';
import Experience from './components/Experience/';
import Projects from './components/Projects';
import Teaching from './components/Teaching';

function App() {
  return (
    <React.Fragment>
        <div className="wrapper">

          <About />
          <Experience />
          <Projects />
          <Teaching />

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
