import React from 'react';
import { landingPage } from '../../utilities/strings';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';

function LandingPage() {
  return (
    <>
      <Hero
        name="Welcome to Advanced Infectious Diseases Consultants!"
        abbr="(AIDC)"
      />
      {landingPage.map((landing, idx) => {
        return (
          <ListImage
            title={landing.title}
            description={landing.description}
            image={landing.image}
            align={landing.align}
          />
        );
      })}
    </>
  );
}

export default LandingPage;
