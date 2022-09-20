import SectionHeader from "../components/layouts/SectionHeader";
import ComicList from "../components/comics/ComicList";
import MainLayout from "../components/layouts/MainLayout";
function Favorites() {
  const DUMMY_DATA = [
    {
      id: "68817b67-8e3f-4797-91cd-f5f24f0cf04a",
      bookAvatar:
        "https://images8.intercomics.club/vnstory/ea/08/ea085a50073fabac7339c403bea77ed1.jpeg",
      timeAgo: "4 Phút trước",
      typeLabel: "hot",
      bookName: "Conan",
      lastChapter: "1099",
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
