import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from '../../../images/film-poster-placeholder.png';
import { CustomContext } from "../../../contexts/customContext";
import TemplateCardAccordian from "../templateCardAccordian";

const useStyles = makeStyles({
    card: {maxWidth: 345},
    media: {height: 500},
});


export default function TvShowCard({ obj, action, type }) {
    const classes = useStyles();
    const { favorites } = useContext(CustomContext);
    const isPerson = type === "person";

    if (!isPerson) {
        obj.favorite = !!favorites.find((id) => id === obj.id);
    }

    obj.posterPath = function (type) {
        if(type === 'person') {
            return 'profile_path';
        }
        return 'poster_path';
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={
                    obj.posterPath(type)
                        ? `https://image.tmdb.org/t/p/w500/${obj.posterPath(type)}`
                        : img
                }
            />
            <TemplateCardAccordian obj={obj} action={action}/>
        </Card>
    );
}