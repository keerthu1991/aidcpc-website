import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function AccordionPg({ title, image, event }) {
  return (
    <>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey={event}>
            {title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={event}>
          <Card.Img variant="top" src={image} />
        </Accordion.Collapse>
      </Card>
    </>
  );
}
