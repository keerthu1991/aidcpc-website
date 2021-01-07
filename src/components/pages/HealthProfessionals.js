import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
export default function HealthProfessionals(){
    return(
      <div className="container-fluid" >
  <CardDeck>
  <Card>
  <Card.Img variant="top" src="images/charu.jpg" />
  <Card.Body>
    <Card.Title>Dr.Charumathi Rathnakumar</Card.Title>
    <Card.Text>
    Dr. Charumathi Rathnakumar is an Infectious Disease Specialist in Edison, New Jersey. 
    She graduated with honors in 1993. 
    Having more than 23 years of diverse experiences, especially in Infectious Disease, Internal Medicine, 
    Dr. Charumathi Rathnakumar affiliates with many hospitals including Community Hospital Group Inc, 
    Robert Wood Johnson University Hospital Rahway, and cooperates with other doctors and 
    specialists in medical group Advanced Infectious Diseases Consultants, Pc.
    Call Dr. Charumathi Rathnakumar on phone number <Link to="(732) 514-9624"/>(732) 514-9624 for more information and advises or to book an appointment.
    </Card.Text>
    <Button href="https://www.healthgrades.com/physician/dr-charumathi-rathnakumar-3kn8v">View Profile</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="images/charu.jpg" />
  <Card.Body>
    <Card.Title>Dr.Charumathi Rathnakumar</Card.Title>
    <Card.Text>
    Dr. Charumathi Rathnakumar is an Infectious Disease Specialist in Edison, New Jersey. 
    She graduated with honors in 1993. 
    Having more than 23 years of diverse experiences, especially in Infectious Disease, Internal Medicine, 
    Dr. Charumathi Rathnakumar affiliates with many hospitals including Community Hospital Group Inc, 
    Robert Wood Johnson University Hospital Rahway, and cooperates with other doctors and 
    specialists in medical group Advanced Infectious Diseases Consultants, Pc.
    </Card.Text>
    <Button href="#">View Profile</Button>
  </Card.Body>
</Card>
<Card>
  <Card.Img variant="top" src="images/charu.jpg" />
  <Card.Body>
    <Card.Title>Dr.Charumathi Rathnakumar</Card.Title>
    <Card.Text>
    Dr. Charumathi Rathnakumar is an Infectious Disease Specialist in Edison, New Jersey. 
    She graduated with honors in 1993. 
    Having more than 23 years of diverse experiences, especially in Infectious Disease, Internal Medicine, 
    Dr. Charumathi Rathnakumar affiliates with many hospitals including Community Hospital Group Inc, 
    Robert Wood Johnson University Hospital Rahway, and cooperates with other doctors and 
    specialists in medical group Advanced Infectious Diseases Consultants, Pc.
    </Card.Text>
    <Button href="#">View Profile</Button>
  </Card.Body>
</Card>
  </CardDeck>
  
        </div>
    );
}