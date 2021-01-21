import React from 'react';
import Hero from '../common/Hero';
import ListService from '../common/ListService';
import { heroServices, listService } from '../../utilities/servicestrings';
export default function Services() {
  return (
    <div className="servicelist">
      <Hero name={heroServices} />
      {listService.map((service, idx) => {
        return <ListService alt={service.alt} image={service.image} />;
      })}
    </div>
  );
}
