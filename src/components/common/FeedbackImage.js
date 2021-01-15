import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function FeedbackImage({title,description,image}) {
    return (
       <div className="feedback">
       <Container>
             <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
        </Container>
        </div>
   );
}
