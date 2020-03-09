// Construct a schema, using GraphQL schema language
const {RootQuery,mutations} = require('../root')
const { buildSchema ,GraphQLSchema } = require('graphql')

const schema  = new GraphQLSchema({
  query:RootQuery,
  mutation:mutations
})
//  const schema = buildSchema(`
//   type Query {
//     hello: String
//     motivate : String!
//   }
// `);

module.exports = schema;