import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function MailTo({ title, description, image, mailto }) {
  return (
    <>
      <Container className="mailto">
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
              <a href={'mailto:' + mailto}>{mailto}</a>.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
