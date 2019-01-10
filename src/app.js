// GLOBAL IMPORTS
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';

import Auth from './auth';
import tokenCheck from './middlewares/ValidateToken';

import './configs';

const app = express(); // if you will use for middleware

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// APPLICATION IMPORTS
import  { default as graphql }  from './graphql'

const server = new ApolloServer({ schema: graphql.schema })

app.post('/auth', Auth);

// app.use(process.env.PATH_GRAPHQL, tokenCheck); // remove comment in prod

server.applyMiddleware({ app, tokenCheck });

app.listen({ port: process.env.PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000{server.graphqlPath}`)
)