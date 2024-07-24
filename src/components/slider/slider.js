import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderStyle.css";

function CustomSlider({ imagesUrl }) {

  const CustomArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block", backgroundColor: "#97ff2b" }}
      />
    );
  };

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow:<CustomArrow/>,
    prevArrow:<CustomArrow/>
  };

 

  if (imagesUrl?.length === 1)
    return <img src={imagesUrl[0]} alt="carousel" style={{ width: "100%" }} />;

  return (
    <Slider {...settings}>
      {(imagesUrl || []).map((url,index) => (
        <img key={index} className="image" src={url} alt="carousel" />
      ))}
    </Slider>
  );
}

export default CustomSlider;
