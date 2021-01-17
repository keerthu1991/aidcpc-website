import React from 'react';
import { insuranceComp } from '../../utilities/strings';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';
export default function InsuranceAccepted() {
  return (
    <div>
      <Hero name="Insurance Accepted" />
      <ListImage
        image="images/ppl.jpg"
        title="We Accept the insurance policy from following companies:"
        align="right"
        val={insuranceComp}
      />
    </div>
  );
}
