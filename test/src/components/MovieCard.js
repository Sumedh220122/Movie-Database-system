import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../images/naruto.jpg';
import axios from 'axios';
import picture1 from '../images/Pulp_Fiction.jpg';
import picture2 from '../images/irishman.jpg';
import picture3 from '../images/gladiator.jpg';
import picture4 from '../images/inception.jpg';
import picture5 from '../images/life-of-pi-main.jpg';
import picture6 from '../images/parasite.jpg';
import picture7 from '../images/fight_club.jpg';
import picture8 from '../images/cp.jpg';
import picture9 from '../images/movie.jpg';


function MovieCard({movie}) {

    const handlepress=(value)=>{
        const encodedval = encodeURIComponent(value)
        window.location.href = 'http://localhost:3001/api/movie/' + encodedval;
    }

    const handleUpdate = () =>{
        var element = document.getElementsByClassName("card")[0]
    }

    return (
        <div style={{ backgroundImage : {picture}}}>
            <p style = {{padding: 10, fontSize: '24px'}}>Top 10 Movies based on rating</p>
            <div class="hello" style={{ display: "flex", flexDirection: "row"}}>
                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture1} alt={`Card image $`}/>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">Pulp Fiction</p>
                        <p id = "text" class="card-text">Ratings : 8.9</p>
                        <p id = "text" class="card-text">Release-date : 1994-10-14</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Pulp Fiction</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18" }}>
                    <img class="card-img-top" src={picture4} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">Inception</p>
                        <p id = "text" class="card-text">Ratings : 8.8</p>
                        <p id = "text" class="card-text">Release-date: 2010-07-16</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Inception</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture7} alt={`Card image $`}/>
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">Fight Club</p>
                        <p id = "text" class="card-text">Ratings : 8.8</p>
                        <p id = "text" class="card-text">Release-date: 1999-10-15</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Fight Club</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture6} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">Parasite</p>
                        <p id = "text" class="card-text">Ratings: 8.6</p>
                        <p id = "text" class="card-text">Release-date : 2019-10-11</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Parasite</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture9} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">MoonLight</p>
                        <p id = "text" class="card-text">Ratings : 8.6</p>
                        <p id = "text" class="card-text">Release-date: 2014-11-07</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>MoonLight</button>
                    </div>
                </div>
            </div>

            <p style = {{padding: 10, fontSize: '24px'}}>Top 10 Movies based on revenue</p>
            <div class="hello" style={{ display: "flex", flexDirection: "row"}}>
                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture4} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">Inception</p>
                        <p id = "text" class="card-text">Ratings : 8.8</p>
                        <p id = "text" class="card-text">Release-date: 2010-07-16</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Inception</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18" }}>
                    <img class="card-img-top" src={picture9} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">MoonLight</p>
                        <p id = "text" class="card-text">Ratings : 8.6</p>
                        <p id = "text" class="card-text">Release-date: 2014-11-07</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>MoonLight</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture5} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Life of Pi</p>
                        <p id = "text" class="card-text">Ratings: 7.9</p>
                        <p id = "text" class="card-text">Release-date : 2012-11-21</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Life of Pi</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture6} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Parasite</p>
                        <p id = "text" class="card-text">Ratings: 8.6</p>
                        <p id = "text" class="card-text">Release-date : 2019-10-11</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Parasite</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture3} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Gladiator</p>
                        <p id = "text" class="card-text">Ratings: 8.5</p>
                        <p id = "text" class="card-text">Release-date: 2000-05-05</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Gladiator</button>
                    </div>
                </div>
            </div>

            <p style = {{padding: 10, fontSize: '24px'}}>Top 10 Movies based on runtime</p>
            <div class="hello" style={{ display: "flex", flexDirection: "row"}}>
                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture9} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p id = "text" class="card-text">MoonLight</p>
                        <p id = "text" class="card-text">Ratings : 8.6</p>
                        <p id = "text" class="card-text">Release-date: 2014-11-07</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>MoonLight</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18" }}>
                    <img class="card-img-top" src={picture4} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Inception</p>
                        <p id = "text" class="card-text">Ratings : 8.8</p>
                        <p id = "text" class="card-text">Release-date: 2010-07-16</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Inception</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture2} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">The Irishman</p>
                        <p id = "text" class="card-text">Ratings: 7.7</p>
                        <p id = "text" class="card-text">Release-date: 2019-11-01</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>The Irishman</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture5} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Life of Pi</p>
                        <p id = "text" class="card-text">Ratings: 7.9</p>
                        <p id = "text" class="card-text">Release-date : 2012-11-21</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Life of Pi</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture3} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">Title</h5>
                        <p class="card-text">Gladiator</p>
                        <p id = "text" class="card-text">Ratings: 8.5</p>
                        <p id = "text" class="card-text">Release-date: 2000-05-05</p>
                        <button id = "btn1" onClick={(e) => handlepress(e.target.innerHTML)}>Gladiator</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MovieCard;


