
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';
import { Switch, Route } from 'react-router-dom';


const MovieRoute = () => (
    <Switch>
    <Route path="/movies" exact>
      <Movies />
    </Route>
    <Route path="/movies/:movieId">
      <MoviesDetails />
    </Route>
  </Switch>
)
export default MovieRoute;