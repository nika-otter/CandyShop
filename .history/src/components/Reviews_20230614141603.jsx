import React, { Component } from "react";
import classes from "./Reviews.module.scss";
import Slider from "react-slick";

function Reviews() {
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
    <div className={classes.container}>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings} className={classes.slider}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Reviews;
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {

//     // const settings = {
//     //   dots: true,
//     //   infinite: true,
//     //   speed: 500,
//     //   slidesToShow: 1,
//     //   slidesToScroll: 1,
//     // };

//     return (
// <div></div>
//     //   <div className={classes.container}>
//     //     <h2> Single Item</h2>
//     //     <Slider {...settings}>
//     //       <div>
//     //         <h3>1</h3>
//     //       </div>
//     //       <div>
//     //         <h3>2</h3>
//     //       </div>
//     //       <div>
//     //         <h3>3</h3>
//     //       </div>
//     //       <div>
//     //         <h3>4</h3>
//     //       </div>
//     //       <div>
//     //         <h3>5</h3>
//     //       </div>
//     //       <div>
//     //         <h3>6</h3>
//     //       </div>
//     //     </Slider>
//     //   </div>
//     );

// }
