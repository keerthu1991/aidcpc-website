import React from 'react';
import Hero from '../common/Hero';
import MailTo from '../common/MailTo';
import { idMail } from '../../utilities/strings';
export default function Career() {
  return (
    <div>
      <Hero name="Career Opportunities" />
      <MailTo
        description="We are actively looking for Infectious Diseases Physicians and APN's. 
        Please send your CV to "
        mailto={idMail}
        image="images/career.png"
      />
    </div>
  );
}
