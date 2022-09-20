import classes from "./ComicSuggested.module.css";
import Slider from "react-styled-carousel";
import ComicItem from "./ComicItem";
import React from "react";
import SectionHeader from "../layouts/SectionHeader";

function DotWrapper() {
  return <React.Fragment></React.Fragment>;
}

function LeftArrow() {
  return (
    <div className={`${classes["button-arrow"]} ${classes["left"]}`}>
      <i className="fa fa-angle-left"></i>
    </div>
  );
}

function RightArrow() {
  return (
    <div className={`${classes["button-arrow"]} ${classes["right"]}`}>
      <i className="fa fa-angle-right"></i>
    </div>
  );
}

function ComicSuggested(props) {
  const responsive = [
    { breakPoint: 1700, cardsToShow: 7 },
    { breakPoint: 1000, cardsToShow: 6 },
    { breakPoint: 760, cardsToShow: 4 },
  ];
  const comics = props.comics.map((comic) => (
    <ComicItem
      key={comic.id}
      id={comic.id}
      bookAvatar={comic.bookAvatar}
      timeAgo={comic.timeAgo}
      typeLabel={comic.typeLabel}
      bookName={comic.bookName}
      lastChapter={comic.lastChapter}
    />
  ));
  return (
    <div className={classes["home-suggest"]}>
      <SectionHeader classTitle="text-list-hot" classIcon="fa fa-star" sectionTitle="Truyện hay "/>
      <Slider
        responsive={responsive}
        DotsWrapper={DotWrapper}
        RightArrow={<RightArrow/>}
        LeftArrow={<LeftArrow/>}
        padding="0px"
      >
        {comics}
      </Slider>
    </div>
  );
}

export default ComicSuggested;
