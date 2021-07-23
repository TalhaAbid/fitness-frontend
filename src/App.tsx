import React from 'react';
import Login from './components/Login'
import Exercises from './components/Exercises'
import Weight from './components/Weight'
import { Route, Switch } from 'react-router-dom'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import Navbar from './components/NavBar'
import TodaysWorkot from './components/TodaysWorkout'
import './App.css';

type State = {
	token: string | null;
	setToken: (tok: string, rememberPassword: boolean) => void;
}
const useStore = create<State>(persist(set => ({
	token: null,
	setToken: (tok: string, rememberPassword: boolean) => {
		set({ token: tok })
		if (!rememberPassword) {
			window.localStorage.clear();
		}
	}
}),
	{
		name: "login-token"
	}))


function App() {
	const { token, setToken } = useStore(state => state);
	if (token === null) {
		return <Login setToken={setToken} />
	}
	return (
		<div className="wrapper">
			<Navbar />
			<Switch>
				<Route path="/Exercises">
					<Exercises />
				</Route>
				<Route path="/Weight">
					<Weight />
				</Route>
				<Route path="/">
					<TodaysWorkot />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
