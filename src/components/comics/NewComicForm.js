import { useEffect, useRef, useState } from "react";
import classes from "./NewComicForm.module.css";

function NewComicForm(props) {
  const [statusValue, setStatusValue] = useState(0);
  const titleInputRef = useRef();
  const authorInputRef = useRef();
  const statusInputRef = useRef();
  const descriptionInputRef = useRef();
  const thumbnalImageRef = useRef();

  useEffect(() => {
    if (props.successStatus) {
        resetInput();
    }
  }, [props.successStatus]);

  function submitHandler(event) {
    event.preventDefault();

    const inputTitle = titleInputRef.current.value;
    const inputAuthor = authorInputRef.current.value;
    const inputStatus = statusInputRef.current.value;
    const inputDescription = descriptionInputRef.current.value;
    const inputThumbnal = thumbnalImageRef.current.value;

    const comicInfo = {
      title: inputTitle,
      author: inputAuthor,
      status: inputStatus,
      description: inputDescription,
      thumbnail: inputThumbnal,
    };

    props.onAddComic(comicInfo);
  }

  function resetInput() {
    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
    statusInputRef.current.value = '0';
    descriptionInputRef.current.value = '';
    thumbnalImageRef.current.value = '';
    setStatusValue(0);
    props.setStatusSuccess(false);
  }

  function onSelectStatus(event) {
    setStatusValue(event.target.value);
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Tên truyện</label>
          <input type="text" required id="title" ref={titleInputRef} placeholder="Tên truyện"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="author">Tác giả</label>
          <input type="text" required id="author" ref={authorInputRef} placeholder="Tác giả"/>
        </div>
        <div className={classes.control}>
          <label htmlFor="status">Trạng thái</label>
          <select
            id="status"
            ref={statusInputRef}
            value={statusValue}
            onChange={onSelectStatus}
          >
            <option value="0">Đang cập nhật</option>
            <option value="1">Đã hoàn thành</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Giới thiệu</label>
          <textarea
            id='description'
            rows='5'
            placeholder="Giới thiệu"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor="thumbnail">Ảnh bìa</label>
          <input type="text" required id="thumbnal" placeholder="URL ảnh bìa truyện" ref={thumbnalImageRef} />
        </div>
        <div className={classes.actions}>
          <button>Thêm truyện</button>
        </div>
      </form>
    </div>
  );
}

export default NewComicForm;
