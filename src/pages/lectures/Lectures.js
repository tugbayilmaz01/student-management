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
      <Table lecture={lecture} />
    </>
  );
}

export default Lectures;
