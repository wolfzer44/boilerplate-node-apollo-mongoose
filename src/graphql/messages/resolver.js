import { PubSub, withFilter } from 'apollo-server';

const pubsub = new PubSub();
const NEW_MESSAGE = 'NEW_MESSAGE';
export default {
    
    Query: {

        messages: async (root, args, { Messages }, info) => {
            
            const response = await Messages.find({})
            return response;
        },

        message: async (root, { _id }, { Messages }, info) => {
            
            const response = await Messages.findById(_id)
            return response;
        }
    },

    Message: {
        user: async (message, args, { Users }) => {
        
            const response = await Users.findById(message.owner_id)
            return response;
        },
    },


    Mutation: {
        createMessage: async (root, args, { Messages }) => {
            pubsub.publish(NEW_MESSAGE, { newMessage: args });
            
            const response = await Messages.create(args);
            return response;
        }
    },

    Subscription: {
        newMessage: {
            subscribe: withFilter(
                () => pubsub.asyncIterator([NEW_MESSAGE]),
                ({ newMessage }, args ) => {
                    return newMessage.conversation_id === args._id;
                },
              ),
        }
    }

};