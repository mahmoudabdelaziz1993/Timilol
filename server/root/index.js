const axios = require('axios');
const { GraphQLObjectType, GraphQLList } = require('graphql')
const { userr, UserType } = require('../types')

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return userr;
      }
    }
  }
})
module.exports = RootQuery

// The root provides a resolver function for each API endpoint
//   const root = {
//     hello: () => {
//       return 'Hello world!';
//     },
//     motivate :async ()=>{
//       try {
//         const {data} = await axios.get("https://type.fit/api/quotes");
//         const x = data[Math.floor((Math.random()*data.length))];
//         console.log(x.text);
//         return x.text;

//       } catch (error) {
//         console.log('error :', error);
//         return " we can't help right now  !!"
//       }

//     }
//   };
// module.exports = root;

