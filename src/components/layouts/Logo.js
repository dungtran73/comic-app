import classes from './Logo.module.css';
import logoImage from '../../assets/logo.png';

function Logo() {
    
    return (
        <div className={classes.logo}>
            <img src = {logoImage} alt="comic app"/>
            <p className={classes["web-name"]}>COMIC APP</p>
        </div>
    );
}

export default Logo;