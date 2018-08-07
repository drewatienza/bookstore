const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';
import apiRouter from './apiRouter';

app.get('/', (req, res) => {

  serverRender().then(renderData =>
    res.render('index', {
      markup: renderData.markup,
      initialData: renderData.data,
    })
  );
});

app.use('/api', apiRouter);

app.listen(8080, '0.0.0.0', () => console.log('server is running ...'));
