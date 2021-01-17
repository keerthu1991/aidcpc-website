import React from 'react';
import Hero from '../common/Hero';
import ListImage from '../common/ListImage';

function LandingPage() {
  return (
    <>
      <Hero
        name="Welcome to Advanced Infectious Diseases Consultants!"
        abbr="(AIDC)"
      />
      <ListImage
        title="Infectious Diseases-An Overview"
        description="
  Infectious diseases are disorders caused by organisms — such as bacteria, viruses, fungi or parasites. 
    Many organisms live in and on our bodies. 
    They're normally harmless or even helpful. 
    But under certain conditions, some organisms may cause disease."
        image="images/doctors.jpg"
        align="left"
      />
    </>
  );
}

export default LandingPage;
