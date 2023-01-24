import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Navbar from "../../components/Navbar";
import LectureModal from "../../components/LectureModal";

function Lectures() {
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
      {modalOpen && <LectureModal handleClose={handleClose} />}

      <PrimaryButton text="Add New Lecture" handleClick={handleClick} />
    </>
  );
}

export default Lectures;
