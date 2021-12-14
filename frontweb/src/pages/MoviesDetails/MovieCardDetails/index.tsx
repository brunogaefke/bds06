import "./styles.css";
import { Movie } from "types/movies";
import { useEffect, useState } from "react";
import { AxiosRequestConfig } from "axios";
import { BASE_URL, requestBackend } from "util/requests";

type Props = {
  movieId: string;
};

const MovieCardDetails = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>({
    genre: [],
    id: 0,
    genreId: 0,
    imgUrl: '',
    reviews: [],
    subTitle: '',
    synopsis: '',
    title: '',
    year: 0,
  });

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: BASE_URL + "/movies/" + movieId,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="base-card movie-card-details-container">
     <div className="movie-image-container">
            <img src={movie.imgUrl} alt={movie.title} />
          </div>
          <div className="movie-text-container">
            <h1>{movie.title}</h1>
            <h6>{movie.year}</h6>
            <p>{movie.subTitle}</p>
            <div className="synopsis-details-container">
              <p>{movie.synopsis}</p>
            </div>
          </div>
    </div>
  );
};

export default MovieCardDetails;
