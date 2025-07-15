import React from 'react';
import { BrowserRouter as Router, Route, Switch ,Link} from 'react-router-dom/cjs/react-router-dom.min';
import 'C:/Users/ravi_/OneDrive/Desktop/Documents/Movie_DB/movie/node_modules/bootstrap/dist/css/bootstrap.min.css'
import picture from './images/movie.jpg'

import './App.css';
import NavBar from './components/Navbar';
import MovieCard from './components/MovieCard';
import HomePage from './components/HomePage';


function App() {
  return (

    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path = "/" component = {HomePage}/>

          <Route path="/movie" component={MovieCard} >
           <MovieCard></MovieCard>
           <MovieCard></MovieCard>
           <MovieCard></MovieCard>
        
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
