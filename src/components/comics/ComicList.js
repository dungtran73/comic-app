import ComicItem from "./ComicItem";
import classes from "./ComicList.module.css";

function ComicList(props) {

  return (
    <ul className={classes["list-comic"]}>
      {props.comics.map((comic) => (
        <li key={comic.id}><ComicItem
          key={comic.id}
          id={comic.id}
          bookAvatar={comic.bookAvatar}
          timeAgo={comic.timeAgo}
          typeLabel={comic.typeLabel}
          bookName={comic.bookName}
          lastChapter={comic.lastChapter}
        /></li>
      ))}
    </ul>
  );
}

export default ComicList;
