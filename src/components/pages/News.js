import React from 'react';
import ListImage from '../common/ListImage';
import Hero from '../common/Hero';
export default function News() {
  return (
    <div>
      <Hero name="News" />
      <ListImage
        title="General News"
        description=""
        image="images/old-news.jpg"
        align="left"
      />
      <ListImage
        title="Infection Related News"
        description=""
        image="images/news.png"
        align="left"
      />
      <ListImage
        title="Covid News"
        description=""
        image="images/cov-news.jpeg"
        align="left"
      />
      <ListImage
        title="Covid Latest"
        description=""
        image="images/cov-inf-news.jpg"
        align="left"
      />
    </div>
  );
}
