const axios = require('axios');
const { GraphQLObjectType, GraphQLList, GraphQLString, GraphQLID } = require('graphql')
const { UserType, AuthType, BoardType } = require('../types')
const User = require('../models/User')
const Board = require('../models/Board');

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      async  resolve() {
        return await User.find();
      }
    },
    login: {
      type: AuthType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parent, args) {
        let { email, password } = args;
        let { id, token } = await User.isValidUser(email, password);
        return { id, token }
      }

    },
    motivate: {
      type: GraphQLString,
      async resolve(parent, args) {
        try {
          const { data } = await axios.get("https://type.fit/api/quotes");
          const x = data[Math.floor((Math.random() * data.length))];
          return x.text;

        } catch (error) {
          console.log('error :', error);
          return " we can't help right now  !!"
        }
      }
    },
    boards : {
      type : new GraphQLList(BoardType),
      async resolve(parent,args){
        return await Board.find();
      }
    }
  }
});

const mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    register: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      async resolve(parent, args) {
        let { name, email, password } = args
        let user = new User({ name, email, password });
        await user.save();
        return user;
      }
    },
    addBoard: {
      type: BoardType,
      args: {
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        owner: { type: GraphQLID },
      },
      async resolve(parent, args) {
        let {name ,description,owner} = args ;
        let board = new Board({name ,description,owner})
        await board.save();
        return board;
      }
    }
  }
})
module.exports = { RootQuery, mutations }

