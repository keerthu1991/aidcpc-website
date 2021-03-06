import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {
  insCompOne,
  insCompTwo,
  insCompThree,
} from '../../utilities/inscompstrings';
import Container from 'react-bootstrap/Container';

export default function InsComp({ image, alt, title, description, mailto }) {
  return (
    <Container className="inscomp">
      <Card>
        <Card.Img variant="top" alt={alt} src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
            <a href={'mailto:' + mailto}>{mailto}</a>.
          </Card.Text>
        </Card.Body>
      </Card>
      <CardColumns>
        <Card>
          <ListGroup variant="flush">
            {insCompOne.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
        <Card>
          <ListGroup variant="flush">
            {insCompTwo.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
        <Card>
          <ListGroup variant="flush">
            {insCompThree.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
      </CardColumns>
    </Container>
  );
}
