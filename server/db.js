var pg = require('pg');

var pool = new pg.Pool({
  database: 'books-dev'
});

pool.query('SELECT * from books', [], function (err, result) {
  if (err) throw err;

  console.log(result.rows);
});
