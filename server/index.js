const express = require('express');
const graghqlHTTP = require('express-graphql');
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require("mongoose");
/** Schema that hold All Queries  */
const schema = require('./schema');
/** The root provides a resolver function for each API endpoint */


const app = express();

if (app.get('env') == 'production') {
  app.use(morgan('common', { skip: function (req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
  app.use(morgan('dev'));
}

app.use('/graphql', graghqlHTTP({ schema, rootValue: root, graphiql: true }));


/** DataBase Connection */
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open' , ()=>console.log("🚀 connected to mongo db successfully"));
app.listen(4000);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);