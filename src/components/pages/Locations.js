import React from 'react';
import Hero from '../common/Hero';
import LocationDesc from '../common/LocationDesc';
import AIDCLocations from '../common/AIDCLocations';
import Card from 'react-bootstrap/Card';
import {
  heroLocations,
  hospLocations,
  offLocation,
} from '../../utilities/locationstrings';
import Container from 'react-bootstrap/Container';
export default function Locations() {
  return (
    <div>
      <Hero name={heroLocations} />
      <AIDCLocations />
      {offLocation.map((office, idx) => {
        return (
          <LocationDesc
            title={office.title}
            description={office.description}
            image={office.image}
            align={office.align}
          />
        );
      })}
      <Container className="locationdesc">
        <Card.Header>Hospitals Affliated</Card.Header>
        {hospLocations.map((hosp, idx) => {
          return (
            <LocationDesc
              title={hosp.title}
              description={hosp.description}
              image={hosp.image}
              align={hosp.align}
            />
          );
        })}
      </Container>
    </div>
  );
}
