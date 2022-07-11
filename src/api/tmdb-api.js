export const API_URL="https://api.themoviedb.org/3";
export const API_KEY=process.env.REACT_APP_TMDB_KEY;

export const discover = async ({ queryKey }) => {
  const [, type] = queryKey;
  return fetch(
    `${API_URL}/discover/${type}?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getActors = async () => {
  return fetch(
      `${API_URL}/person/popular?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().response);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getItem = async ({ queryKey }) => {
  const [, idPart, type] = queryKey;
  const { id } = idPart;
  return fetch(
      `${API_URL}/${type}/${id}?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getMovieCredits = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `${API_URL}/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getGenres = async ({ queryKey }) => {
  const [, type] = queryKey;
  return fetch(
    `${API_URL}/genre/${type}/list?api_key=${API_KEY}&language=en-US`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
 });
};

export const getImages = async ({ queryKey }) => {
  const [, idPart, type] = queryKey;
  const { id } = idPart;
  return fetch(
    `${API_URL}/${type}/${id}/images?api_key=${API_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
 });
};

export const getMovieReviews = async (id) => {
  return fetch(
      `${API_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
}

export const getTvShowReviews = async (id) => {
  return fetch(
      `${API_URL}/tv/${id}/reviews?api_key=${API_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getUpcomingMovies = async () => {
  return fetch(
    `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&include_adult=false&page=1`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    }).catch((error) => {
      throw error
    });
};