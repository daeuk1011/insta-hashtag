import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main";
import { FeedPage } from "./pages/feed";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />

      <Route path="feed" element={<FeedPage />} />
    </Routes>
  );
};
