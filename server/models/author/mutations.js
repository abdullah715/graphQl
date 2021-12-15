const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { AuthorType } = require("../Types");
const Author = require("./index");

const fields = {
  addAuthor: {
    type: AuthorType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      age: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve(parent, args) {
      let author = new Author({
        name: args.name,
        age: args.age,
      });

      return author.save();
    },
  },
};
// Mutations
module.exports = { fields };
