import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/Allmeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorite";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <div>
      <MainNav />
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />

        <Route path="/new" element={<NewMeetupsPage />} />

        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
