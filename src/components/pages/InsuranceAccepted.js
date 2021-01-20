import React from 'react';
import Hero from '../common/Hero';
import InsComp from '../common/InsComp';
import { idOff } from '../../utilities/strings';
export default function InsuranceAccepted() {
  return (
    <div>
      <Hero name="Insurance" />
      <InsComp
        alt="Insurance Accepted"
        image="images/ppl.jpg"
        title="Following are the Companies for which we accept Insurance"
        description="If you have any questions on the insurance, 
      please contact 732 2302828 between 9.30 AM to 5.30 PM on Monday-Friday (or) 
      please send an email to "
        mailto={idOff}
      />
    </div>
  );
}
