import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ListImage({title,description,image,listfirst,listsecond,listthird,listfourth,listfifth,listsixth,listseventh,align}) {
    return (
    <>{align === "right"? <>
        <Container>
             <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title>{title}</Card.Title>
      <Card.Text>
        {description}
        <Card>
  <ListGroup variant="flush">
    <ListGroup.Item>{listfirst}</ListGroup.Item>
    <ListGroup.Item>{listsecond}</ListGroup.Item>
    <ListGroup.Item>{listthird}</ListGroup.Item>
    <ListGroup.Item>{listfourth}</ListGroup.Item>
    <ListGroup.Item>{listfifth}</ListGroup.Item>
    <ListGroup.Item>{listsixth}</ListGroup.Item>
    <ListGroup.Item>{listseventh}</ListGroup.Item>
  </ListGroup>
</Card>
      </Card.Text>
    </Card.Body>
  </Card>
  <br/>
        </Container>
        </>:<>
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
        </Container></>}
  </>
  
   );
}
