import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';
export default function Faqs() {
    return ( <div className="faqs" >
        <p>
        <Hero name="FAQ's"/>
        <ListImage title="Ear Infection FAQ's" description="Kindly find above the FAQ's regarding Ear infection." image="images/faq-ear.png" align="left"/>
        <ListImage title="MRSA Infection FAQ's" description="Kindly find above the FAQ's regarding MRSA infection." image="images/faq-mrsa.jpg" align="left"/>
        <ListImage title="COVID-19 Infection FAQ's" description="Kindly find above the FAQ's regarding Covid-19 infection." image="images/faq-covid.jpg" align="left"/>
        </p>


        </div>
    );
}