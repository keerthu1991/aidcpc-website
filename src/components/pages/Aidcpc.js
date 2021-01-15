import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';



export default function Aidcpc(){
    return(
        
        <div>
            <Hero name="Advanced Infectious Diseases Consultants"/>
            <ListImage description="Advanced infectious diseases consultant provide state-of-the-art diagnosis and treatment for a wide range of infections. 
            We also provide travel immunizations and other prevention services. 
            Our team of infectious disease doctors have specialized expertise in many areas, including:"
  listfirst="Infectious diseases."
  listsecond="Infections related to immunodeficiency."
  listthird="Travel medicine and tropical diseases."
  listfourth="HIV and sexually transmitted diseases."
    image="/images/aboutus.jpg" align="right"/>
            </div>
           
            
    );
}
