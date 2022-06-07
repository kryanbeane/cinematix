import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes , Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';

const App = () => {
  return (
      <BrowserRouter>
        <SiteHeader />   
        <Routes>
          <Route exact path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="*" />} />
        </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));