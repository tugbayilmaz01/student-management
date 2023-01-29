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
          <form onSubmit={handleSubmit}>
            <label>
              Lecture ID
              <input
                type="text"
                id="lectureID"
                name="lectureID"
                placeholder="CENG1907"
              />
              <br />
              <br />
            </label>

            <label>
              Lecture Name
              <input
                type="text"
                id="lecturename"
                name="lectureame"
                placeholder="Web Development"
              />
              <br />
              <br />
            </label>

            <button className="submitbtn" type="submit">
              Submit
            </button>

            <br />
            <br />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LectureModal;
