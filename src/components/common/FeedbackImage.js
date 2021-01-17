import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function FeedbackImage({ title, image }) {
  return (
    <>
      <Container className="feedback">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Footer>{title}</Card.Footer>
        </Card>
      </Container>
    </>
  );
}
