import React from "react";

function LectureModal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <div className="lectureModal">
            <label>Lecture ID</label>
            <input
              className="lectureInput"
              type="text"
              placeholder="CENG1907"
              autoFocus
            />
          </div>
          <div className="lectureModal">
            <label>Lecture Name</label>
            <input
              className="lectureInput"
              type="text"
              placeholder="Web Development"
              autoFocus
            />
          </div>
          <div className="lectureModal">
            <label>Teacher</label>
            <input
              className="lectureInput"
              type="text"
              placeholder="Bilmem Kim"
              autoFocus
            />
          </div>

          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button id="cancelBtn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LectureModal;
