import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function CardInfo({title,description,image,href,buttonname}) {
    return (
        <>
            
  <Card>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
   {description}
    </Card.Text>
    <Button href={href}>{buttonname}</Button>
  </Card.Body>
</Card>
        </>
    )
}
