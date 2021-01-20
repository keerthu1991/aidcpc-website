import React from 'react';
import Hero from '../common/Hero';
import ListService from '../common/ListService';

export default function Services() {
  return (
    <div className="servicelist">
      <Hero name="AIDC-Treatment Provided" />
      <ListService alt="AIDC-Treatment Provided" image="images/services.jpg" />
    </div>
  );
}
