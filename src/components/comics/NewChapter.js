import { useEffect, useRef, useState } from "react";
import AddImage from "./AddImage";
import classes from "./NewChapter.css";

function NewChapter(props) {
  let imageChaptersInit = [];
  for (let i=1;i<=10;i++){
    imageChaptersInit.push('');
  }
  const [imageChapters, setImageChapters] = useState(imageChaptersInit);
  const [chapterNumber, setChapterNumber] = useState();
  useEffect(() => {
    if (props.successStatus) {
        resetInput();
    }
  }, [props.successStatus]);

  function resetInput() {
    setImageChapters([...imageChaptersInit]);
  }

  function addRow(event) {
    event.preventDefault();
    setImageChapters((prevChapters)=>{
      return [...prevChapters, ''];
    });
  }

  function removeRow(event) {
    event.preventDefault();
    let arr = imageChapters;
    if (arr.length == 1) {
      return false;
    }
    arr.pop();
    setImageChapters([...arr]);
  }

  function onChangeInput(order, value) {
    let items = [...imageChapters];
    let item = items[order];
    item = value;
    items[order] = item;
    setImageChapters(items);
  }
  
  function onInputChapter(event) {
    setChapterNumber(event.target.value);
  }

  function OnAddNewChapter(event) {
    event.preventDefault();
    let pages = [];
    for(let i=0;i<imageChapters.length;i++){
      let pageinfo = {
        pageOrder: i+1,
        image: imageChapters[i]
      };
      pages.push(pageinfo);
    }
    
    props.addNewChapter(pages, chapterNumber);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={OnAddNewChapter}>
        <div>
          <h1 className="detail-title">
            Thêm chapter cho truyện: {props.title}
          </h1>
        </div>
        <div className="input-chapter">
          <p>Chapter number : </p><input type="number" min="1" required onChange={onInputChapter} />
        </div>
        {imageChapters.map((image, i)=>(
          <AddImage order={i} key={i} onChangeInput={onChangeInput} />
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
          <button className="btn">Thêm chapter</button>
        </div>
      </form>
    </div>
  );
}

export default NewChapter;
