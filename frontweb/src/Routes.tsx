import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies'
import MoviesDetails from 'pages/MoviesDetails';
import Navbar from 'components/Navbar/Index';

const Routes = () => (
  <BrowserRouter >
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/movies" exact>
        <Movies />
      </Route>
      <Route path="/movies/:moviesId">
        <MoviesDetails />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;