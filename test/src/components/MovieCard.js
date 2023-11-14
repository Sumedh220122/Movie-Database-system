import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../images/naruto.jpg';
import axios from 'axios';

function MovieCard({movie}) {

    const handlepress=()=>{
        var element = document.getElementById("text").innerHTML
        const encodedval = encodeURIComponent(element)
        window.location.href = 'http://localhost:3001/api/movie/' + encodedval;
    }

    return (
        <div style={{ backgroundImage : {picture}}}>
            <div class="hello" style={{ display: "flex", flexDirection: "row"}}>
                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">movie.id</h5>
                        <p id = "text" class="card-text">Jurassic Park</p>
                        <button onClick={handlepress}>View Details</button>
                    </div>
                </div>

                <div class="card" style={{ width: "18" }}>
                    <img class="card-img-top" src={picture} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href = "#" className="btn btn-primary">View Details</a>                    
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href = "#" className="btn btn-primary">View Details</a>                    
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href = "#" className="btn btn-primary">View Details</a>                    
                    </div>
                </div>

                <div class="card" style={{ width: "18"}}>
                    <img class="card-img-top" src={picture} alt={`Card image $`} />
                    <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href = "#" className="btn btn-primary">View Details</a>                    
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MovieCard;


