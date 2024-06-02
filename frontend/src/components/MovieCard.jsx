// import React, { useContext } from "react";

// import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
// import { MovieContext } from "../context/MovieContext";
// import { AuthContext } from "../context/AuthContext";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Button } from "./ui/button";

// const MovieCard = ({ movie }) => {
//   const { user } = useContext(AuthContext);
//   const { addToList } = useContext(MovieContext);

//   const handleAddToList = (listType) => {
//     addToList(movie._id, user._id, listType);
//   };

//   return (
//     <Drawer className="min-h-[50%]">
//       <div className=" w-60 moviecardglassmorph border shadow-sm shadow-white rounded-xl duration-500 hover:scale-105  hover:shadow-md hover:shadow-white">
//         <DrawerTrigger>
//           <img
//             src={movie.Poster}
//             alt="Product"
//             className="h-48 w-60 object-fill rounded-t-xl"
//           />
//         </DrawerTrigger>
//         <DrawerContent className="moviedrawermorph sm:h-[50%] md:h-auto">
//           {/* <DrawerClose className="text-white">close</DrawerClose> */}
//           <div className="flex px-10 py-5 text-white">
//             <div className="w-[50%] md:w-[40%] md:pl-16">
//               <img
//                 src={movie.Poster}
//                 className="w-[150px] object-fill md:w-[350px] rounded-lg"
//               />
//             </div>
//             <div className="flex md:mt-4 md:-ml-14 flex-col w-[50%] md:w-[60%]">
//               <div className=" text-2xl  font-extrabold md:text-5xl">
//                 {movie.Title}
//               </div>
//               <div className="hidden md:flex text-lg mt-7 text-gray-400/90">
//                 In a captivating tale of human experience, audiences are
//                 transported into a world of emotion, intrigue, and adventure. As
//                 the story unfolds, viewers are immersed in a rich tapestry of
//                 characters, each with their own dreams, struggles, and triumphs.
//                 With stunning visuals and a powerful soundtrack, this cinematic
//                 journey transcends boundaries, leaving a lasting impact on
//                 hearts and minds alike.Fantastic movie to watch in your free
//                 time {movie.Title}.
//               </div>
//               <div className="text-base md:hidden mt-2 text-gray-400/90">
//                 Enter a captivating world where dreams collide with reality in a
//                 mesmerizing tale of human experience.. Fantastic movie to watch
//                 in your free time {movie.Title}.
//               </div>

//               <div className="flex mt-7 items-center gap-3">
//                 <p className="md:text-xl text-sm font-medium text-gray-300/85">
//                   Year of Movie Release :-
//                 </p>
//                 <p className="md:text-2xl text-base font-bold">
//                   {movie.Year} 📅
//                 </p>
//               </div>
//               <div className="flex gap-3 items-center mt-7">
//                 <p className="text-xl hidden md:flex font-medium text-gray-300">
//                   Cinematic Type of Video :-
//                 </p>

//                 <p className="text-2xl font-bold md:flex hidden">
//                   {movie.Type} 🎞️
//                 </p>

//                 <p className="text-sm md:hidden font-medium text-gray-300">
//                   Cinematic :-
//                 </p>

//                 <p className="text-base font-bold md:hidden">{movie.Type} 🎞️</p>
//               </div>
//             </div>
//           </div>
//         </DrawerContent>
//         <div className="px-4 py-3 w-60">
//           <span className="text-gray-200 mr-3 uppercase text-xs">
//             {movie.Year}
//           </span>
//           <p className="text-lg font-bold text-white truncate block capitalize">
//             {movie.Title}
//           </p>
//           <p className="text-xs mt-1 text-gray-300 truncate block capitalize">
//             {movie.Plot}
//           </p>
//           {/* <div className="two-line-truncate">
//           <p className="text-xs mt-1 text-gray-700 truncate block capitalize">
//             Tidsdskslksdlskdslkdslksldtleasjdksdjksdjkdjdsjdksdjksdjkjdksjdksjdkdjskdjskds
//           </p>
//         </div> */}

//           <div className="flex items-center">
//             <div className="flex items-center">
//               <p className="text-lg font-semibold text-white cursor-auto my-3">
//                 5
//               </p>

//               <p className="text-sm text-gray-600 cursor-auto ml-2">⭐</p>
//             </div>
//             <div className="ml-auto text-gray-300">{movie.Type}</div>
//           </div>
//           <Dialog>
//             <DialogTrigger className="">
//               <div className="flex text-white items-center  justify-center">
//                 <button className="css-button-gradient--4">Add to List</button>
//               </div>
//             </DialogTrigger>
//             <DialogContent className="moviedrawermorph text-red-500 text-xl">
//               <DialogHeader>
//                 <DialogTitle className="text-xl text-white text-center">
//                   Where to Save
//                 </DialogTitle>
//               </DialogHeader>
//               <DialogDescription className="text-gray-400 -mt-2 mb-4">
//                 Save the movies & series searches where ever you want. Make
//                 private and public lists.
//               </DialogDescription>
//               <div className="flex items-center justify-center gap-10">
//                 <Button
//                   onClick={() => handleAddToList("private")}
//                   className="css-button-sliding-to-left--sky"
//                 >
//                   Private List
//                 </Button>
//                 <Button
//                   onClick={() => handleAddToList("public")}
//                   className="css-button-sliding-to-left--green"
//                 >
//                   Public List
//                 </Button>
//               </div>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>
//     </Drawer>
//   );
// };

