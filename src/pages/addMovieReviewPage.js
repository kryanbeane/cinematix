import React from "react";
import PageTemplate from "../components/templates/templatePage";
import ReviewForm from "../components/reviewForm";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-query";
import { getItem } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const { movieId } = props.location.state;
  const { data: movie, error, isLoading, isError } = useQuery(["movie", { id: movieId }, "movie"], getItem);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate obj={movie} type="movie">
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default withRouter(WriteReviewPage);