import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardInfo({
  title,
  description,
  image,
  href,
  buttonname,
}) {
  return (
    <>
      <Card className="healthprofessionals">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button href={href}>{buttonname}</Button>
        </Card.Footer>
      </Card>
    </>
  );
}
