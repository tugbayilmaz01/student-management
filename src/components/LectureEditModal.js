import { useState, onChange } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

function LectureEditModal(props) {
  console.log(props);
  const [editlecture, seteditlecture] = useState({
    lecturename: props.lecturename,
    lectureID: props.lectureID,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    let lectureofstudents = {
      lectureID: event.target.lectureID.value,
      lecturename: event.target.lecturename.value,
    };

    handleNewLecture(lectureofstudents);
  };

  const handleNewLecture = (lectureofstudents) => {
    props.setLecture([...props.lecture, lectureofstudents]);
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
                  value={editlecture.lectureID}
                  name="LectureID"
                  placeholder="CENG1907"
                  onChange={(event) =>
                    seteditlecture({
                      ...props.lecture,
                      lectureID: event.target.value,
                    })
                  }
                />
              </label>

              <label>
                Lecture Name
                <input
                  className="lectureinput"
                  type="text"
                  id="lecturename"
                  value={editlecture.lecturename}
                  name="Lecture Name"
                  placeholder="Web Development"
                  onChange={(event) =>
                    seteditlecture({
                      ...props.lecture,
                      lecturename: event.target.value,
                    })
                  }
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

export default LectureEditModal;
