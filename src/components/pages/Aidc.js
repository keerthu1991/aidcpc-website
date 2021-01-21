import React from 'react';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';
import { aboutUs, heroAidc } from '../../utilities/aidcstrings';
export default function Aidcpc() {
  return (
    <div>
      <Hero name={heroAidc} />
      {aboutUs.map((about, idx) => {
        return (
          <ListImage
            title={about.title}
            description={about.description}
            image={about.image}
            align={about.align}
          />
        );
      })}
    </div>
  );
}
