import React from 'react';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';
export default function Locations() {
  return (
    <div>
      <Hero name="Location" />
      <ListImage
        title="Edison, New Jersey."
        image="images/hosp.jpg"
        align="left"
      />
    </div>
  );
}
