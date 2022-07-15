import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../../images/film-poster-placeholder.png';
import { CustomContext } from "../../../contexts/customContext";
import TvShowCardAccordian from "../tvShowCardAccordian";

const useStyles = makeStyles({
    card: {maxWidth: 345},
    media: {height: 500},
});

export default function TvShowCard({ tvshow, action }) {
    const classes = useStyles();
    const { favorites } = useContext(CustomContext);
    tvshow.favorite = !!favorites.find((id) => id === tvshow.id);

  return (
      <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    tvshow.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${tvshow.poster_path}`
                    : img
                }
            />
          <TvShowCardAccordian tvshow={tvshow} action={action}/>
      </Card>
  );
}