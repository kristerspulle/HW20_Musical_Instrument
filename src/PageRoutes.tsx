import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { MusicPage } from './pages/MusicPage/MusicPage';

export const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </Router>
  );
};
