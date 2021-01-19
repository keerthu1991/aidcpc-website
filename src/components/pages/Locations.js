import React from 'react';
import Hero from '../common/Hero';
import LocationImg from '../common/LocationImg';
import LocationDesc from '../common/LocationDesc';
export default function Locations() {
  return (
    <div>
      <Hero name="Locations" />
      <LocationImg image="images/hosp.jpg" />
      <LocationDesc
        title="Office"
        description="98 James St Suite 200, Edison, NJ 08820"
      />
      <LocationDesc
        title="Hackensack Meridian Health JFK Medical Center"
        description="65 James St, Edison, NJ 08820"
      />
      <LocationDesc
        title="Robert Wood Johnson University Hospital Rahway"
        description="865 Stone St, Rahway, NJ 07065"
      />
    </div>
  );
}
