import React from "react";
import PageTemplate from "../components/tvshows/templateTvShowListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {discover} from '../api/tmdb-api';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const DiscoverTvShowsPage = (props) => {
    const { data, error, isLoading, isError }  = useQuery(['discovertv', "tv"], discover)

    if (isLoading) return <Spinner />
    if (isError) return <h1>{error.message}</h1>
    const tvshows = data.results;

    const favorites = tvshows.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))

    return (
        <PageTemplate
            title="Discover TV Shows"
            tvshows={tvshows}
            action={(tvshow) => {
                return <AddToFavoritesIcon tvshow={tvshow} />
            }}
        />
    );
};

export default DiscoverTvShowsPage;