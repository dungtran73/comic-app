import classes from "./ComicItem.module.css";
import Card from "../ui/Card";
import { useParams } from "react-router-dom";

function ComicItem(props) {
  const bookAvatar = props.bookAvatar;
  const timeAgo = props.timeAgo;
  const typeLabel = props.typeLabel;
  const bookName = props.bookName;
  const lastChapter = props.lastChapter;

  return (
    <div className={classes["comic-item"]}>
      <Card>
        <div className={classes["book-avatar"]}>
          <a href={`/view-comic/${props.id}/`}>
            <img src={bookAvatar} alt="thumbnail" />
          </a>
          <div className={classes["top-notice"]}>
            <span className={classes["time-ago"]}>{timeAgo}</span>
            <span className={`${classes["type-label"]} ${classes[typeLabel]}`}>
              {typeLabel}
            </span>
          </div>
        </div>
      </Card>
      <div className={classes["book-info"]}>
        <div className={classes["book-name"]}><h3>{bookName}</h3></div>
        <div className={classes["last-chapter"]}><a href={`/view-chapter/${props.id}/${lastChapter}`}>Chapter {lastChapter}</a></div>
      </div>
    </div>
  );
}

export default ComicItem;
