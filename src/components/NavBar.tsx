import React from "react";
import NavItem from "./NavItem";
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-indigo-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <NavLink className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" to="/"> Corpus Opnus</NavLink>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span className="block relative w-6 h-px rounded-sm bg-white "></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div className="lg:flex flex-grow items-center">
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <NavItem path="/" title="Todays Workout" />
            <NavItem path="/Exercises" title="Discover Exercises" />
            <NavItem path="/Weight" title="Weight Tracker" />
            <NavItem path="/Progress" title="View Your Progress" />
            <NavItem path="/Editor" title="View and Edit Your Workout Plan" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
