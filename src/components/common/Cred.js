import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
export default function FeedbackInfo({ alt, image }) {
  return (
    <>
      <Container className="cred">
        <Card>
          <Card.Img variant="top" alt={alt} src={image} />
        </Card>
      </Container>
    </>
  );
}
