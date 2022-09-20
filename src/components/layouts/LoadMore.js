import { useEffect, useState } from "react";
import classes from "./LoadMore.module.css";

function LoadMore(props) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setIsLoading(props.isLoading);
  }, [props.isLoading]);

  return (
    <div className={classes["home-load-more"]}>
      {isLoading ? (
        <a><i className={`fa ${classes["fa-spin"]} fa-spinner-third`}></i></a>
      ) : (
        <a>Xem thêm</a>
      )}
    </div>
  );
}

export default LoadMore;
