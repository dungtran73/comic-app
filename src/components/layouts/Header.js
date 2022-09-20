import classes from './Header.module.css';
import Logo from './Logo';
import UserInfo from './UserInfo';
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import AppContext from '../../store/app-context';
function Header(props) {
    const appCtx = useContext(AppContext);
    const [isAdmin,setIsAdmin] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <header>
            <div className={classes.top}>
                <div className={classes["div-mid"]}>
                    <Logo />
                    <button className={classes["dark-mode"]}>
                        <i className={`fa ${classes["fa-lightbulb-o"]}`}></i>
                    </button>
                    <div className={classes["top-search"]}>
                        <input type="text" className={classes["input"]} placeholder="Tìm truyện..."/>
                        <button>
                            <i className={`fa fa-search`}></i>
                        </button>
                    </div>
                    <UserInfo />
                </div>
            </div>
            <div className={classes.bottom}>
            <div className={classes["div-mid"]}>
                <nav>
                <ul>
                    <li><Link to='/' className={classes["tags-name"]}>Trang Chủ</Link></li>
                    <li><Link to='/history' className={classes["tags-name"]}>Lịch Sử</Link></li>
                    <li><Link to='/favorites' className={classes["tags-name"]}>Theo Dõi</Link></li>
                    {isAdmin && <li><Link to='/add-comic' className={classes["tags-name"]}>Thêm truyện</Link></li>}
                </ul>
                </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;