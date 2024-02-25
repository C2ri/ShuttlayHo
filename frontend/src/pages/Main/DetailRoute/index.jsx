import "../../../styles/common.css";
import React, { useState } from "react";
import SpecificRoute from "../../../components/Main/DetailRoute/SpecificRoute";
import Modal from "react-modal";
import "./styles.css";

function DetailRoute() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div>
      <h1>당산-강남 노선</h1>
      <button>이전시간</button>
      <SpecificRoute></SpecificRoute>
      <button className="next-button" onClick={openModal}>
        지금 예약하기
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal">
        <h2 className="modal-h2">
          원하는 도착 시간을 <br />
          선택해주세요
        </h2>
        <div className="arrive-box">
          <button className="small-button" id="time-check">
            8시
          </button>
          <button className="small-button" id="time-check">
            9시
          </button>
          <button className="small-button" id="time-check">
            10시
          </button>
        </div>
        <div className="close-box">
          <button onClick={closeModal} className="close-button">
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default DetailRoute;
