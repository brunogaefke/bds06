import "./styles.css";
import { Movie } from "types/movies";

type Props = {
  movie: Movie;
};

const MovieCardDetails = ({ movie }: Props) => {
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
