var pg = require('pg');

var pool = new pg.Pool({
  database: 'books-dev'
});

pool.connect(function (err, client, done) {
  if (err) throw err;

  client.query('SELECT * from books', [], function (err, result) {
    if (err) throw err;

    console.log(result.rows);
  });
});
