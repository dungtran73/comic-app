import { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import NewChapter from "../components/comics/NewChapter";
import MainLayout from "../components/layouts/MainLayout";
import ResponseMessage from "../components/layouts/ResponseMessage";
function AddChapter(props) {
  
  const { comicId } = useParams();
  const [displayMessage, setDisplayMessage] = useState(false);
  var [statusSuccess, setStatusSuccess] = useState(false);
  const [messageType, setMessageType] = useState('success');
  const [message, setMessage] = useState('');

  function addNewChapter(pages, pageNumber) {
    console.log(pages);
    const chapterInfo = {
      chapterId : uuidv4(),
      chapterNumber: pageNumber,
      pages: pages
    }
    let saveUrl = `https://comic-app-4d9e8-default-rtdb.asia-southeast1.firebasedatabase.app/${comicId}/${pageNumber}.json`;
    fetch(
      saveUrl,
      {
        method: 'POST',
        body: JSON.stringify(chapterInfo),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res)=> res.json()
    ).then((result)=>{
      setDisplayMessage(true);
      if (result.error !== "") {
        setStatusSuccess(true);
        setMessageType('success');
        setMessage('Thêm chapter thành công');
      } else {
        setMessageType('error');
        setMessage('Có lỗi xảy ra');
      }
      setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);
    }).catch((error)=>{
      console.log(error);
      setMessageType('error');
      setMessage('Có lỗi xảy ra');
      setTimeout(() => {
        setDisplayMessage(false);
      }, 3000);
    });
  }
  return (
    <MainLayout>
      <NewChapter comicId={comicId} title={props.title} addNewChapter={addNewChapter} successStatus={statusSuccess}/>
      {displayMessage && <ResponseMessage message={message} messageType={messageType} /> }
    </MainLayout>
  );
}

export default AddChapter;
