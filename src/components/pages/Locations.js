import React from 'react';
import Hero from '../common/Hero';
import LocationDesc from '../common/LocationDesc';
import AIDCLocations from '../common/AIDCLocations';
import Card from 'react-bootstrap/Card';
import { hospLocations } from '../../utilities/strings';
import Container from 'react-bootstrap/Container';
export default function Locations() {
  return (
    <div>
      <Hero name="Locations" />
      <AIDCLocations />
      <LocationDesc
        title="Office"
        description="98 James St Suite 200, Edison, NJ 08820"
        image="images/officebldg.jpg"
        align="right"
      />
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
