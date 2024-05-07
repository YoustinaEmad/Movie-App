import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import React from "react";

const MovieDetailsContent = React.lazy(() => import("./MovieDetailsContent"));

function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/${params.id}?api_key=09dbe86a501c8ce9b4abb3fe6dc4f3ac`)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, [baseUrl, params.id]);

  return (
    <>
      <NavBar />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <MovieDetailsContent movieDetails={movieDetails} />
      </Suspense>
    </>
  );
}

export default MovieDetails;
