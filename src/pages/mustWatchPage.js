import React, { useContext } from "react";
import PageTemplate from "../components/movies/templateMovieListPage";
import { CustomContext } from "../contexts/customContext";
import { useQueries } from "react-query";
import { getItem } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch";
import WriteReview from "../components/cardIcons/writeReview";

const MustWatchPage = () => {
  const {mustwatch: movieIds } = useContext(CustomContext);

  // Create an array of queries and run in parallel.
  const mustWatchMovieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: ["movie", { id: movieId }, "movie"],
        queryFn: getItem,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = mustWatchMovieQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const movies = mustWatchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatchIcon movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default MustWatchPage;