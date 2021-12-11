import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Movie } from "types/movies";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import MoviesCard from "./MoviesCard";
import "./styles.css";

const Movies = () => {

  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      withCredentials: true,
      url: "/movies",
      params: {
        page: 0,
        size: 4,
      },
    };
  
    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
  }, []);

  return (
    <div className="movies-container">
      <div className="base-card movies-search-container">
        <h1>Search Bar</h1>
      </div>

      <div className="row movies-catalog-container">

        {
          page?.content.map(movie => (
            <div key={movie.id} className="col-sm-6 col-lg-2" >
            <MoviesCard movie={movie} />
          </div>
          ))}
      </div>
    </div>
  );
};

export default Movies;
