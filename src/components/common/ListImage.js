import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

export default function ListImage({title,description,image,align,val}) {
    
  return (
    <>{align === "right"? <div className="aidc">
        <Container>
             <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
        <Card>
  <ListGroup variant="flush">
   {val.map((value,idx)=>{
     return(
      <ListGroupItem key={idx}>{value}</ListGroupItem>
     )
    
   })}
  </ListGroup>
</Card>
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
        </Container>
        </div>:<div className="aidc">
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
        </Container></div>}
  </>
  
   );
}
