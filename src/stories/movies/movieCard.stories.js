import React from "react";
import MovieCard from "../../components/movies/movieCard";
import SampleMovie from "./sampleMovieData";
import { MemoryRouter } from "react-router";
import CustomContextProvider from "../../contexts/customContext";
import { action } from "@storybook/addon-actions";
import AddToFavoritesIcon from "../../components/cardIcons/addToFavorites";

export default {
  title: "Movies/MovieCard",
  component: MovieCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <CustomContextProvider>{Story()}</CustomContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <MovieCard
      movie={SampleMovie}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleMovie, poster_path: undefined };
  return (
    <MovieCard
      movie={sampleNoPoster}
      action={(movie) => <AddToFavoritesIcon movie={movie} />}
      taging={(movie) => null}
    />
  );
};
Exceptional.storyName = "exception";
