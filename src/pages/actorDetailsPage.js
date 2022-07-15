import React from "react";
import ActorDetails from "../components/actors/actorDetails";
import PageTemplate from "../components/actors/templateActorPage";
import { getItem } from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

const ActorDetailsPage  = (props) => {
    const { id } = props.match.params
    const { data: actor, error, isLoading, isError } = useQuery(["actor", { id: id }, "person"], getItem);

    if (isLoading) return <Spinner />;
    if (isError) return <h1>{error.message}</h1>;

    return (
        <>
            {actor ? (
                <>
                    <PageTemplate actor={actor}>
                        <ActorDetails actor={actor} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default withRouter(ActorDetailsPage);
