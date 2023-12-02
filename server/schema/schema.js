const graphql = require('graphql');
 


// Define your types and relationships here
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
    GraphQLList,
    GraphQLNonNull
  } = graphql;
  
  // GraphQL Type for InventoryItem
  const InventoryItemType = new GraphQLObjectType({
    name: 'InventoryItem',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLString },
      quantity: { type: new GraphQLNonNull(GraphQLInt) },
      price: { type: GraphQLFloat },
      category: { type: GraphQLString },
      supplier: { type: GraphQLString },
      purchaseDate: { type: GraphQLString },
      expirationDate: { type: GraphQLString },
      imageUrl: { type: GraphQLString },
      location: { type: GraphQLString },
      tags: { type: new GraphQLList(GraphQLString) }
    })
  });
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define query fields here
    inventoryItem: {
        type: InventoryItemType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          // Logic to fetch a single item by ID from MongoDB
          return InventoryItem.findById(args.id);
        }
      },
      inventoryItems: {
        type: new GraphQLList(InventoryItemType),
        resolve(parent, args) {
          // Logic to fetch all items from MongoDB
          return InventoryItem.find({});
        }
      }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Define mutations here
    addInventoryItem: {
        type: InventoryItemType,
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          description: { type: GraphQLString },
          quantity: { type: new GraphQLNonNull(GraphQLInt) },
          price: { type: GraphQLFloat },
          category: { type: GraphQLString },
          supplier: { type: GraphQLString },
          purchaseDate: { type: GraphQLString },
          expirationDate: { type: GraphQLString },
          imageUrl: { type: GraphQLString },
          location: { type: GraphQLString },
          tags: { type: new GraphQLList(GraphQLString) }
        },
        resolve(parent, args) {
          let inventoryItem = new InventoryItem({
            name: args.name,
            description: args.description,
            quantity: args.quantity,
            price: args.price,
            category: args.category,
            supplier: args.supplier,
            purchaseDate: args.purchaseDate,
            expirationDate: args.expirationDate,
            imageUrl: args.imageUrl,
            location: args.location,
            tags: args.tags
          });
          return inventoryItem.save();
        }
      },
      // Add other mutations here as necessary (e.g., updateInventoryItem, deleteInventoryItem)
    }
  });

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});

