import React from 'react';
import CardInfo from '../common/CardInfo';
import Hero from '../common/Hero';
import Container from 'react-bootstrap/Container';
import {
  drCharu,
  drYasar,
  heroHealthProf,
} from '../../utilities/doctorstrings';
export default function HealthProfessionals() {
  return (
    <>
      <Hero name={heroHealthProf} />
      <Container className="cardinfo">
        {drCharu.map((charu, idx) => {
          return (
            <CardInfo
              title={charu.title}
              role={charu.role}
              description={charu.description}
              image={charu.image}
              href={charu.href}
              buttonname={charu.buttonname}
              align={charu.align}
            />
          );
        })}
        {drYasar.map((yasar, idx) => {
          return (
            <CardInfo
              title={yasar.title}
              description={yasar.description}
              image={yasar.image}
              href={yasar.href}
              buttonname={yasar.buttonname}
              align={yasar.align}
            />
          );
        })}
      </Container>
    </>
  );
}
