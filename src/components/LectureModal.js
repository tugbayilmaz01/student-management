import { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

function LectureModal(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewLecture();

    let lectureofstudents = {
      lectureID: event.target.lectureID.value,
      lecturename: event.target.lecturename.value,
    };

    console.log(lectureofstudents);
  };

  const handleNewLecture = (lectureofstudents) => {
    props.setLecture(lectureofstudents);
  };

  return (
    <>
      <Modal show={true} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Lecture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="lectureform" onSubmit={handleSubmit}>
            <div>
              <label>
                Lecture ID
                <input
                  className="lectureinput"
                  type="text"
                  id="lectureID"
                  name="lectureID"
                  placeholder="CENG1907"
                />
              </label>

              <label>
                Lecture Name
                <input
                  className="lectureinput"
                  type="text"
                  id="lecturename"
                  name="lectureame"
                  placeholder="Web Development"
                />
              </label>
            </div>

            <button className="submitbtn" type="submit">
              Submit
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LectureModal;
