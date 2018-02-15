const bodyParser = require('body-parser'),
      cors = require('cors'),
      express = require('express'),
      massive = require('massive'),
      port = process.env.PORT || 3000,
      ctrl  = require('./products_controller');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/api/product', ctrl.create )
app.get('/api/products', ctrl.getAll )
app.get('/api/product/:id', ctrl.getOne )
app.put('/api/product/:id', ctrl.update )
app.delete('/api/product/:id', ctrl.delete )


massive(process.env.CONNECTION_STRING).then( db => {
    app.set('db', db);
    app.listen(port, () => {
      console.log(`Server Listening on port ${port}....`)
    });
})
