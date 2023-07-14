import React, { Component } from "react";
import classes from "./Reviews.module.scss";
import Slider from "react-slick";

function Reviews() {
  const candyShopReviews = [
    {
      name: "John Smith",
      img: "",
      text: "Amazing variety of candies! The shop has something for everyone. I loved the friendly staff and the vibrant atmosphere.",
    },
    {
      name: "Emily Johnson",
      img: "",
      text: "The candy selection here is outstanding. I always find my favorite childhood treats and discover new ones. Highly recommended!",
    },
    {
      name: "Michael Davis",
      img: "",
      text: "I can't resist visiting this candy shop whenever I'm in the area. The candies are always fresh, and the prices are reasonable.",
    },
    {
      name: "Sarah Thompson",
      img: "",
      text: "This candy shop is a hidden gem! The owner is incredibly knowledgeable and passionate about candies. It's a delight to shop here.",
    },
    {
      name: "David Wilson",
      img: "",
      text: "I organized a birthday party for my daughter, and the candy arrangements from this shop were a hit! The kids loved them.",
    },
    {
      name: "Jessica Brown",
      img: "",
      text: "The candy shop has a lovely nostalgic charm. It reminds me of my childhood, and the candies taste just as good as I remember!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.review}>
          <h1>Reviews</h1>
          {/* <h2> Single Item</h2> */}
          <Slider {...settings} className={classes.slider}>
            {candyShopReviews.map((el) => (
              <fieldset>
                <h3>{el.name}</h3>
                <p>{el.text}</p>
              </fieldset>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
