const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = require('graphql')

/**  Define User Type  */

let userr = [
    { id: "1", name: " mahmoud " },
    { id: "2", name: " mahmoud 1 " },
    { id: "3", name: " mahmoud 2" },
    { id: "4", name: " ahmed " }
]

let UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
});

let AuthType = new GraphQLObjectType({
    name: "AuthType",
    fields: () => ({
        id: { type: GraphQLID },
        token: { type: GraphQLString }
    })
})

module.exports = { UserType, userr, AuthType }