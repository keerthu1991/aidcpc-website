import React from 'react';
import Hero from '../common/Hero';
import InsComp from '../common/InsComp';
import { insComp } from '../../utilities/strings';
export default function InsuranceAccepted() {
  return (
    <div>
      <Hero name="Insurance" />
      {insComp.map((insurance, idx) => {
        return (
          <InsComp
            alt={insurance.alt}
            image={insurance.image}
            title={insurance.title}
            description={insurance.description}
            mailto={insurance.mailto}
          />
        );
      })}
    </div>
  );
}
