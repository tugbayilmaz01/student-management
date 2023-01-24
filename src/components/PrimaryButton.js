import LectureModal from "./LectureModal";
import React, { useState } from "react";

const PrimaryButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add New Lecture
      </button>

      {modalOpen && <LectureModal setOpenModal={setModalOpen} />}
    </div>
  );
};

export default PrimaryButton;
