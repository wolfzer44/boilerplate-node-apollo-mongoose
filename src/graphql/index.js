import * as user from './users';
import * as post from './posts';


import { makeExecutableSchema } from 'apollo-server';

const queryMutations = `

    type Query {
        posts: [Post]
        post(_id: String!) : Post
        users: [User]
        user(_id: String!) : User
        
    }

    type  Mutation {
        createPost(title: String!, description: String!, user_id: String!) : Post
        createUser(name: String! ) : User
    }
`

const schema =  makeExecutableSchema({
    typeDefs: [post.schema, user.schema, queryMutations],
    resolvers: [user.resolver, post.resolver],
});

export default {
    schema,
    models: {
        Users: user.model,
        Posts: post.model
    }
};
