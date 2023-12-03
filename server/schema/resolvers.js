const { User, InventoryItem } = require("../Models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // get all users
    users: async () => {
      return User.find().populate("inventory");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("inventory");
    },
    // get all inventory items
    inventory: async (parent, { username }) => {
      const params = username ? { username } : {};
      return InventoryItem.find(params).sort({ createdAt: -1 });
    },
    // get an inventory item by id
    inventoryItem: async (parent, { _id }) => {
      return InventoryItem.findOne({ _id });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("inventory");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addInventoryItem: async (parent, args, context) => {
      if (context.user) {
        const inventoryItem = await InventoryItem.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { inventory: inventoryItem._id } },
          { new: true }
        );

        return inventoryItem;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeInventoryItem: async (parent, { _id }, context) => {
      if (context.user) {
        const inventoryItem = await InventoryItem.findOneAndDelete({
          _id,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { inventory: inventoryItem._id } }
        );

        return inventoryItem;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateInventoryItem: async (parent, { _id, quantity }, context) => {
      if (context.user) {
        const inventoryItem = await InventoryItem.findOneAndUpdate(
          { _id },
          { quantity },
          { new: true }
        );
        return inventoryItem;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

