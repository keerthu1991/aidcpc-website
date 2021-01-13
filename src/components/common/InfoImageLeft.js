import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

export default function InfoImageLeft({title,description,image}) {
    return (
      <>
      
       <div>
         <Container>
         <CardColumns>
           <Card>
           <Card.Img variant="top" src={image}/>
           </Card>
           <Card>
           <Card.Body>
           <Card.Title>{title}</Card.Title>
           <Card.Text>
             {description}
           </Card.Text>
</Card.Body>
           </Card>
           
</CardColumns>
         </Container>
            
        </div>
   </>
   );
}
