import React, { useState } from "react";
// import Timeout from "await-timeout";
// import axios from "axios";
import { Link } from "react-router-dom";



export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [searchStatus, set_searchStatus] = useState()
  const [fetchedData, set_fetchedData] = useState([])

  const search = async () => {
    const queryParam = encodeURIComponent(searchText);
    set_searchStatus("Loading")
    const response = await fetch(
        `https://omdbapi.com/?apikey=e5594d0b&s=${queryParam}`
      ).then(r => r.json());

      console.log("Success!", response.Search);
      set_fetchedData(response.Search)
      set_searchStatus("Done")
    };


      console.log("Is my setter function working?", searchStatus)

      if(!fetchedData) return "Searching..."

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {fetchedData.map(movie => {
          return (
            <div key={movie.Title} className="movie">
                <Link to={`./discover/${movie.imdbID}`}>
                <h2>Title: {movie.Title}</h2>
                </Link>
                <div>
                    <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={movie.Poster} 
                    />
                </div>
                <p>{movie.Year}</p>
                
            </div>
             
          )
          
      })}
     
    </div>
  );
}