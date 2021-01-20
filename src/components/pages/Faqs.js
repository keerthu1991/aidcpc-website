import React from 'react';
import Hero from '../common/Hero';
import AccordionPg from '../common/AccordionPg';
import Container from 'react-bootstrap/Container';
export default function Faqs() {
  return (
    <>
      <Hero name="FAQ's" />
      <Container className="accordionpg">
        <AccordionPg
          title="COVID-19 Infection FAQ's"
          image="images/faq-covid.jpg"
        />
        <AccordionPg title="MRSA Infection FAQ's" image="images/faq-mrsa.jpg" />
      </Container>
    </>
  );
}
