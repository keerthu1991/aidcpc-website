import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function AIDCLocations() {
  return (
    <Container className="aidclocations">
      <Card>
        <iframe
          src="https://www.google.com/maps/d/u/0/embed?mid=1UV9EHqqbOzR7O2S2pRqZvchpByjWEDOf"
          width="1200"
          height="400"
        ></iframe>
      </Card>
    </Container>
  );
}
