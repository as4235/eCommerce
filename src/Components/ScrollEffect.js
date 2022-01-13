import React from "react";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../CSS/App.module.css";

const ScrollEffect = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={12}
      totalSlides={3}
      isPlaying={true}
      interval={3000}
    >
      <Slider className={styles.sliderImage}>
        <Slide index={0}>
          <img
            style={{ width: "100%" }}
            src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses="
            alt="Slider 1"
          ></img>
        </Slide>
        <Slide index={1}>
          <img
            style={{ width: "100%" }}
            src="https://media.istockphoto.com/photos/abstract-stylized-floating-rainbow-shimmering-triangles-in-a-wavy-picture-id1319817813?b=1&k=20&m=1319817813&s=170667a&w=0&h=rKgfTegk2fGkqbk7Cpi0NqUORo0A-ajLeEF6ArQcBg8="
            alt="Slider 2"
          ></img>
        </Slide>
        <Slide index={2}>
          <img
            style={{ width: "100%" }}
            src="https://media.istockphoto.com/photos/colorful-background-picture-id1280385511?b=1&k=20&m=1280385511&s=170667a&w=0&h=4-KMkIqgyw2gTBMTBbYZVZoidwRsWZzr3q0xyUDYhas="
            alt="Slider 3"
          ></img>
        </Slide>
      </Slider>
    </CarouselProvider>
  );
};

export default ScrollEffect;
