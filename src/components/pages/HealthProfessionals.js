import React from 'react';
import CardInfo from '../common/CardInfo';
import Hero from '../common/Hero';
import Container from 'react-bootstrap/Container';
import { doctorInfo } from '../../utilities/strings';
export default function HealthProfessionals() {
  return (
    <>
      <Hero name="Our Health Professionals" />
      <Container className="cardinfo">
        {doctorInfo.map((doctor, idx) => {
          return (
            <CardInfo
              title={doctor.title}
              description={doctor.description}
              image={doctor.image}
              href={doctor.href}
              buttonname={doctor.buttonname}
            />
          );
        })}
      </Container>
    </>
  );
}
