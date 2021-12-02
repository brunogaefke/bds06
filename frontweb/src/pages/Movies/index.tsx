import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  return (
    <div className="movies-container">
      <div className="movies-banner-container">
        <h1>Tela Listagem de Filmes</h1>
        <Link to="/movies/1">
          <p>Acessar /movies/1</p>
        </Link>
        <Link to="/movies/2">
          <p>Acessar /movies/2</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
