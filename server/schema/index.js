// Construct a schema, using GraphQL schema language
const { RootQuery, mutations } = require('../root')
const { GraphQLSchema } = require('graphql')

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: mutations
})


module.exports = schema;