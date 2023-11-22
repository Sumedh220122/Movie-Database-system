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

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sumedhmysql@22',
  database: 'movie_database',
  connectionLimit: 3,
});

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });


app.get('/api/movie/:id', (req, res) => {
  const { id } = req.params;
  const query = `CALL GetMovieDetails("${id}") `;
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
    } else {
      // res.render('<h1>My name is Khan</h1>')
      res.render('moviedetails', { movie: result[0] });
      console.log(result)
    }
  });
});


app.get('/api/crew/:id', (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM CREW WHERE crew_name = "${id}" `;
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
    } else {
      // res.render('<h1>My name is Khan</h1>')
      res.render('crewdetails', { crew: result[0] });
      console.log(result)
    }
  });
});

app.post('/api/submitFormData/', (req, res) => {

  const { username, password } = req.body;
  var query = connection.query(`call user_login("${username}", "${password}")`, (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.json({ message: 'User added successfully' });
    }
  });

});

app.post('/api/rolecreation/', (req, res) => {

  const { role, privilege, tablename} = req.body;
  if(role != ''){
    connection.query(`create role ${role}` , (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Movie added successfully' });
      }
    })
  }

  if(privilege != '' && tablename != '' && role != ''){
    connection.query(`grant ${privilege} on ${tablename} to ${role}` , (error, results) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Movie added successfully' });
      }
    })
  }
});

app.post('/api/submitSignupData/', (req, res) => {

  const { fname, lname, password } = req.body;


  var query = connection.query('INSERT INTO users(user_name, password) VALUES(?,?)', [fname + " " + lname, password], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.json({ message: 'User added successfully' });
    }
  });
});

app.get('/api/director/:id', (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM DIRECTORS WHERE name = "${id}"`
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('directordetails', { director: result[0] });
    }
  })
})

app.get('/api/producer/:id', (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM PRODUCERS WHERE producer_name = "${id}"`
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('producerdetails', { producer: result[0] });
    }
  })
})

app.get('/api/actor/:id', (req, res) => {
  const { id } = req.params;
  const query = `SELECT * FROM ACTORS WHERE actor_name = "${id}"`
  connection.query(query, (error, result) => {
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


app.get('/api/options/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);

  if (id == "TOP 10 MOVIES") {
    const query = 'SELECT * from movies order by rating desc limit 10';
    // const query = `SELECT * FROM movies as m,directors as d,actors as a, producers as p WHERE title = "${id}" and m.director_id = d.director_id and a.movie_id = m.movie_id and p.movie_id = m.movie_id `;  
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        // res.render('<h1>My name is Khan</h1>')
        res.render('option1details', { option1: result });
      }
    });
  }

  else if (id[id.length - 1] == "2") {
    const director = id.substring(0, id.length - 1);

    const query = `SELECT * from directors as d where d.name = "${director}"`;
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.render('directordetails', { director: result[0] });
      }
    });
  }
  else if (id[id.length - 1] == "1") {
    const actor = id.substring(0, id.length - 1);
    const query = `SELECT * from actors where actors.actor_name = "${actor}"`;
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        // res.render('<h1>My name is Khan</h1>')
        res.render('actordetails', { actor: result[0] });
      }
    });

  }

  else {
    const query = `SELECT * from movies where movies.genre = "${id}"`;
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        // res.render('<h1>My name is Khan</h1>')
        res.render('option1details', { option1: result });
      }
    });
  }
});


app.post('/api/updateData/', (req, res) => {
  const { moviename, producername, actorname, directorname, replmoviename, replactorname, repldirectorname, replproducername } = req.body;
  console.log(directorname);
  console.log(moviename);
  if (moviename != '' && directorname != '') {
    const query = `UPDATE movies AS m
                   JOIN directors AS d ON m.director_id = d.director_id
                   SET 
                     m.title = "${replmoviename}",
                     d.name = "${repldirectorname}"
                   WHERE 
                     m.title = "${moviename}" 
                     AND d.name = "${directorname}";
                   `;

    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }
  else if (directorname != '') {
    const query = `update directors set name = "${repldirectorname}" where name = "${directorname}"`
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }
  else if (actorname != '') {
    const query = `update actors set actor_name = "${replactorname}" where actor_name = "${actorname}"`
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

  else if (producername != '') {
    const query = `update producers set producer_name = "${replproducername}" where producer_name = "${producername}"`
    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

  else{
    console.error('Error executing MySQL query:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.post('/api/deleteData/', (req, res) => {
  const { moviename, producername, actorname, directorname, replmoviename, replactorname, repldirectorname, replproducername } = req.body;
  if (moviename != '') {
    const query = `call DeleteMovieAndAssociatedData("${moviename}")`;

    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

  else if (directorname != '') {
    const query = `call DeleteDirectorAndMovies("${directorname}")`;

    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

  else if (actorname != '') {
    const query = `delete from actors where actor_name = "${actorname}"`;

    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

  else if (producername != '') {
    const query = `delete from producers where producer_name = "${producername}"`;

    connection.query(query, (error, result) => {
      if (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ message: 'Server Error' });
      } else {
        res.json({ message: 'Updated successfully' });
      }
    });
  }

});

app.get('/api/aggregate/:id', (req, res) => {
  const { id } = req.params;
  const query = ` with dir_mov(name, title,revenue) as
                  (select name, title,revenue from movies
                    inner join directors on movies.director_id = directors.director_id)
                  select name,sum(revenue) as tot_revenue from dir_mov where name = "${id}"
                  group by name;`
  connection.query(query, (error, result) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ message: 'Server Error' });
    } else {
      res.render('revenue', { revenue: result[0] });
    }
  })
})