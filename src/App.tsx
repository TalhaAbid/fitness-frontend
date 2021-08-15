import React from "react";


///////////////////////////////////////////////////////////////////////////////
//                             Component Imports                             //
///////////////////////////////////////////////////////////////////////////////

import Login from "./components/Login";
import Exercises from "./components/Exercises";
import { Weight } from "./components/Weight";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar";
import TodaysWorkout from "./components/TodaysWorkout";
import { Progress } from "./components/Progress";
import WorkoutEditor from './components/WorkoutEditor'

///////////////////////////////////////////////////////////////////////////////
//                              State Managment                              //
///////////////////////////////////////////////////////////////////////////////


import create from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string | null;
  setToken: (tok: string, rememberPassword: boolean) => void;
};

const useStore = create<State>(
  persist(
    (set) => ({
      token: null,
      setToken: (tok: string, rememberPassword: boolean) => {
        set({ token: tok });
        if (!rememberPassword) {
          window.localStorage.clear();
        }
      },
    }),
    {
      name: "login-token",
    }
  )
);

function App() {
  const { token, setToken } = useStore((state) => state);
  if (token === null) {
    return <Login setToken={setToken} />;
  }

  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/Progress">
          <Progress />
        </Route>
        <Route path="/Editor">
          <WorkoutEditor />
        </Route>
        <Route path="/Exercises">
          <Exercises />
        </Route>
        <Route path="/Weight">
          <Weight />
        </Route>
        <Route path="/">
          <TodaysWorkout />
        </Route>
      </Switch>
    </>
  );
}

export default App;
