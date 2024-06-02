import React from "react";
import useLogout from "../hooks/useLogout";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  const { loading, logout } = useLogout();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await logout();
  };

  const navlinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/public-list",
      title: "Public List",
    },
    {
      href: "/private-list",
      title: "Private List",
    },
  ];

  return (
    <div className="glassmorph text-white py-3 px-6 flex items-center justify-between mb-5">
      <Link to={"/"} className="flex items-center gap-2">
        <img className="md:w-16 w-14" src="./logo.svg" alt="logo" />
        <p className="text-2xl hidden md:flex font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
          Movie Search
        </p>
      </Link>

      <SearchBar />

      <div className="flex gap-10">
        <Sheet>
          <SheetTrigger>
            <Button className="md:hidden -mr-10">
              <LuMenu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent className="moviedrawermorph text-white">
            <SheetHeader>
              <p className="text-2xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
                Movie Search
              </p>
            </SheetHeader>
            <div className="mt-8 space-y-7">
              {navlinks.map((navlink, i) => {
                return (
                  <Link className="flex" key={i} to={navlink.href}>
                    {navlink.title}
                  </Link>
                );
              })}
              <div>
                <button onClick={handleSubmit} className="">
                  Logout
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {navlinks.map((navlink, i) => {
          return (
            <Link className="hidden md:flex" key={i} to={navlink.href}>
              {navlink.title}
            </Link>
          );
        })}

        <div>
          <button onClick={handleSubmit} className="text-white hidden md:flex">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
