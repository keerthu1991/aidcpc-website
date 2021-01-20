import React from 'react';
import Hero from '../common/Hero';
import Cred from '../common/Cred';
import FeedbackImage from '../common/FeedbackImage';

export default function Credentials() {
  return (
    <>
      <p>
        <Hero name="Testimonials from Our Patients" />

        <Cred image="images/feedback.jpg" />

        <FeedbackImage
          title="From Healthgrades.com"
          image="images/feedback1.jpg"
          align="left"
        />
      </p>
    </>
  );
}
