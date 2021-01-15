import React from 'react';
import Hero from "../common/Hero";
import ListImage from '../common/ListImage';
export default function InsuranceAccepted() {
    return ( <div>
        <Hero name="Insurance Accepted"/>
        <ListImage image="images/ppl.jpg" title="We Accept the insurance policy from following companies:"  listfirst="ABC"
  listsecond="DEF"
  listthird="GHI"
  listfourth="JKL"
  listfifth="MNO" align="right"/>
        </div>
    );
}