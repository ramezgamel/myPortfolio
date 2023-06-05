import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Section, SectionTitle } from "../../styles/GlobalComponents";
import { images } from "../../constants/constants";

const ImageCarousel = () => {
  return (
    <Section nopadding>
      <SectionTitle main>Certificate</SectionTitle>
      <Carousel autoPlay infiniteLoop>
        {images.map((image) => {
          return (
            <div>
              <img src={image.src} />
              <p className="legend">image.name</p>
            </div>
          );
        })}
      </Carousel>
    </Section>
  );
};
export default ImageCarousel;
