import React from "react";
import TemplateDetails from "../components/templates/templateDetails";
import PageTemplate from "../components/templates/templatePage";
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
                    <PageTemplate obj={actor} type="person">
                        <TemplateDetails obj={actor} type="person" />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for actor details</p>
            )}
        </>
    );
};

export default withRouter(ActorDetailsPage);
