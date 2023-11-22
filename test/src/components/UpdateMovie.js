import React, { useState } from "react";
import './UpdateDelete.css'
import picture from '../images/homepage_background.jpg'

function Update() {
  const [formData, setFormData] = useState({
    moviename: '',
    producername: '',
    actorname: '',
    directorname: '',
    replmoviename: '',
    replactorname: '',
    repldirectorname: '',
    replproducername: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/updateData/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Redirect to the "/movies" page after successful login
          window.location.href = '/update';
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error('Error submitting login form:', error);
      }

  };

  const handleDelete = async (e) => {
    e.preventDefault();
      try {
        const response = await fetch('http://localhost:3001/api/deleteData/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Redirect to the "/movies" page after successful login
          window.location.href = '/update';
        } else {
          console.log("error");
        }
      } catch (error) {
        console.error('Error submitting login form:', error);
      }

  };

  const showForm = () => {
    const element = document.getElementById('updateType');
    element.style.display = 'none';

    const element2 = document.getElementById('updateType');
    const option = element2.selectedOptions[0].innerHTML;

    const operation = option.split(' ');

    if (operation[0] == 'Movie') {
      if (operation[1] == 'Update') {
        const element3 = document.getElementById("movieup");
        element3.style.display = 'block';
      }
      else {
        const element3 = document.getElementById("moviedel");
        element3.style.display = 'block';
      }
    }

    if (operation[0] == 'Director') {
      if (operation[1] == 'Update') {
        const element3 = document.getElementById("dirup");
        element3.style.display = 'block';
      }
      else {
        const element3 = document.getElementById("dirdel");
        element3.style.display = 'block';
      }
    }

    if (operation[0] == 'Actor') {
      if (operation[1] == 'Update') {
        const element3 = document.getElementById("actup");
        element3.style.display = 'block';
      }
      else {
        const element3 = document.getElementById("actdel");
        element3.style.display = 'block';
      }
    }

    if (operation[0] == 'Producer') {
      if (operation[1] == 'Update') {
        const element3 = document.getElementById("produp");
        element3.style.display = 'block';
      }
      else {
        const element3 = document.getElementById("proddel");
        element3.style.display = 'block';
      }
    }

  }

  return (
    <div className="app-container2" style = {{backgroundImage: picture}}>
      <div className="search-bar2">
        <select id="updateType" onChange={showForm} style={{ display: 'block' }}>
          <option value="">Select an option</option>
          <option value="movie">Movie Update</option>
          <option value="movie">Movie Delete</option>
          <option value="movie">Director Update</option>
          <option value="director">Director Delete</option>
          <option value="movie">Actor Update</option>
          <option value="actor">Actor Delete</option>
          <option value="movie">Producer Update</option>
          <option value="producer">Producer Delete</option>
        </select>

        <form onSubmit={handleUpdate} id="movieup" style={{ display: 'none' }}>
          <input type="text" placeholder="Movie Name" name="moviename" onChange={handleChange}></input>
          <input type="text" placeholder="Director Name" name="directorname" onChange={handleChange}></input>
          <input type="text" placeholder="Replacement Movie" name="replmoviename" onChange={handleChange}></input>
          <input type="text" placeholder="Replacement Director" name="repldirectorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Update</button>
        </form>

        <form onSubmit={handleDelete} id="moviedel" style={{ display: 'none' }}>
          <input type="text" placeholder="Movie Name" name="moviename" onChange={handleChange}></input>
          <input type="text" placeholder="Director Name" name="directorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Delete</button>
        </form>

        <form onSubmit={handleUpdate} id="dirup" style={{ display: 'none' }}>
          <input type="text" placeholder="Director Name" name="directorname" onChange={handleChange}></input>
          <input type="text" placeholder="Replacement Director" name="repldirectorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Update</button>
        </form>

        <form onSubmit={handleDelete} id="dirdel" style={{ display: 'none' }}>
          <input type="text" placeholder="Director Name" name="directorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Delete</button>
        </form>

        <form onSubmit={handleUpdate} id="actup" style={{ display: 'none' }}>
          <input type="text" placeholder="Actor Name" name="actorname" onChange={handleChange}></input>
          <input type="text" placeholder="Replacement Actor" name="replactorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Update</button>
        </form>


        <form onSubmit={handleDelete} id="actdel" style={{ display: 'none' }}>
          <input type="text" placeholder="Actor Name" name="actorname" onChange={handleChange}></input>
          <button id="btn" type="submit">Delete</button>
        </form>


        <form onSubmit={handleUpdate} id="produp" style={{ display: 'none' }}>
          <input type="text" placeholder="Producer Name" name="producername" onChange={handleChange}></input>
          <input type="text" placeholder="Replacement Producer" name="replproducername" onChange={handleChange}></input>
          <button id="btn" type="submit">Update</button>
        </form>


        <form onSubmit={handleDelete} id="proddel" style={{ display: 'none' }}>
          <input type="text" placeholder="Producer Name" name="producername" onChange={handleChange}></input>
          <button id="btn" type="submit">Delete</button>
        </form>


      </div>
    </div>
  );
};

export default Update;