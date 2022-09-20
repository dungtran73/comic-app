import './ComicDetail.css';

function ComicDetail(props) {
    
    return (
        <div className='main-content'>
            <div className='comic-detail'>
                <div className='comic-info'>
                    <div className='thumbnail'>
                        <img src={props.info.thumbnail} />
                    </div>
                    <div className='comic-other'>
                        <h1 className='comic-title'>{props.info.title}</h1>
                        <div>
                            <ul className='list-info'>
                                <li><i className='fa fa-user'></i>&nbsp;<p>Tác giả</p>{props.info.author}</li>
                                <li><i className='fa fa-rss'></i>&nbsp;<p>Tình trạng</p>{props.info.status}</li>
                                <li><a className='btn' href={`/add-chapter/${props.info.comicId}`}><i className='fa fa-plus'></i> Thêm chapter</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='clear'></div>
                <h3>
                    <i className='fa fa-info-circle'></i> Giới thiệu
                </h3>
                <div className='description'>
                    <p>{props.info.description}</p>
                </div>
                <div className='clear'></div>
                <h3>
                    <i className='fa fa-database'></i> Danh sách chương
                </h3>
                <div className='list-chapter'>
                    <div className='works-chapter-list'>
                        {props.info.listChapter.map((chap)=>(
                            <div className='chapter-item' key={chap.id}>
                                <div className='name-chap'>
                                    <a href={`/view-chapter/${props.info.comicId}/${chap.id}`}>{chap.chapterName}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComicDetail;