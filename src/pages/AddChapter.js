import { useState } from "react";
import { useParams } from "react-router-dom";
import NewChapter from "../components/comics/NewChapter";
import MainLayout from "../components/layouts/MainLayout";
function AddChapter(props) {
  
  const { comicId } = useParams();
  console.log(comicId);

  function addNewChapter() {
    console.log('add chapter');
  }
  return (
    <MainLayout>
      <NewChapter comicId={comicId} addNewChapter={addNewChapter} />
    </MainLayout>
  );
}

export default AddChapter;
