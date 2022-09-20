import classes from './ComicChapter.module.css';

function ComicChapter(props) {
    
    return (
        <div id={props.pageOrder} className={classes["page-chapter"]}>
            <img src={props.image} />
        </div>
    );
}

export default ComicChapter;