import React from 'react';
import Hero from '../common/Hero';
import MailTo from '../common/MailTo';
import { careerOpp } from '../../utilities/strings';
export default function Career() {
  return (
    <div>
      <Hero name="Career Opportunities" />
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
