import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FavouritesPage from './pages/FavouritesPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import RepoPage from './pages/RepoPage';
import NotFoundPage from './pages/NotFoundPage';



function App() {
  return (
    <div className='bg-blue-700 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fav" element={<FavouritesPage />} />
        <Route path='/repo/:id' element={<RepoPage />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}
export default App;
