import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./Header";
import Main from "./pages/Main";
import MainRoute from "./pages/Main/MainRoute";
import MainDetail from "./pages/Main/DetailRoute";
import Welcome from "./pages/Welcome";
import Reservation from "./pages/Reservation";
import NotFound from "./pages/NotFound";
import LocationSelect from "./pages/Reservation/LocationSelect";
import TimeSelect from "./pages/Reservation/TimeSelect";
import "./styles/globals.css";
import DetailRoute from "./pages/Main/DetailRoute";

const App = () => {
  return (
    <div className="App">
      <div className="Mobile">
        <BrowserRouter>
          <Routes>
            <Route path="/welcome" element={<Welcome />} />

            <Route path="/" element={<Main />} />
            <Route path="/route" element={<MainRoute />} />
            <Route path="/route-detail" element={<DetailRoute />} />
            <Route path="/detail" element={<MainDetail />} />

            <Route path="/reservation" element={<Reservation />} />
            <Route path="/reservation-location" element={<LocationSelect />} />
            <Route path="/reservation-time" element={<TimeSelect />} />
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
