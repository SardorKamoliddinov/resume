import React from "react";
import Qwasar from "./../../images/qwasar.jpg";
import IELTS from "./../../images/ielts.jpg";
import './Certificate.css'

const Certificate = () => {
  return (
    <div className="certificate" id="certificate">
      <div className="images">
        <img src={Qwasar} alt="" />
        <img src={IELTS} alt="" />
      </div>
    </div>
  );
};

export default Certificate;
