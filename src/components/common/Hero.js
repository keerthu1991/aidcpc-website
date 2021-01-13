import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function Hero({name,abbr,tagline}) {
    return (
        <div>
             <Jumbotron fluid>
             <Container>
    <h1>{name}<br/>
    {abbr}</h1>
    <p>
   {tagline}
    </p>
  </Container>
             </Jumbotron>
            
        </div>
    )
}
