import React from "react";
import TvShowHeader from "../headerTvShows";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { getImages } from "../../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  imageList: {
    width: 450,
    height: '100vh',
  },
}));

const TemplateTvShowPage = ({ tvshow, children }) => {
  const classes = useStyles();
  const { data , error, isLoading, isError } = useQuery(["tvShowImages", { id: tvshow.id }, "tv"], getImages);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const images = data.posters 

  return (
    <>
      <TvShowHeader tvshow={tvshow} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div className={classes.root}>
            <ImageList rowHeight={500} className={classes.imageList} cols={1}>
              {images.map((image) => (
                <ImageListItem key={image.file_path} className={classes.imageListItem} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.poster_path}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateTvShowPage;