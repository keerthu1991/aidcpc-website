import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Download({title,description,image,pdf,buttonname}) {
    
    return (
    
        <Container>
             <Card className="text-center">
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
        <br/>
        <Button href={pdf}>{buttonname}</Button>
      </Card.Text>
    </Card.Body>
  </Card>
  
        </Container>
  
   );
}
