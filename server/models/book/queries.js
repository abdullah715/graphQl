const { GraphQLID, GraphQLList } = require("graphql");
const { BookType } = require("../Types");
const Book = require("./index");

const fields = {
  book: {
    type: BookType,
    args: {
      id: { type: GraphQLID },
    },
    resolve(parent, args) {
      // args.id
      // code to get data from db/other source

      return Book.find({ id: args.id });
    },
  },
  books: {
    type: new GraphQLList(BookType),
    resolve(parent, args) {
      return Book.find({});
    },
  },
};

module.exports = { fields };
