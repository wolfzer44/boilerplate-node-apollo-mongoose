import * as user from './user'

import { makeExecutableSchema } from 'apollo-server';

const queryMutations = `

    type Query {
        users: [User]
        user(_id: String!) : User

    }

    type  Mutation {
        
        createUser(
            name: String!
            lastName: String!
            email: String!
            password: String!
        ) : User
        
    }

`

const schema =  makeExecutableSchema({
    typeDefs: [
        user.schema,
        queryMutations // never delete this fucking line
    ],
    resolvers: [
        user.resolver, 
    ],
});

export default {
    schema
};
