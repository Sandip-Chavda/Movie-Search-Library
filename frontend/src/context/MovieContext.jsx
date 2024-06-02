// import React, { createContext, useState } from "react";

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [searchResults, setSearchResults] = useState([]);

//   const searchMovies = async (query) => {
//     try {
//       const response = await fetch(
//         `http://www.omdbapi.com/?s=${query}&apikey=24643934`
//       );
//       const data = await response.json();
//       if (data.Search) {
//         setSearchResults(data.Search);
//         console.log("Search Results:", data.Search); // Log the search results
//       } else {
//         setSearchResults([]);
//         console.log("No results found");
//       }
//     } catch (error) {
//       console.error("Error fetching data from OMDB API:", error);
//       setSearchResults([]);
//     }
//   };

//   return (
//     <MovieContext.Provider value={{ searchResults, searchMovies }}>
//       {children}
//     </MovieContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${query}&apikey=24643934`
      );
      const data = await response.json();
      if (data.Search) {
        setSearchResults(data.Search);
        console.log("Search Results:", data.Search); // Log the search results
      } else {
        setSearchResults([]);
        console.log("No results found");
      }
    } catch (error) {
      console.error("Error fetching data from OMDB API:", error);
      setSearchResults([]);
    }
  };

  const addToList = async (movieId, userId, listType) => {
    try {
      await axios.post("/api/movies/add", { movieId, userId, listType });
      // Optionally update the state to reflect the changes
    } catch (error) {
      console.error("Failed to add movie to list", error);
    }
  };

  const fetchMoviesFromList = async (userId, listType) => {
    try {
      const response = await axios.get(`/api/movies/list/${listType}`, {
        params: { userId },
      });
      setMovies(response.data);
    } catch (error) {
      console.error("Failed to fetch movies from list", error);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        searchResults,
        searchMovies,
        movies,
        addToList,
        fetchMoviesFromList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
