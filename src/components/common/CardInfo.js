import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  drCharuMemberships,
  drCharuAffliations,
  drCharuEducation,
  drYasarAffliations,
  drYasarMemberships,
  drYasarEducation,
} from '../../utilities/doctorstrings';
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from 'react-bootstrap';

export default function CardInfo({
  title,
  description,
  image,
  href,
  buttonname,
  align,
  role,
}) {
  return (
    <>
      {align === 'right' ? (
        <>
          <Card className="healthprofessionals">
            <Card.Img variant="top" alt={title} src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle>{role}</Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                Affliations <br />
                <ListGroup variant="flush">
                  {drCharuAffliations.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Text>
                Memberships <br />
                <ListGroup variant="flush">
                  {drCharuMemberships.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Text>
                Education <br />
                <ListGroup variant="flush">
                  {drCharuEducation.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      ) : (
        <>
          <Card className="healthprofessionals">
            <Card.Img variant="top" alt={title} src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text>
                Affliations <br />
                <ListGroup variant="flush">
                  {drYasarAffliations.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Text>
                Memberships <br />
                <ListGroup variant="flush">
                  {drYasarMemberships.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
              <Card.Text>
                Education <br />
                <ListGroup variant="flush">
                  {drYasarEducation.map((value, idx) => {
                    return <ListGroupItem key={idx}>{value}</ListGroupItem>;
                  })}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}
