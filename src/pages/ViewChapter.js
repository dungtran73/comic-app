import SectionHeader from "../components/layouts/SectionHeader";
import MainLayout from "../components/layouts/MainLayout";
import ChapterContent from "../components/layouts/ChapterContent";
function ViewChapter() {
  const dummy = [
    {
      pageOrder: 1,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_001_1663473017.jpg?data=3q",
    },
    {
      pageOrder: 2,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_002_1663473020.jpg?data=3q",
    },
    {
      pageOrder: 3,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_003_1663473022.jpg?data=3q",
    },
    {
      pageOrder: 4,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_004_1663473024.jpg?data=3q",
    },
    {
      pageOrder: 5,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_005_1663473026.jpg?data=3q",
    },
    {
      pageOrder: 6,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_006_1663473028.jpg?data=3q",
    },
    {
      pageOrder: 7,
      image:
        "https://storage.anhvip.xyz/image_comics/442/624225/img_007_1663473030.jpg?data=3q",
    },
  ];
  return (
    <MainLayout>
      <ChapterContent chapters={dummy} title='One Piece' chapterNumber="1077" />
    </MainLayout>
  );
}

export default ViewChapter;
