import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'C:/Users/ravi_/OneDrive/Desktop/Documents/Movie_DB/movie/node_modules/bootstrap/dist/css/bootstrap.min.css'
import picture from '../images/movie.jpg'
import './HomePage.css'



function HomePage() {
    return (

        <div className="app-container">
            <img src={picture} alt="Movie Poster" style={{ width: '20' }} />
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <Link to="/movie" className="btn btn-primary">
                    Search
                </Link>

            </div>

        </div>
    );
};

export default HomePage;