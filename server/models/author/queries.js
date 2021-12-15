const { GraphQLID, GraphQLList } = require("graphql");
const { AuthorType } = require("../Types");
const Author = require("./index");

const fields = {
  author: {
    type: AuthorType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parent, args) {
      // args.id
      // code to get data from db/other source

      return Author.findById(args.id);
    },
  },

  authors: {
    type: new GraphQLList(AuthorType),
    resolve(parent, args) {
      console.log("Authors 1");
      return Author.find({});
    },
  },
};

module.exports = { fields };
