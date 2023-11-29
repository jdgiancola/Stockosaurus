const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); // Assuming your GraphQL schema is here

require('dotenv').config();

// Express app initialization
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Multer for image uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 20000000 }, // Limit for file size (20MB)
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('inventoryImage');

function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Image upload endpoint
app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.send({ msg: err });
    } else {
      if (req.file == undefined) {
        res.send({ msg: 'Error: No File Selected!' });
      } else {
        res.send({ msg: 'File Uploaded!', file: `uploads/${req.file.filename}` });
        // Additional logic here if needed
      }
    }
  });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// GraphQL server setup
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

// Server listening
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
