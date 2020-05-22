import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
// import { NavBar } from 'react-bootstrap'
import DiscoverMoviesPage from "./Pages/DiscoverMoviesPage"
import AboutPage from "./Pages/AboutPage"
import HomePage from "./Pages/HomePage"
import MoviePage from "./Pages/MoviePage"

function App() {
  return (
    <div className="App">
      {/* <NavBar> */}
        <NavLink to="/about">About this website</NavLink>
        <NavLink to="/discover">Discover new things</NavLink>
        <NavLink exact to="/">Go Home</NavLink>
      {/* </NavBar> */}
      <Switch>
        <Route exact path="/discover" component={DiscoverMoviesPage} />
        <Route path="/discover/:imdb_id" component={MoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
