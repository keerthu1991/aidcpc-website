import React from 'react';
import Hero from '../common/Hero';
import Cred from '../common/Cred';
import FeedbackImage from '../common/FeedbackImage';
import {
  feedbackImg,
  heroTestimonials,
  testiCred,
} from '../../utilities/testistrings';

export default function Credentials() {
  return (
    <>
      <p>
        <Hero name={heroTestimonials} />
        {testiCred.map((cred, idx) => {
          return <Cred alt={cred.alt} image={cred.image} />;
        })}

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
