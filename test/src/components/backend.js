const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', '../views')
app.use(bodyParser.json());
app.use(express.static('../views')); // Replace '/public' with the actual path to your static files


// app.use('test/public/styles.css', (req, res) => {
//   res.setHeader('Content-Type', 'text/css');
//   res.sendFile(__dirname + 'test/public/styles.css');
// });

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sumedhmysql@22',
  database: 'movie_database',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});


app.get('/api/movie/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM movies as m,directors as d,actors as a, producers as p WHERE title = "${id}" and m.director_id = d.director_id and a.movie_id = m.movie_id and p.movie_id = m.movie_id `;  
    connection.query(query,(error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        // res.render('<h1>My name is Khan</h1>')
        res.render('moviedetails', { movie: result[0] });
      }
    });
  });

app.post('/api/submitFormData/:name/:password', (req, res) => {
    
      const {Username} = req.params('name');
      const {password} = req.params('password');
      var query = connection.query('INSERT INTO users(user_id, name, password) VALUES(?,?,?)',[6, Username, password], (error, results)=>{
        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({ message: 'Server Error' });
        } else {
          res.json({ message: 'Movie added successfully' });
        }
      });
      
  });

app.get('/api/director/:id', (req, res) => {
  const {id} = req.params;
  const query = `SELECT * FROM DIRECTORS WHERE name = "${id}"`
  connection.query(query, (error, result)=>{
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('directordetails', { director: result[0] });
    }
  })
})

app.get('/api/producer/:id', (req, res) => {
  const {id} = req.params;
  const query = `SELECT * FROM PRODUCERS WHERE producer_name = "${id}"`
  connection.query(query, (error, result)=>{
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('producerdetails', { producer: result[0] });
    }
  })
})

app.get('/api/actor/:id', (req, res) => {
  const {id} = req.params;
  const query = `SELECT * FROM ACTORS WHERE actor_name = "${id}"`
  connection.query(query, (error, result)=>{
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('actordetails', { actor: result[0] });
    }
  })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });