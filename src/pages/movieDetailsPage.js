import React from "react";
import MovieDetails from "../components/movies/movieDetails";
import PageTemplate from "../components/movies/templateMoviePage";
import { getItem } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

const MovieDetailsPage = (props) => {
  const { id } = props.match.params

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }, "movie"],
      getItem
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MovieDetailsPage);
