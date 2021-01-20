import React from 'react';
import AccordionPg from '../common/AccordionPg';
import Hero from '../common/Hero';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { newsAccordion } from '../../utilities/strings';
export default function News() {
  return (
    <>
      <Hero name="News" />
      <Container className="accordionpg">
        <Accordion>
          {newsAccordion.map((news, idx) => {
            return (
              <AccordionPg
                title={news.title}
                image={news.image}
                event={idx === 0 ? '0' : idx}
              />
            );
          })}
        </Accordion>
      </Container>
    </>
  );
}
