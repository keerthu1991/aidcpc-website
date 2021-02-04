import React from 'react';
import {
  idOff,
  requestApt,
  idContact,
  idNo,
} from '../../utilities/otherstrings';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
export default function RequestApt() {
  return (
    <div className="requestapt">
      <Jumbotron fluid>
        <Container>
          <h1>{requestApt}</h1>
          <hr />
          <p className="mb-0">
            Please contact <a href={'tel:' + idContact}>{idNo}</a> between 9.30
            AM and 5.30 PM on Monday - Friday
            <br />
            (Or)
            <br />
            Please send an email to <a href={'mailto:' + idOff}>{idOff}</a>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}
