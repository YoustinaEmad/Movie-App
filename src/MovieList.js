import React, { useEffect, useState, Suspense } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovie, removeMovie } from "./Slice";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const MovieCard = React.lazy(() => import("./MovieCard"));

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    loadMovies();
  }, [page]); 

  const loadMovies = () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}movie/popular?api_key=09dbe86a501c8ce9b4abb3fe6dc4f3ac&page=${page}`)
      .then((res) => {
        setMovies(res.data.results.map((movie) => ({ ...movie, isLiked: false })));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLike = (movie) => {
    const updatedMovies = movies.map((m) =>
      m.id === movie.id ? { ...m, isLiked: !m.isLiked } : m
    );

    if (movie.isLiked) {
      dispatch(removeMovie(movie.id)); 
    } else {
      dispatch(addMovie(movie));
    }

    setMovies(updatedMovies);
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  const prevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); 
  };

  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>Popular Movies</h1>
      <div className="row row-cols-5">
        {movies.map((movie) => (
          <Suspense key={movie.id} fallback={<div>Loading...</div>}>
            <MovieCard movie={movie} handleLike={handleLike} />
          </Suspense>
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={prevPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  );
}

export default MovieList;
