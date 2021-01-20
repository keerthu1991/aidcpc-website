import React from 'react';
import Hero from '../common/Hero';
import { faqAccordion } from '../../utilities/strings';
import AccordionPg from '../common/AccordionPg';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
export default function Faqs() {
  return (
    <>
      <Hero name="FAQ's" />
      <Container className="accordionpg">
        <Accordion>
          {faqAccordion.map((faq, idx) => {
            return (
              <AccordionPg
                title={faq.title}
                image={faq.image}
                event={idx === 0 ? '0' : idx}
              />
            );
          })}
        </Accordion>
      </Container>
    </>
  );
}
