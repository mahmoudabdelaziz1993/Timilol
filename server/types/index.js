const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString ,GraphQLList} = require('graphql')
const User  = require('../models/User');

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


/** Define Board type  */
let BoardType = new GraphQLObjectType({
    name: "BoardType",
    fields: () => ({
        id: { type: GraphQLID },
        name :{ type: GraphQLString },
        description : { type: GraphQLString },
        owner:{type:UserType,
        async resolve(parent,args){
            return User.findById(parent.owner)
        }},
        members :{type:new GraphQLList(UserType),
        async resolve(parent,args){
            let MemberList = await parent.users.map(async (user)=>{return await User.findById(user.user_id)});
            return MemberList ;
        } } 
    })
})


module.exports = { UserType, AuthType , BoardType }