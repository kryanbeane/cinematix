import React from "react";  // useState/useEffect redundant 
import MovieHeader from "../headerMovie";
import Grid from "@material-ui/core/Grid";

const TemplateMoviePage = ({ movie, children }) => {

  return (
    <>
      <MovieHeader movie={movie} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
          {children}
      </Grid>
    </>
  );
};

export default TemplateMoviePage;