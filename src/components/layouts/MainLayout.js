import classes from "./MainLayout.module.css";

function MainLayout(props) {
  return <div className={classes["div-main"]}>{props.children}</div>;
}

export default MainLayout;
