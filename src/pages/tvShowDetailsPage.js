import React from "react";
import TvShowDetails from "../components/tvshows/tvShowDetails";
import PageTemplate from "../components/tvshows/templateTvShowPage";
import {getItem} from '../api/tmdb-api';
import { useQuery } from "react-query";
import Spinner from '../components/spinner';
import { withRouter } from "react-router-dom";

const TvShowDetailsPage = (props) => {
    const { id } = props.match.params
    const { data: tvshow, error, isLoading, isError } = useQuery(["show", { id: id }, "tv"], getItem);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {tvshow ? (
                <>
                    <PageTemplate tvshow={tvshow}>
                        <TvShowDetails tvshow={tvshow} />
                    </PageTemplate>
                </>
            ) : (
                <p>Waiting for show details</p>
            )}
        </>
    );
};

export default withRouter(TvShowDetailsPage);
