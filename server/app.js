const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema'); // We will create this file next
const cors = require('cors');
require('dotenv').config();

const app = express();

// Allow cross-origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL when viewing /graphql in a browser
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
