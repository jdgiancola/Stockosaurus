// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const { graphqlHTTP } = require('express-graphql');
// const schema = require('./schema/schema'); // Assuming your GraphQL schema is here

// require('dotenv').config();

// // Express app initialization
// const app = express();

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Multer for image uploads
// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 20000000 }, // Limit for file size (20MB)
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   }
// }).single('inventoryImage');

// function checkFileType(file, cb) {
//   const filetypes = /jpeg|jpg|png|gif/;
//   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

// // Image upload endpoint
// app.post('/upload', (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       res.send({ msg: err });
//     } else {
//       if (req.file == undefined) {
//         res.send({ msg: 'Error: No File Selected!' });
//       } else {
//         res.send({ msg: 'File Uploaded!', file: `uploads/${req.file.filename}` });
//         // Additional logic here if needed
//       }
//     }
//   });
// });

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// // GraphQL server setup
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

// // Server listening
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// =======================================================================

// const express = require('express');
// const { ApolloServer } = require('apollo-server-express');
// const { typeDefs, resolvers } = require('./schema');
// const db = require('./config/connection');
// const path = require('path');
// const { MongoClient } = require('mongodb'); // Import MongoClient

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// const startApolloServer = async () => {
//   await server.start();

//   // Connect to MongoDB with useNewUrlParser and useUnifiedTopology options
//   const url = 'mongodb://your-mongodb-url';
//   MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//     if (err) {
//       console.error('Error connecting to MongoDB:', err);
//       return;
//     }

//     // Use Apollo Server middleware
//     server.applyMiddleware({ app, path: '/graphql' });

//     // if we're in production, serve client/dist as static assets
//     if (process.env.NODE_ENV === 'production') {
//       app.use(express.static(path.join(__dirname, '../client/dist')));

//       app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//       });
//     }

//     db.once('open', () => {
//       app.listen(PORT, () => {
//         console.log(`API server running on port ${PORT}!`);
//         console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//       });
//     });
//   });
// };

// startApolloServer();

// =======================================================================
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schema');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware
  }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
  startApolloServer();