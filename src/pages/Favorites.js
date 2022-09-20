import SectionHeader from "../components/layouts/SectionHeader";
import ComicList from "../components/comics/ComicList";
import MainLayout from "../components/layouts/MainLayout";
function Favorites() {
  const DUMMY_DATA = [
    {
      id: "1",
      bookAvatar:
        "https://static.wikia.nocookie.net/dragonball/images/3/3c/Viz_dbs_vol1_cover.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "Chapter 45",
    },
    {
      id: "2",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/17/841d20ef4f8e509b_fcae1587f533604b_2761816607499556185710.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Dragon Ball Z: Saiyan Saga",
      lastChapter: "Chapter 45",
    },
    {
      id: "3",
      bookAvatar:
        "https://s199.imacdn.com/vg/2022/08/15/689de14d05d85248_788dc7e223abc2ad_36261166054432669674.jpg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Tenshi To Akuto",
      lastChapter: "Chapter 45",
    },
    
  ];

  return (
    <MainLayout>
    <SectionHeader classTitle="text-list-history" classIcon="fa fa-heart" sectionTitle = "Truyện Đang Theo Dõi "/>
    <ComicList comics={DUMMY_DATA} />
    </MainLayout>
  );
}

export default Favorites;
