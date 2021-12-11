import "./styles.css";

import ReviewCard from 'components/ReviewCard';
import { hasAnyRoles } from "util/auth";
import { useParams } from "react-router-dom";
import ReviewComment from "components/ReviewComent";
import MovieCardDetails from "./MovieCardDetails";
import { Movie } from "types/movies";

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {

  const movie: Movie = {
    id: 1,
    title: "Bob Esponja",
    subTitle: "O Incrível Resgate",
    year: 2020,
    imgUrl:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    synopsis:
      'Onde está Gary? Segundo Bob Esponja, Gary foi "caracolstrado" pelo temível Rei Poseidon e levado para a cidade perdida de Atlantic City. Junto a Patrick Estrela, ele sai em uma missão de resgate ao querido amigo, e nesta jornada os dois vão conhecer novos personagens e viver inimagináveis aventuras.',
    genre: [
      {
        id: 1,
        name: "Comédia",
      },
    ],
    genreId: 1,
    reviews: [],
  };

    
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movies-details-container">
      <div className="movies-details-banner-container">
        <MovieCardDetails movie={movie} />
        {hasAnyRoles(['ROLE_MEMBER']) && <ReviewCard movieId={movieId} />}
        <div className="review-container">
        <ReviewComment movieId={movieId} />
        </div>
        </div>)
      </div>
  );
};

export default MovieDetails;
