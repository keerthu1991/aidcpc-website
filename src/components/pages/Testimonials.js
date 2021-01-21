import React from 'react';
import Hero from '../common/Hero';
import Cred from '../common/Cred';
import FeedbackImage from '../common/FeedbackImage';
import { feedbackImg } from '../../utilities/strings';

export default function Credentials() {
  return (
    <>
      <p>
        <Hero name="Testimonials from Our Patients" />

        <Cred image="images/feedback.jpg" />
        {feedbackImg.map((feedback, idx) => {
          return (
            <FeedbackImage
              title={feedback.title}
              image={feedback.image}
              align={feedback.align}
            />
          );
        })}
      </p>
    </>
  );
}
