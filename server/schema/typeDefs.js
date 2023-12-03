const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    inventory: [InventoryItem]
  }

  type InventoryItem {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    category: String
    supplier: String
    imageUrl: String
    location: String
    tags: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User  
    inventory: [InventoryItem]
    inventoryItem(_id: ID!): InventoryItem
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addInventoryItem(name: String!, description: String, price: Float, quantity: Int!, category: String, supplier: String, imageUrl: String, location: String, tags: [String]): InventoryItem
    updateInventoryItem(_id: ID!, name: String, description: String, price: Float, quantity: Int, category: String, supplier: String, imageUrl: String, location: String, tags: [String]): InventoryItem
    removeInventoryItem(_id: ID!): InventoryItem
  }
`;

module.exports = typeDefs;
