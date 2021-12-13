import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movies";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import MoviesCard from "./MoviesCard";
import "./styles.css";


type ControlComponentData = {
  activePage: number;
}

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentData, setControlComponentData ] = useState<ControlComponentData>({
    activePage: 0,
  });

    const handlePageChange = (pageNumber: number) => {
    setControlComponentData({activePage: pageNumber})
  }

  const getProducts = useCallback(() => {
    const config: AxiosRequestConfig = {
    method: "GET",
    withCredentials: true,
    url: "/movies",
    params: {
      page: controlComponentData.activePage,
      size: 4,
    },
  };

  requestBackend(config).then((response) => {
    setPage(response.data);
  });
}, [controlComponentData]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="movies-container">
      <div className="base-card movies-search-container">
        <h1>Search Bar</h1>
      </div>

      <div className="row movies-catalog-container">
        
          {page?.content.map((movie) => (
            <Link to="/movies/1">
            <div key={movie.id} className="col-sm-6 col-lg-2 movies-catalog-container ">
              <MoviesCard movie={movie} />
            </div>
            </Link>
          ))}
        
      </div>
      <Pagination 
          forcePage={page?.number}
          pageCount={(page) ? page?.totalPages : 0} 
          range={3}
          onChange={handlePageChange}
          />
    </div>
  );
};

export default Movies;
