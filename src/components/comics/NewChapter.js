import { useEffect, useRef, useState } from "react";
import AddImage from "./AddImage";
import classes from "./NewChapter.css";

function NewChapter(props) {
  const comicId = props.comicId;
  let imageChaptersInit = [];
  for (let i=1;i<=10;i++){
    imageChaptersInit.push('');
  }
  const [imageChapters, setImageChapters] = useState(imageChaptersInit);
  useEffect(() => {
    if (props.successStatus) {
        resetInput();
    }
  }, [props.successStatus]);

  function submitHandler(event) {
    event.preventDefault();

    //props.onAddComic(comicInfo);
  }

  function resetInput() {
    
  }

  function addRow() {
    console.log(imageChapters);
    setImageChapters((prevChapters)=>{
      return [...prevChapters, ''];
    });
  }

  function removeRow() {
    console.log(imageChapters);
    let arr = imageChapters;
    arr.pop();
    setImageChapters([...arr]);
  }

  function OnAddNewChapter(event) {
    event.preventDefault();
    props.addNewChapter();
  }

  return (
    <div>
      <form className={classes.form}>
        <div>
          <h1 className="detail-title">
            Thêm chapter cho truyện: {props.title}
          </h1>
        </div>
        {imageChapters.map((image, i)=>(
          <AddImage order={i} key={i}/>
        ))}
        <div className="side-button">
          <button className="btn-icon btn-remove" onClick={removeRow}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="btn-icon btn-add" onClick={addRow}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="actions">
          <button className="btn" onClick={OnAddNewChapter}>Thêm chapter</button>
        </div>
      </form>
    </div>
  );
}

export default NewChapter;
