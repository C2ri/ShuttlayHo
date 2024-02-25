// import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import "../../../../styles/common.css";

import { useEffect, useRef } from "react";
function SpecificRoute() {
  const mapRef = useRef(null);
  const lat = 37.550005038355861; // 위도 숫자로 넣어주기;
  const lng = 126.91278040651862; // 경도 숫자로 넣어주기;

  useEffect(() => {
    const { naver } = window;
    if (mapRef.current && naver) {
      const location = new naver.maps.LatLng(lat, lng);
      const map = new naver.maps.Map(mapRef.current, {
        center: location,
        zoom: 17, // 지도 확대 정도
      });
      new naver.maps.Marker({
        position: location,
        map,
      });
    }
  }, []);
  return (
    <div>
      <div>
        <span>7:10</span>
        <span>당산역 10번 출구</span>
        <button>위치보기</button>
      </div>
      <div>
        <span>7:12</span>
        <span>당산 초등학교 정문</span>
        <button>위치보기</button>
      </div>
      <div>
        <span>7:15</span>
        <span>양평 한신아파트 입구</span>
        <button>위치보기</button>
      </div>
      <div>
        <span>7:25</span>
        <span>합정역 4번 출구</span>
        <button>위치보기</button>
      </div>
      <div>
        <span>8:35</span>
        <span>강남역 10번 출구</span>
        <button>위치보기</button>
      </div>
      <div>
        <span>8:45</span>
        <span>역삼 GFC 앞</span>
        <button>위치보기</button>
      </div>
      <div ref={mapRef} style={{ width: "500px", height: "500px" }}></div>
    </div>
  );
}

export default SpecificRoute;
