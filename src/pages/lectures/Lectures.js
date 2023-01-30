import { useState, useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import LectureModal from "../../components/LectureModal";
import Table from "../../components/Table";

function Lectures() {
  var lectures = [
    {
      lectureID: "CENG3507",
      lecturename: "Mobile Development",
    },
  ];

  const [lecture, setLecture] = useState(lectures);

  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  useEffect(() => {}, [lecture]);

  const deleteTableRows = (index) => {
    const rows = [...lecture];
    rows.splice(index, 1);
    setLecture(rows);
  };

  const handleChange = (key, evnt) => {
    const { name, value } = evnt.target;
    const lectureofstudents = [...lecture];
    lectureofstudents[key][name] = value;
    setLecture(lectureofstudents);
  };

  return (
    <>
      <Navbar />
      {modalOpen && (
        <LectureModal
          handleClose={handleClose}
          setLecture={setLecture}
          lecture={lecture}
        />
      )}

      <PrimaryButton text="Add New Lecture" handleClick={handleClick} />
      <Table
        lecture={lecture}
        deleteTableRows={deleteTableRows}
        handleChange={handleChange}
      />
    </>
  );
}

export default Lectures;
