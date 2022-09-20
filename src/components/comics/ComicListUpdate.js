import classes from './ComicListUpdate.module.css';
import ComicList from './ComicList';
import SectionHeader from '../layouts/SectionHeader';
function ComicListUpdate(props) {
    return (
        <div className={classes["home-update"]}>
        <SectionHeader classTitle="text-list-update" classIcon="fa fa-cloud-download" 
        sectionTitle="Truyện Mới Cập Nhật"/>
        <ComicList comics={props.comics} />
        </div>
    );
}

export default ComicListUpdate;