// export default MovieCard;

import React, { useContext } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MovieContext } from "../context/MovieContext";
import { AuthContext } from "../context/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

const MovieCard = ({ movie }) => {
  const { user } = useContext(AuthContext);
  const { addToList } = useContext(MovieContext);

  console.log("Movie object:", movie);
  console.log("User object:", user);

  const handleAddToList = (listType) => {
    if (!movie || !movie._id || !user || !user._id) {
      console.error("Movie ID or User ID is missing", { movie, user });
      return;
    }
    addToList(movie._id, user._id, listType);
  };

  return (
    <Drawer className="min-h-[50%]">
      <div className="w-60 moviecardglassmorph border shadow-sm shadow-white rounded-xl duration-500 hover:scale-105 hover:shadow-md hover:shadow-white">
        <DrawerTrigger>
          <img
            src={movie.Poster}
            alt="Product"
            className="h-48 w-60 object-cover rounded-t-xl"
          />
        </DrawerTrigger>
        <DrawerContent className="moviedrawermorph sm:h-[50%] md:h-auto">
          <div className="flex px-10 py-5 text-white">
            <div className="w-[50%] md:w-[40%] md:pl-16">
              <img
                src={movie.Poster}
                className="w-[150px] object-fill md:w-[350px] rounded-lg"
              />
            </div>
            <div className="flex md:mt-4 md:-ml-14 flex-col w-[50%] md:w-[60%]">
              <div className="text-2xl font-extrabold md:text-5xl">
                {movie.Title}
              </div>
              <div className="hidden md:flex text-lg mt-7 text-gray-400/90">
                In a captivating tale of human experience, audiences are
                transported into a world of emotion, intrigue, and adventure. As
                the story unfolds, viewers are immersed in a rich tapestry of
                characters, each with their own dreams, struggles, and triumphs.
                With stunning visuals and a powerful soundtrack, this cinematic
                journey transcends boundaries, leaving a lasting impact on
                hearts and minds alike. Fantastic movie to watch in your free
                time {movie.Title}.
              </div>
              <div className="text-base md:hidden mt-2 text-gray-400/90">
                Enter a captivating world where dreams collide with reality in a
                mesmerizing tale of human experience. Fantastic movie to watch
                in your free time {movie.Title}.
              </div>
              <div className="flex mt-7 items-center gap-3">
                <p className="md:text-xl text-sm font-medium text-gray-300/85">
                  Year of Movie Release:
                </p>
                <p className="md:text-2xl text-base font-bold">
                  {movie.Year} 📅
                </p>
              </div>
              <div className="flex gap-3 items-center mt-7">
                <p className="text-xl hidden md:flex font-medium text-gray-300">
                  Cinematic Type of Video:
                </p>
                <p className="text-2xl font-bold md:flex hidden">
                  {movie.Type} 🎞️
                </p>
                <p className="text-sm md:hidden font-medium text-gray-300">
                  Cinematic:
                </p>
                <p className="text-base font-bold md:hidden">{movie.Type} 🎞️</p>
              </div>
            </div>
          </div>
        </DrawerContent>
        <div className="px-4 py-3 w-60">
          <span className="text-gray-200 mr-3 uppercase text-xs">
            {movie.Year}
          </span>
          <p className="text-lg font-bold text-white truncate block capitalize">
            {movie.Title}
          </p>
          <p className="text-xs mt-1 text-gray-300 truncate block capitalize">
            {movie.Plot}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <p className="text-lg font-semibold text-white cursor-auto my-3">
                5
              </p>
              <p className="text-sm text-gray-600 cursor-auto ml-2">⭐</p>
            </div>
            <div className="ml-auto text-gray-300">{movie.Type}</div>
          </div>
          <Dialog>
            <DialogTrigger>
              <div className="flex text-white items-center justify-center">
                <button className="css-button-gradient--4">Add to List</button>
              </div>
            </DialogTrigger>
            <DialogContent className="moviedrawermorph text-red-500 text-xl">
              <DialogHeader>
                <DialogTitle className="text-xl text-white text-center">
                  Where to Save
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-gray-400 -mt-2 mb-4">
                Save the movies & series searches wherever you want. Make
                private and public lists.
              </DialogDescription>
              <div className="flex items-center justify-center gap-10">
                <Button
                  onClick={() => handleAddToList("private")}
                  className="css-button-sliding-to-left--sky"
                >
                  Private List
                </Button>
                <Button
                  onClick={() => handleAddToList("public")}
                  className="css-button-sliding-to-left--green"
                >
                  Public List
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Drawer>
  );
};

export default MovieCard;
