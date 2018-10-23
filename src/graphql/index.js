import * as user from './users';
import * as conversation from './conversations';
import * as message from './messages';


import { makeExecutableSchema } from 'apollo-server';

const queryMutations = `

    type Query {
        messages: [Message]
        message(_id: String!) : Message
        conversations: [Conversation]
        conversation(_id: String!) : Conversation
        users: [User]
        user(_id: String!) : User
        
    }

    type  Mutation {
        createConversation(
            owner_id: String!
            invited_id: String!
        ) : Conversation

        createMessage(
            owner_id: String!
            conversation_id: String!
            message: String!
        ) : Message

        createUser(
            name: String!
            lastName: String!
            phone_number: String!
            email: String!
            activePin: String!
            isActive: Boolean!
        ) : User
    }

    type Subscription {
        newMessage(_id: String!): Message
    }
`

const schema =  makeExecutableSchema({
    typeDefs: [
        user.schema, 
        conversation.schema, 
        message.schema,
        queryMutations
    ],
    resolvers: [
        user.resolver, 
        conversation.resolver,
        message.resolver
    ],
});

export default {
    schema,
    models: {
        Users: user.model,
        Conversations: conversation.model,
        Messages: message.model
    }
};
