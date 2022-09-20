import "./AddImage.css";
import { useRef } from "react";
function AddImage(props) {
  const imageUrlRef = useRef();
  return (
    <span className="new-image">
      <div className="row">
        <label htmlFor="image">Trang {props.order + 1} </label>
        <input
          type="text"
          id="image"
          placeholder={`URL trang ${props.order + 1}`}
          ref={imageUrlRef}
        />
        
      </div>
    </span>
  );
}

export default AddImage;
