import React, { useState } from "react";
import Slider from "react-slick";
import BigBus from "../../../assets/Main/BigBus.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.css";

function MainRecomm() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slickNext: true,
  };
  return (
    <div className="recommendation">
      <h2>OOO님의 탑승이력 기반 추천</h2>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="carousel">
            <p className="recom-way">출근</p>
            <p className="recom-route">당산 - 강남</p>

            <div className="bus-img">
              <img className="bus-logo" src={BigBus} alt="버스 로고" />
            </div>
            <div className="recom-reser">예약하러 가기</div>
          </div>
          <div className="carousel">
            <p className="recom-way">퇴근</p>
            <p className="recom-route">강남 - 당산</p>

            <div className="bus-img">
              <img className="bus-logo" src={BigBus} alt="버스 로고" />
            </div>
            <div className="recom-reser">예약하러 가기</div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MainRecomm;
