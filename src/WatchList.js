import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "./Slice";
import NavBar from "./NavBar";

function WatchList() {
  const favorites = useSelector((state) => state.favorites.movies);
  const dispatch = useDispatch();

  const removeFromFavorites = (id) => {
    dispatch(removeMovie(id));
  };

  return (
    <>
      <NavBar />
      <br />
      <h1>Favorite Movies</h1>
      <div className="row">
        {favorites.map((movie) => (
          <div key={movie.id} className="col-6 col-md-3 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">Release Date: {movie.release_date}</p>
                <button
                  onClick={() => removeFromFavorites(movie.id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WatchList;
