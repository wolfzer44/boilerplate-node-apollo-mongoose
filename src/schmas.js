import { gql } from 'apollo-server';

export default gql `

    type User {
        _id: String!
        name: String!
        posts: [Post]
    }

    type Post {
        _id: String!
        title: String!
        description: String!
        user_id: String!
        user: User
    }


    type Query {
        users: [User]
        user(_id: String!) : User
        posts: [Post]
        post(_id: String!) : Post
        
    }

    type  Mutation {
        createUser(name: String! ) : User
        createPost(title: String!, description: String!, user_id: String!) : Post
    }

    type Subscription {
        postAdded: Post
    }

`;