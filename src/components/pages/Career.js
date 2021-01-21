import React from 'react';
import Hero from '../common/Hero';
import MailTo from '../common/MailTo';
import { careerOpp, heroCareer } from '../../utilities/careerstrings';
export default function Career() {
  return (
    <div>
      <Hero name={heroCareer} />
      {careerOpp.map((career, idx) => {
        return (
          <MailTo
            description={career.description}
            mailto={career.mailto}
            image={career.image}
          />
        );
      })}
    </div>
  );
}
