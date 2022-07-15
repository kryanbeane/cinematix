import React from "react";
import Grid from "@material-ui/core/Grid";
import ActorHeader from "../headerActor";

const TemplateActorPage = ({ actor, children }) => {

    return (
        <>
            <ActorHeader actor={actor} />
            <Grid container spacing={5} style={{ padding: "15px" }}>
                {children}
            </Grid>
        </>
    );
};

export default TemplateActorPage;