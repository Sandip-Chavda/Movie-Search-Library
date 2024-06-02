import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "../context/MovieContext";

const MovieContent = () => {
  const { searchResults } = useContext(MovieContext);

  console.log(searchResults);
  return (
    // <div className="glassmorph min-h-screen ">
    //   <div className="">
    //     <MovieCard />
    //     <MovieCard />
    //     <MovieCard />
    //     <MovieCard />
    //   </div>
    // </div>

    <section
      id="Projects"
      className={
        searchResults?.length > 0
          ? " w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
          : "flex h-screen items-center justify-center"
      }
    >
      {searchResults?.length > 0 ? (
        searchResults.map((movie) => {
          return <MovieCard key={movie.imdbID} movie={movie} />;
        })
      ) : (
        <div className="-mt-60">
          <h1 className="text-center text-white text-4xl font-bold mt-7">
            Wait For Search Movies
          </h1>
          <div className="mt-10">
            <img
              className="w-[550px]"
              src="./movieback.svg"
              alt="smaple image"
            />
          </div>
        </div>
      )}
      {/* <MovieCard /> */}
    </section>
  );
};

export default MovieContent;
