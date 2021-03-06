export const API_URL="https://api.themoviedb.org/3";
export const API_KEY=process.env.REACT_APP_TMDB_KEY;

export const getMovies = async (args) => {
  const [, page] = args.queryKey;
  return fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
     throw error
  });
};

export const getMovie = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
 });
};

export const getTvShows = async (args) => {
  const [, page] = args.queryKey;
  return fetch(
      `${API_URL}/discover/tv?api_key=${API_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getTvShow = async (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `${API_URL}/tv/${id}?api_key=${API_KEY}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getActors = async (args) => {
  const [, page] = args.queryKey;
  return fetch(
      `${API_URL}/person/popular?api_key=${API_KEY}&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().response);
    }
    return response.json();
  }).catch((error) => {
    throw error
  });
};

export const getActor = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
      `${API_URL}/person/${id}?api_key=${API_KEY}`
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

export const getMovieGenres = async () => {
  return fetch(
    `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  }).catch((error) => {
    throw error
 });
};

export const getTvShowGenres = async () => {
  return fetch(
      `${API_URL}/genre/tv/list?api_key=${API_KEY}&language=en-US`
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
  };

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

export const getUpcomingMovies = async (args) => {
  const [, page] = args.queryKey;
  return fetch(
    `${API_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&include_adult=false&page=${page}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    }).catch((error) => {
      throw error
    });
};