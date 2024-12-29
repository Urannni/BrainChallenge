import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Keyboard } from "swiper";
import "swiper/swiper-bundle.min.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.webp";
import img6 from "../assets/img6.webp";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.jpg";

SwiperCore.use([Pagination, Navigation, Keyboard]);

const quotes = [
  "Challenge your mind, change your life.",
  "A sharp mind cuts through every challenge.",
  "Train your brain; the world is your gym.",
  "Mental strength grows with every challenge.",
  "Stretch your mind, and your limits expand.",
  "Exercise your brain daily, just like your body.",
  "Great minds thrive on small daily challenges.",
  "The more you think, the more you grow.",
  "Your brain is a muscle. Keep it fit.",
  "Brain workouts: the secret to lifelong learning.",
];

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function Cards() {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="cards-container">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation, Keyboard]}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="cards-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="card">
              <img src={img} alt={`Card ${index + 1}`} className="card-image" />
              <p className="quote">{quotes[index]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="prev-button" onClick={handlePrev}>
        &#60;
      </div>
      <div className="next-button" onClick={handleNext}>
        &#62;
      </div>
    </div>
  );
}

export default Cards;
