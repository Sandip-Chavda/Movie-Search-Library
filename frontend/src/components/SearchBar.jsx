import React, { useContext, useState, useEffect, useRef } from "react";
import { MdOutlineSavedSearch } from "react-icons/md";
import { MovieContext } from "../context/MovieContext"; // Adjust the import path as needed

const SearchBar = () => {
  const { searchMovies } = useContext(MovieContext);
  const [query, setQuery] = useState("");
  const debounceTimeout = useRef(null);
  const latestQuery = useRef(query); // Store the latest query to prevent unnecessary calls

  // Handle input change
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Use useEffect to call the search function with debounce
  useEffect(() => {
    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout
    debounceTimeout.current = setTimeout(() => {
      // Only call searchMovies if query is different and not empty
      if (query.trim() && latestQuery.current !== query) {
        latestQuery.current = query; // Update the latest query
        searchMovies(query);
      }
    }, 300);

    // Cleanup timeout if the component unmounts or query changes
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [query, searchMovies]);

  return (
    <div className="w-[150px] md:w-full md:max-w-md">
      <form className="" onSubmit={(e) => e.preventDefault()}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdOutlineSavedSearch className="text-gray-300" size={22} />
          </div>
          <input
            onChange={handleChange}
            value={query}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-50 border border-gray-300/35 rounded-lg bg-transparent placeholder:text-gray-300"
            placeholder="Search Movies | Ex-Avanger End Game"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
