import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';
export default function Credentials() {
    return ( <div className="credentials" >
        <p>
        <Hero name="Credentials"/>
        <ListImage title="Credentials from Our Patients" description="Our Patients are the ones who trust us and we are happy to have treated them well. " image="images/feedback.jpg" align="left"/>
        </p>


        </div>
    );
}