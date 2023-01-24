import LectureModal from "./LectureModal";
import React, { useState } from "react";

const PrimaryButton = (props) => {
  return (
    <div>
      <button className="openModalBtn" onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  );
};

export default PrimaryButton;
