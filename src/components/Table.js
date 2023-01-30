/* eslint-disable */
import { useState } from "react";
import LectureEditModal from "./LectureEditModal";

const Table = (props) => {
  const [editmodalOpen, setEditmodalOpen] = useState(false);

  const handleChange = (key, event) => {
    const { name, value } = event.target;
    const lectureofstudents = [...props.lecture];
    lectureofstudents[key][name] = value;
    props.setLecture(lectureofstudents);
  };

  const handleEditButtonClick = (key, event) => {
    setEditmodalOpen(true);
    console.log(key, event);
    handleChange(key, event);
  };

  return (
    <>
      {editmodalOpen && (
        <LectureEditModal
          handleClose={props.handleClose}
          setLecture={props.setLecture}
          lecture={props.lecture}
        />
      )}

      <table className="table">
        <thead>
          <tr>
            <th> Lecture Id</th>
            <th>Lecture Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(props.lecture).map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.lectureID}</td>
                <td>{item.lecturename}</td>
                <td>
                  {" "}
                  <button
                    onClick={props.deleteTableRows}
                    className="lecturebtn"
                  >
                    {" "}
                    X
                  </button>
                </td>
                <td>
                  <button
                    onClick={(event) => {
                      handleEditButtonClick(key, event);
                    }}
                    className="lecturebtn"
                  >
                    Edit
                  </button>{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
