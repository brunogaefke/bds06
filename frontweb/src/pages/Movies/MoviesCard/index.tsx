import "./styles.css";
import { Movie } from "types/movies";


type Props = {
    movie: Movie;
}


const MoviesCard = ({ movie } : Props) => {

    return (
        <div className="base-card movie-card">
            <div className="card-top-container"> 
                <img src={movie.imgUrl} alt={movie.title}/>
            </div>
            <div className="card-bottom-container">
                <h1>{movie.title}</h1>
                <h3>{movie.year}</h3>
                <h6>{movie.subTitle}</h6>
            </div>
            </div>
    );
}

export default MoviesCard;