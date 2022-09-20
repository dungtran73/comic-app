import SectionHeader from "../components/layouts/SectionHeader";
import MainLayout from "../components/layouts/MainLayout";
import NewComicForm from "../components/comics/NewComicForm";
import { v4 as uuidv4 } from 'uuid';
import ResponseMessage from "../components/layouts/ResponseMessage";
import { useState } from "react";
import NewChapter from "../components/comics/NewChapter";
function AddComic() {
  const [displayMessage, setDisplayMessage] = useState(false);
  var [statusSuccess, setStatusSuccess] = useState(false);
  const [messageType, setMessageType] = useState('success');
  const [message, setMessage] = useState('');
  function addComicHandler(comicInfo) {
    comicInfo.id = uuidv4();
    fetch(
      'https://comic-app-4d9e8-default-rtdb.asia-southeast1.firebasedatabase.app/comics.json',
      {
        method: 'POST',
        body: JSON.stringify(comicInfo),
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
        setMessage('Thêm truyện thành công');
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

  function setStatusSuccessHandler() {
    setStatusSuccess(false);
  }

  return (
    <MainLayout>
    <SectionHeader classTitle="text-list-update" classIcon="fa fa-book" sectionTitle = "Thêm truyện mới "/>
    <NewComicForm onAddComic={addComicHandler} setStatusSuccess={setStatusSuccessHandler} successStatus={statusSuccess}/>
    {displayMessage && <ResponseMessage message={message} messageType={messageType} /> }
    </MainLayout>
  );
}

export default AddComic;
