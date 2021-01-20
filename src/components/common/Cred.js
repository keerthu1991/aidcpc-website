import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export default function FeedbackInfo({ title, image }) {
  return (
    <>
      <Container className="cred">
        <Card>
          <Card.Img variant="top" alt={title} src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
