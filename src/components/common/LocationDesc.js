import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function LocationDesc({ title, description, image, align }) {
  return (
    <>
      {align === 'right' ? (
        <>
          <Container className="locationdesc">
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Card.Img alt={title} variant="top" src={image} />
              </Card.Body>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <Card>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Img alt={title} variant="top" src={image} />
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}
