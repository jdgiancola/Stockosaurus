// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');

// const Inventory = require('./InventoryItem');

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       match: [/.+@.+\..+/, 'Must use a valid email address'],
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     // set savedBooks to be an array of data that adheres to the bookSchema
//     savedInventory: [Inventory],
//   },
//   // set this to use virtual below
//   {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );

// // hash user password
// userSchema.pre('save', async function (next) {
//   if (this.isNew || this.isModified('password')) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // custom method to compare and validate password for logging in
// userSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// // when we query a user, we'll also get another field called `bookCount` with the number of saved books we have
// userSchema.virtual('inventoyCount').get(function () {
//   return this.Inventory.length;
// });

// const User = model('User', userSchema);

// module.exports = User;

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

let InventoryItem;

try {
  // Try to get the existing model
  InventoryItem = mongoose.model('InventoryItem');
} catch (error) {
  // If the model doesn't exist, define it
  InventoryItem = require('./InventoryItem');
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savedInventory to be an array of data that adheres to the InventoryItem schema
    savedInventory: [{
      type: Schema.Types.ObjectId,
      ref: 'InventoryItem'
    }],
  },
  // set this to use virtuals below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `inventoryCount` with the number of saved inventory items
userSchema.virtual('inventoryCount').get(function () {
  return this.savedInventory.length;
});

const User = model('User', userSchema);

module.exports = User;
