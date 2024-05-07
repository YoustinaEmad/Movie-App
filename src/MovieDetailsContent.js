// MovieDetailsContent.js
import React from "react";

function MovieDetailsContent({ movieDetails }) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={`http://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`}
        style={{ padding: "30px", borderRadius: 40 }}
        alt={movieDetails.title}
      />
      <div style={{ margin: "40px" }}>
        <h2>{movieDetails.title}</h2>
        <p>
          <strong>Release Date:</strong> {movieDetails.release_date}
        </p>
        <p>
          <strong>Overview:</strong> {movieDetails.overview}
        </p>
        <p>
          <strong>Popularity:</strong> {movieDetails.popularity}
        </p>
      </div>
    </div>
  );
}

export default MovieDetailsContent;
