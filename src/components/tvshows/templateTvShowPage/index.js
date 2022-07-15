import React from "react";
import TvShowHeader from "../headerTvShows";
import Grid from "@material-ui/core/Grid";

const TemplateTvShowPage = ({ tvshow, children }) => {

  return (
    <>
      <TvShowHeader tvshow={tvshow} />
      <Grid container spacing={5} style={{ padding: "15px" }}>
          {children}
      </Grid>
    </>
  );
};

export default TemplateTvShowPage;