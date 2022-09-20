import ComicChapter from "../comics/ComicChapter";
import "./ChapterContent.css";

function NavBar(props) {
  return (
    <div className="nav-chapter-bar">
      <a className="prev nav-btn btn">
        <em className="fa fa-arrow-left"></em>&nbsp;Chap trước
      </a>
      <a className="prev nav-btn btn">
        Chap sau&nbsp;
        <em className="fa fa-arrow-right"></em>
      </a>
    </div>
  );
}
function ChapterContent(props) {
  return (
    <div className="div-mid">
      <div className="main-content">
        <div>
          <h1 className="detail-title">
            {props.title} - Chapter {props.chapterNumber}
          </h1>
        </div>
        <NavBar />
        <div className="chapter_content">
          {props.chapters.map((chapter) => (
            <ComicChapter
              key={chapter.pageOrder}
              pageOrder={chapter.pageOrder}
              image={chapter.image}
            />
          ))}
        </div>
        <NavBar />
      </div>
    </div>
  );
}

export default ChapterContent;
