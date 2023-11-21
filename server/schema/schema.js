const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = graphql;

// Define your types and relationships here

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define query fields here
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Define mutations here
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
