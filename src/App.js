import Home from "./pages/Home";
import History from "./pages/History";
import Layout from "./components/layouts/Layout";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import AddComic from "./pages/AddComic";
import ViewChapter from "./pages/ViewChapter";
import ViewComic from "./pages/ViewComic";
import AddChapter from "./pages/AddChapter";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-comic" element={<AddComic />} />
        <Route path="/view-chapter/:chapterId/:chapterNumber" element={<ViewChapter />} />
        <Route path="/view-comic/:comicId" element={<ViewComic />} />
        <Route path="/add-chapter/:comicId" element={<AddChapter /> } />
      </Routes>
    </Layout>
  );
}

export default App;
