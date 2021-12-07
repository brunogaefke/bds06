import "./styles.css";

import ReviewCard from 'components/ReviewCard';
import { hasAnyRoles } from "util/auth";
import { useParams } from "react-router-dom";
import ReviewComment from "components/ReviewComent";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {

    
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movies-details-container">
      <div className="movies-details-banner-container">
        <h1>Tela detalhes do filme id: {movieId}</h1>
        {hasAnyRoles(['ROLE_MEMBER']) && <ReviewCard movieId={movieId} />}
        <div className="review-container">
        <ReviewComment movieId={movieId} />
        </div>
        </div>)
      </div>
  );
};

export default MovieDetails;
