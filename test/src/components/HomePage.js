import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'C:/Users/ravi_/OneDrive/Desktop/Documents/Movie_DB/movie/node_modules/bootstrap/dist/css/bootstrap.min.css'
import picture from '../images/movie.jpg'
import './HomePage.css'



function HomePage() {
  const handleSubmit = () => {
    const form = document.getElementById("searchForm");

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const Username = document.getElementById('username').value;
      const Password = document.getElementById('password').value;

      const encodeduser = encodeURIComponent(Username);
      const encodedpassword = encodeURIComponent(Password);


      fetch('http://localhost:3001/api/submitFormData/' + encodeduser + encodedpassword)
        .then((response) => {
          if (response.ok) {
            window.location.href = '/movie';
          }
          else {
            throw new Error('Response not ok!')
          }
        })
        .catch((error) => {
          console.error('There was an error with the fetch operation:', error);
        });
    })
  }

  return (

    <div className="app-container">
      <img src={picture} alt="Movie Poster" style={{ width: '20' }} />
      <div className="search-bar">
        <p><strong>Enter your Details</strong></p>
        <form id = "searchForm">
          <input type='text' id = "username" placeholder="Username"/>
          <input type="text" idd = "password" placeholder="Password"/>
          <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
      </div>

    </div>
  );
};

export default HomePage;