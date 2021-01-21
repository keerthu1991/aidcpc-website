import React from 'react';
import Hero from '../common/Hero';
import ListService from '../common/ListService';
import { listService } from '../../utilities/strings';
export default function Services() {
  return (
    <div className="servicelist">
      <Hero name="AIDC-Treatment Provided" />
      {listService.map((service, idx) => {
        return <ListService alt={service.alt} image={service.image} />;
      })}
    </div>
  );
}
