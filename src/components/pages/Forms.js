import React from 'react';
import Hero from '../common/Hero';
import Download from '../common/Download';

export default function Forms() {
  return (
    <div>
      <Hero name="Registration Form" />
      <Download
        title="Patient Registration Form"
        description="Kindly download the patient form, fill it and bring it while you visit the clinic"
        image="images/form.jpg"
        pdf="images/patientform.docx"
        buttonname="Download Patient Registration Form"
      />
    </div>
  );
}
