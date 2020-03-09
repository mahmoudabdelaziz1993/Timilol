const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = require('graphql')

/**  Define User Type  */

let UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

/** Define authenticated User Type */
let AuthType = new GraphQLObjectType({
    name: "AuthType",
    fields: () => ({
        id: { type: GraphQLID },
        token: { type: GraphQLString }
    })
})

module.exports = { UserType, AuthType }