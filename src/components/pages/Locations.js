import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';
export default function Locations() {
    return ( <div className="locations">
        <Hero name="Locations"/> 
        <ListImage title="Our Location" description="Address:NJ" image="images/hosp.jpg" align="left"/>
        </div>
    );
}