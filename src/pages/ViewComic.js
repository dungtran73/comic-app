import { useParams } from "react-router-dom";
import ComicDetail from "../components/comics/ComicDetail";
import MainLayout from "../components/layouts/MainLayout";
import { useEffect, useState } from "react";

function ViewComic(props) {
  const { comicId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comicInfo, setComicInfo] = useState();

  useEffect(()=>{
    setIsLoading(true);
    let comic;
    fetch(
      'https://comic-app-4d9e8-default-rtdb.asia-southeast1.firebasedatabase.app/comics.json'
    ).then((res)=>{
      return res.json();
    }).then((data)=>{
      for (const key in data){
        console.log(data[key]);
        if (data[key].id === comicId) {
          comic = {
            author: data[key].author,
            title: data[key].title,
            thumbnail: data[key].thumbnail,
            status: data[key].status === "0" ? "Đang cập nhật" : "Đã hoàn thành",
            comicId: comicId,
            description: data[key].description,
            listChapter: [
              {
                id: "1099",
                chapterName: "Chapter 1099",
              },
              {
                id: "1098",
                chapterName: "Chapter 1098",
              },
            ],
          };

          break;
        }
      }

      setIsLoading(false);
      console.log(comic);
      setComicInfo(comic);
    });

  }, []);

  return (
    <MainLayout>
      { isLoading == false &&<ComicDetail info={comicInfo} /> }
    </MainLayout>
  );
}

export default ViewComic;
