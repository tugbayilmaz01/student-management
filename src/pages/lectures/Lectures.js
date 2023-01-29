import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import LectureModal from "../../components/LectureModal";

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

  return (
    <>
      <Navbar />
      {modalOpen && (
        <LectureModal handleClose={handleClose} setLecture={setLecture} />
      )}

      <PrimaryButton text="Add New Lecture" handleClick={handleClick} />
    </>
  );
}

export default Lectures;
