import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';
import FeedbackImage from '../common/FeedbackImage';

export default function Credentials() {
    return ( <div>
        <p>
        <Hero name="Credentials from Our Patients"/>
        
        <ListImage image="images/feedback.jpg" align="left"/>
    
            <FeedbackImage title="From Healthgrades.com" image="images/feedback1.jpg" align="left"/>
        
        
        </p>


        </div>
    );
}