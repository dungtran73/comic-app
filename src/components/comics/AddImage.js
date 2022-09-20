import "./AddImage.css";
import { useRef } from "react";
function AddImage(props) {
  const imageUrlRef = useRef();
  function onChangeInput(event) {
    props.onChangeInput(props.order ,event.target.value);
  }
  return (
    <span className="new-image">
      <div className="row">
        <label htmlFor="image">Trang {props.order + 1} </label>
        <input required
          type="text"
          id={`image_${props.order}`}
          placeholder={`URL trang ${props.order + 1}`}
          ref={imageUrlRef}
          onChange={onChangeInput}
        />
        
      </div>
    </span>
  );
}

export default AddImage;
