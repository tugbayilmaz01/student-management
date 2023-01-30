import { useState, useEffect } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import LectureModal from "../../components/LectureModal";
import Table from "../../components/Table";
import LectureEditModal from "../../components/LectureEditModal";

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
        setLecture={setLecture}
        handleClose={handleClose}
      />
    </>
  );
}

export default Lectures;
