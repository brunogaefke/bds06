import { AxiosRequestConfig } from "axios";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movies";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/requests";
import MoviesCard from "./MoviesCard";
import MoviesFilter, { ProductFilterData } from "components/MoviesFilter";
import "./styles.css";

type ControlComponentData = {
  activePage: number;
  filterData: ProductFilterData;
};

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentData, setControlComponentData] =
    useState<ControlComponentData>({
      activePage: 0,
      filterData: { name: "", genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentData({
      activePage: pageNumber,
      filterData: controlComponentData.filterData,
    });
  };

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentData({ activePage: 0, filterData: data });
  };

  const getProducts = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: "GET",
      withCredentials: true,
      url: "/movies",
      params: {
        page: controlComponentData.activePage,
        size: 4,
        name: controlComponentData.filterData.name,
        genreId: controlComponentData.filterData.genre?.id,
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
        <MoviesFilter onSubmitFilter={handleSubmitFilter} />
      </div>

      <div className="row movies-catalog-container ">
        {page?.content.map((movie) => (
          
            <div
              key={movie.id}
              className="col-sm-6 col-lg-2 "
            >
              <Link to={`/movies/${movie.id}`}>
              <MoviesCard movie={movie} />
              </Link>
            </div>
          
        ))}
      </div>
      <div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page?.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
      </div>
    </div>
  );
};

export default Movies;
