const express = require('express');
const graghqlHTTP = require('express-graphql');
const morgan = require('morgan');
/** Schema that hold All Queries  */
const sc = require('./schema');
/** The root provides a resolver function for each API endpoint */
const root = require('./root');


const app  = express();

if (app.get('env') == 'production') {
    app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
  } else {
    app.use(morgan('dev'));
  }

app.use('/graphql',graghqlHTTP({schema:sc,rootValue:root,graphiql:true}));

app.listen(4000);