import ComicSuggested from "../components/comics/ComicSuggested";
import MainLayout from "../components/layouts/MainLayout";
import ComicListUpdate from "../components/comics/ComicListUpdate";
import LoadMore from "../components/layouts/LoadMore";
import React, { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedComics, setLoadedComics] = useState([]);
  const [isDisabledButton, setIsDisabledButton] = useState(false);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
      'https://comic-app-4d9e8-default-rtdb.asia-southeast1.firebasedatabase.app/comics.json'
    ).then((res)=>{
      return res.json();
    }).then((data)=>{
      const comics = [];
      for (const key in data){
        const comic = {
          id: data[key].id,
          bookAvatar: data[key].thumbnail,
          timeAgo: '10 Phút trước',
          typeLabel: 'hot',
          bookName: data[key].title,
          lastChapter: "1099"
        };
        comics.push(comic);
      }

      setIsLoading(false);
      setLoadedComics(comics);
    });

  }, []);
  const DUMMY_DATA = [
    {
      id: "1",
      bookAvatar:
        "https://static.wikia.nocookie.net/dragonball/images/3/3c/Viz_dbs_vol1_cover.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "2",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/17/841d20ef4f8e509b_fcae1587f533604b_2761816607499556185710.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Dragon Ball Z: Saiyan Saga",
      lastChapter: "45",
    },
    {
      id: "3",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/15/689de14d05d85248_788dc7e223abc2ad_36261166054432669674.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "4",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/15/c75776c3784aa565_7fadf4b2a47f96c3_34234166054454819674.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "5",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/15/3f96620414d26491_85f90979f73b955f_36767166054532519674.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "6",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/15/27812e8434b487f6_162a705cda195d8b_27869166054550839674.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "7",
      bookAvatar:
        "https://static.wikia.nocookie.net/dragonball/images/3/3c/Viz_dbs_vol1_cover.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "45",
    },
    {
      id: "8",
      bookAvatar:
        "https://static.wikia.nocookie.net/dragonball/images/3/3c/Viz_dbs_vol1_cover.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "Chapter 45",
    },
  ];

  return (
    <MainLayout>
      <ComicSuggested comics={DUMMY_DATA} />
      <ComicListUpdate comics={loadedComics} />
      <LoadMore isLoading={isDisabledButton} />
    </MainLayout>
  );
}

export default Home;
