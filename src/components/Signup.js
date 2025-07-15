import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'C:/Users/ravi_/OneDrive/Desktop/Documents/Movie_DB/movie/node_modules/bootstrap/dist/css/bootstrap.min.css'
import picture from '../images/homepage_background.jpg'
import './HomePage.css'

function SignUpPage() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        password:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3001/api/submitSignupData/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Redirect to the "/movies" page after successful login
            window.location.href = '/movie';
          } else {
             console.log("Error :(");
          }
        } catch (error) {
          console.error('Error submitting login form:', error);
        }
      };



    return (

        <div className="app-container">
          <img src={picture} alt="Movie Poster" style={{ width: '20' }} />
          <div className="search-bar">
            <p><strong>Enter your Details</strong></p>
            <form onSubmit = {handleSubmit} >
              <input type="text" placeholder="Firstname"name = "fname" onChange = {handleChange}/>
              <input type="text" placeholder="LastName"name = "lname" onChange = {handleChange}/>
              <input type="password" placeholder="Password" name = "password" onChange = {handleChange}/>
              <button type="submit">Signup</button>
            </form>
          </div>
    
        </div>
      );
    };

export default SignUpPage;