// MovieCard.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function MovieCard({ movie, handleLike }) {
  return (
    <div className="col mb-4 d-flex">
      <div className="card movie-card flex-fill">
        <img
          className="card-img-top"
          src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{movie.title}</h5>
          <p className="card-text">{movie.release_date}</p>
          <Link to={`/MovieDetails/${movie.id}`} className="btn btn-dark">
            Details
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            style={{
              color: movie.isLiked ? "red" : "black",
              marginTop: "auto",
              cursor: "pointer",
            }}
            onClick={() => handleLike(movie)}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
