const pg = require('pg');

const pool = new pg.Pool({
  database: 'd4r7hatd5pec86',
  user: 'fauvejfdpbmard',
  password: '4901f05eac8efa82705d38ff66b9805dc6b011c87164db6a99973df9497335e8',
  host: 'ec2-23-23-216-40.compute-1.amazonaws.com',
  ssl: true
});

const express = require('express');

const router = express.Router();

router.get('/books', (req, res) => {
  pool.query('SELECT * from books', [], function (err, result) {
    if (err) throw err;

    res.send(result.rows);
  });
});

router.get('/books/:bookId/ratings', (req, res) => {
  pool.query('SELECT * FROM reviews WHERE book_id = $1', [req.params.bookId], function (err, result) {
    if (err) throw err;

    res.send(result.rows);
  });
});

export default router;
