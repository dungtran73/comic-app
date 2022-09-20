import classes from "./UserInfo.module.css";
import {useContext} from 'react';
import AppContext from '../../store/app-context';

function UserInfo() {
  const appCtx = useContext(AppContext);

  return (
    <div className={classes.right}>
      {appCtx.userLoginId !== null ? (
          <button className={classes["user-avatar"]}>
            <img src="https://yt3.ggpht.com/yti/AJo0G0nxL3ciNV21-NhQByzT2pAS00FRZwNZg-Ss-g=s48-c-k-c0x00ffffff-no-rj" />
          </button>
      ) : (
        <ul>
          <li>
            <button>Đăng ký</button>
          </li>
          <li>
            <button>Đăng nhập</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserInfo;
