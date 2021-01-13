import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';


function LandingPage() {
    return (
        <div className="landingpage">

           
  <Hero name="Welcome to AIDC..!" abbr="(Advanced Infectious Disease Consult People Connect)" tagline="One place where
  one needs the space now to treat many infectious diseases one such is the widely spreading Covid-19"/>
  <ListImage title="Infectious Disease-An Overview" description="
  Infectious diseases are disorders caused by organisms — such as bacteria, viruses, fungi or parasites. 
    Many organisms live in and on our bodies. 
    They're normally harmless or even helpful. 
    But under certain conditions, some organisms may cause disease." image="images/infecdis.jpg" align="left"/>
    <ListImage title="Types" description="There are many types, one such is the widely spread Covid-19."
    image="images/cov.jpg" align="left"/>
    <ListImage  title="Our Role" description="With proper, hygienic medication, Covid can be cured 
    but at times certain people wont respond to the same , 
    thus we take care of them and provide them the required treatment."
    image="images/mature-woman-leaving.jpg" align="left"/>
    
        </div>
    )
}

export default LandingPage;
