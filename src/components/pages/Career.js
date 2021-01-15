import React from 'react';
import Hero from "../common/Hero";
import MailTo from '../common/MailTo';
export default function Career() {
    return ( <div>
        <Hero name="Career"/>
        <MailTo title="Career Opportunities" description="We are actively looking for Infectious Diseases Physicians and APN's. 
        Please send your CV to " mailto="idadvanced@gmail.com" image="images/career.png"/>
        </div>
    );
}
