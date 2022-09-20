import ComicDetail from "../components/comics/ComicDetail";
import MainLayout from "../components/layouts/MainLayout";

function ViewComic() {
  const dummy = {
    author: "Đang cập nhật",
    title: "Võ luyện đỉnh phong",
    status: "Đang cập nhật",
    comicId: "xxxxxxxxxx",
    description: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    listChapter: [
      {
        id: "123",
        chapterName: "Chapter 1",
      },
      {
        id: "124",
        chapterName: "Chapter 2",
      },
    ],
  };
  return (
    <MainLayout>
      <ComicDetail info={dummy}/>
    </MainLayout>
  );
}

export default ViewComic;
