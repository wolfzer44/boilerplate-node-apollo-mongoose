// GLOBAL IMPORTS
import express from 'express';
import { ApolloServer } from 'apollo-server';
import './configs';

const app = express(); // if you will use for middleware

// APPLICATION IMPORTS
import  { default as graphql }  from './graphql'


const server = new ApolloServer({ schema: graphql.schema,  context: graphql.models })

server.listen().then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`)
});

