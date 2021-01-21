import React from 'react';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';
import { aboutUs } from '../../utilities/strings';
export default function Aidcpc() {
  return (
    <div>
      <Hero name="Advanced Infectious Diseases Consultants" />
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
