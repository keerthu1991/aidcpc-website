import React from 'react';
import { heroLanding, landingPage } from '../../utilities/landingstrings';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';

function LandingPage() {
  return (
    <>
      {heroLanding.map((hero, idx) => {
        return <Hero name={hero.name} abbr={hero.abbr} />;
      })}
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
