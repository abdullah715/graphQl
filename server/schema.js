const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLNonNull,
} = require("graphql");
const fs = require("fs");

var modelPath = require("path").join(__dirname, "/models");

function loadModelFieldFiles(type) {
  return fs.readdirSync(modelPath).reduce((agg, file) => {
    let path = modelPath + "/" + file;
    console.log(path);

    if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
      let fields = require(path + "/" + type).fields;
      return { ...agg, ...fields };
    }
  }, {});
}

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: loadModelFieldFiles("queries"),
  }),
  mutation: new GraphQLObjectType({
    name: "Mutation",
    fields: loadModelFieldFiles("mutations"),
  }),
});
