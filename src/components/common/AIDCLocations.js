import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

export default function AIDCLocations() {
  return (
    <Container className="aidclocations">
      <Card>
        <iframe
          title="Our Locations"
          src="https://www.google.com/maps/d/u/0/embed?mid=1tNoSBqFEDypOMGrY6D2w6MyWGZJUtGCr"
          width="1200"
          height="400"
        ></iframe>
      </Card>
    </Container>
  );
}
