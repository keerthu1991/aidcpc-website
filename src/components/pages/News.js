import React from 'react';
import AccordionPg from '../common/AccordionPg';
import Hero from '../common/Hero';
import Container from 'react-bootstrap/Container';
export default function News() {
  return (
    <>
      <Hero name="News" />
      <Container className="accordionpg">
        <AccordionPg title="Covid Latest" image="images/cov-inf-news.jpg" />
        <AccordionPg title="Covid News" image="images/cov-news.jpeg" />
        <AccordionPg title="General News" image="images/old-news.jpg" />
        <AccordionPg title="Infection Related News" image="images/news.png" />
      </Container>
    </>
  );
}
