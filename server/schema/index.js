// Construct a schema, using GraphQL schema language
const { buildSchema } = require('graphql')
 const schema = buildSchema(`
  type Query {
    hello: String
    motivate : String!
  }
`);

module.exports = schema;