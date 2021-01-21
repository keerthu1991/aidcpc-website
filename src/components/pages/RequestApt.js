import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { idOff, requestApt } from '../../utilities/otherstrings';
export default function RequestApt() {
  return (
    <>
      <Alert variant="success">
        <Alert.Heading>{requestApt}</Alert.Heading>
        <hr />
        <p className="mb-0">
          Please contact 732-230-2828 between 9.30 AM and 5.30 PM on Monday -
          Friday
          <br />
          (Or)
          <br />
          Please send an email to <a href={'mailto:' + idOff}>{idOff}</a>
        </p>
      </Alert>
    </>
  );
}
