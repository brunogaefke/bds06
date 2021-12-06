import { Switch, Route, Router } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar/Index';
import history from 'util/history';
import PrivateRoute from 'components/PrivateRoute';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MoviesDetails';

const Routes = () => (
  <Router history={history}>
  <Navbar />
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <PrivateRoute path="/movies">
      <Movies />
    </PrivateRoute>
    <PrivateRoute path="/movies/:movieId">
      <MovieDetails />
    </PrivateRoute>
  </Switch>
</Router>
);

export default Routes;