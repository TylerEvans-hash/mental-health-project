const express = require('express');
const path = require('path');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import our typeDefs and resolvers
//const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');
const {authMiddleware} = require('./utils/auth');

(async ()=> {

  const server = new ApolloServer({ typeDefs, resolvers, context: authMiddleware});
  await server.start();

  const app = express();
  const PORT = process.env.PORT || 3001;

  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

  
  await new Promise(resolve => 
    db.once('open', () => {
      app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`, resolve));
      console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    })
  );
  return { server, app };
})
