import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import {
  diseasesFirst,
  diseasesSecond,
  diseasesThird,
} from '../../utilities/diseasesstrings';
import Container from 'react-bootstrap/Container';

export default function ListService({ image, alt }) {
  return (
    <Container className="listservice">
      <Card>
        <Card.Img alt={alt} variant="top" src={image} />
      </Card>
      <CardColumns>
        <Card>
          <ListGroup variant="flush">
            {diseasesFirst.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
        <Card>
          <ListGroup variant="flush">
            {diseasesSecond.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
        <Card>
          <ListGroup variant="flush">
            {diseasesThird.map((value, idx) => {
              return <ListGroupItem key={idx}>{value}</ListGroupItem>;
            })}
          </ListGroup>
        </Card>
      </CardColumns>
    </Container>
  );
}
