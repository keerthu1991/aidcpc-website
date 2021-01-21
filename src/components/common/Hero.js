import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Hero({ name }) {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <h1>{name}</h1>
        </Container>
      </Jumbotron>
    </>
  );
}
