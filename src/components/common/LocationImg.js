import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function LocationImg({ image }) {
  return (
    <Container className="locationimg">
      <Card>
        <Card.Img variant="top" src={image} />
      </Card>
    </Container>
  );
}
