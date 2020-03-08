// Construct a schema, using GraphQL schema language
const query = require('../root')
const { buildSchema ,GraphQLSchema } = require('graphql')

const schema  = new GraphQLSchema({
  query
})
//  const schema = buildSchema(`
//   type Query {
//     hello: String
//     motivate : String!
//   }
// `);

module.exports = schema;