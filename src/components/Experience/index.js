import React from 'react';
import {Row, Col} from 'reactstrap';

import {RiComputerLine} from 'react-icons/ri';
import {AiOutlineCloudServer, AiFillTool} from 'react-icons/ai';

import cx from 'classnames';

import styles from './Experience.module.css';

const Experience = () => {
  return (
    <Row className={styles.experience}>
      <Col className="text-center">
        <RiComputerLine size="4em" color="orange"/>
        <h3>Front-end</h3>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Bootstrap</p>
        <p>JavaScript</p>
        <p>JQuery</p>
        <p>React</p>
      </Col>
      <Col className="text-center">
        <AiOutlineCloudServer size="4em" color="orange"/>
        <h3>Back-end</h3>
        <p>NodeJS</p>
        <p>NPM</p>
        <p>ExpressJS</p>
        <p>MySQL</p>
      </Col>
      <Col className="text-center">
        <AiFillTool size="4em" color="orange"/>
        <h3>Tools</h3>
        <p>VSCode</p>
        <p>Atom</p>
        <p>Github</p>
        <p>LaTeX</p>
      </Col>
    </Row>
  )
}

export default Experience;
