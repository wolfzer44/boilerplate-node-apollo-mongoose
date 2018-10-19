// GLOBAL IMPORTS
import express from 'express';
import { ApolloServer } from 'apollo-server';
import './configs';

const app = express(); // if you will use for middleware

// APPLICATION IMPORTS
import typeDefs from "./schmas";
import resolvers from "./resolvers";
import models from './models';

const server = new ApolloServer({ typeDefs, resolvers, context: models })

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`)
});

