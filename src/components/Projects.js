import React from 'react';
import {Row} from 'reactstrap';

import Card from './Cards/Card';

const Projects = () => {
  return (
    <section style={{background: "#ffffff"}} className="py-2 pb-5">
      <Row className="mt-5 mb-2 mb-md-3">
        <h1 className="m-auto text-center display-md-4 font-weight-bold">Previous Projects</h1>
        <h4 className="w-100 text-center font-weight-normal text-muted">Here is a collection of some of my projects</h4>
      </Row>

      <Card
        image="project1.png"
        title="Covid-19 Tracker"
        description="This project allows you to see the actual status of the coronavirus (Infected, Deaths and Recovered) in every country."
        website="https://danielcortild.github.io/Covid19Tracker/"/>

      <Card reverse
        image="project2.png"
        title="Airport Locator"
        description="This Google Maps project allows its user to locate airports close to a certain location."
        website="https://danielcortild.github.io/AirportLocator/"/>

      <Card
        image="tictactoe.png"
        title="TicTacToe"
        description="Web interface of a Artificial IntelligenceTicTacToe Agent."
        website="https://cssm-tictactoe.herokuapp.com/"/>
    </section>
  )
}

export default Projects;