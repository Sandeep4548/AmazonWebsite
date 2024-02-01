import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./banner.css"
const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
];

const Banner = () => {
  return (
    <Carousel className='carousel'
    showIndicators={false}
    showThumbs={false} // Hide the thumbnail section
    infiniteLoop={true} // Infinite loop for continuous scrolling
    autoPlay={true}
    animation='slide' navButtonsProps={{
        style: {
          background: 'white', // Set the background color to white
          color: 'black', // Set the text color to black
          borderRadius: 0,
          marginTop: -22,
          height: '104px',
        },
      }}>
      {data.map((image, i) => (
        <div key={i}>
          <img src={image} alt={`Banner ${i + 1}`} className='banner_img' />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
