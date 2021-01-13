import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';



export default function Aidcpc(){
    return(
        
        <div className="aidcpc">
            <Hero name="AIDCPC"/>
            <ListImage title="We Are.." description="Our infectious disease clinics provide 
        state-of-the-art diagnosis and treatment for a wide range of infections. 
        We also provide travel immunizations and other prevention services. 
        Our team of infectious disease doctors have specialized expertise in many areas, including:"
  listfirst="Infectious diseases."
  listsecond="Infections related to immunodeficiency."
  listthird="Travel medicine and tropical diseases."
  listfourth="HIV and sexually transmitted diseases."
  listfifth="Bone and joint infections."
    image="/images/donate.jpg" align="right"/>
            </div>
           
            
    );
}
