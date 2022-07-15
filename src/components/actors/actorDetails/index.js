import React from "react";
import {Grid, Chip, Typography, makeStyles, Paper} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import img from "../../../images/actor-poster-placeholder.jpg";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from '@mui-treasury/components/content/textInfo';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: theme.spacing(1.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    boldText: {
        fontWeight: "bold"
    },
    summary: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
}));

const ActorDetails = ({ actor }) => {
    const classes = useStyles();
    return (
        <>
            <Grid item xs={3}>
                <div className={classes.summary}>
                    <Card>
                        <CardMedia>
                            <img
                                width={"100%"}
                                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                                alt={img}
                            />
                        </CardMedia>
                        <CardContent>
                            <TextInfoContent
                                heading={"Known For"}
                                body={actor.known_for_department}
                            />
                            <TextInfoContent
                                heading={"Gender"}
                                body={
                                    actor.gender === 1 ? "Female"
                                        : actor.gender === 2 ? "Male"
                                            : "Other"
                                }
                            />
                            <TextInfoContent
                                heading={"Birthdate"}
                                body={actor.birthday}
                            />
                            <TextInfoContent
                                heading={"Place of Birth"}
                                body={actor.place_of_birth}
                            />
                            <TextInfoContent
                                heading={"Also Known As"}
                                body={actor.also_known_as.map((item) => item).join(', ')}
                            />
                        </CardContent>
                    </Card>
                </div>
            </Grid>

            <Grid item xs={9}>
                <Typography variant="h5" component="h3" className={classes.boldText}>
                    Biography
                </Typography>
                <br/>
                <Typography variant="h6" component="p">
                    {actor.biography}
                </Typography>
                <br/>
                <Typography variant="h5" component="h3" className={classes.boldText}>
                    Movie Credits
                </Typography>

                <Paper component="ul" className={classes.root}>
                    <li>
                        <Chip label="TODO" className={classes.chip} color="primary" />
                    </li>
                </Paper>
            </Grid>
        </>
    );
};

export default ActorDetails;