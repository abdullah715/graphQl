const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const { BookType } = require("../Types");
const Book = require("./index");

const fields = {
  addBook: {
    type: BookType,
    args: {
      name: { type: new GraphQLNonNull(GraphQLString) },
      genre: { type: new GraphQLNonNull(GraphQLString) },
      authorId: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve(parent, args) {
      let book = new Book({
        ...args,
      });

      return book.save();
    },
  },
};

module.exports = { fields };
