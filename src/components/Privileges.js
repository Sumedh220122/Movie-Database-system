import React, {useState} from "react";
import 'C:/Users/ravi_/OneDrive/Desktop/Documents/Movie_DB/movie/node_modules/bootstrap/dist/css/bootstrap.min.css'
import picture from '../images/homepage_background.jpg'
import './HomePage.css'


function Privileges() {
    const [formData, setFormData] = useState({
        role: '',
        privilege: '',
        tablename:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:3001/api/rolecreation/', {
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
              <input type="text" placeholder="Role"name = "role" onChange = {handleChange}/>
              <input type="text" placeholder="Privilege"name = "privilege" onChange = {handleChange}/>
              <input type="text" placeholder="Table" name = "tablename" onChange = {handleChange}/>
              <button type="submit">Signup</button>
            </form>
          </div>
    
        </div>
      );
};

export default Privileges;