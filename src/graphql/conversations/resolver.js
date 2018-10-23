export default {
    
    Query: {

        conversations: async (root, args, { Conversations }, info) => {
            
            const response = await Conversations.find({})
            return response;
        },

        conversation: async (root, { _id }, { Conversations }, info) => {
            
            const response = await Conversations.findById(_id)
            return response;
        }
    },

    Conversation: {
        messages: async (conversation, args, { Messages }) => {

            const response = await Messages.find({ 'conversation_id': conversation._id})
            return response;
        },
    },

    Mutation: {
        createConversation: async (root, args, { Conversations }) => {
            
            const response = await Conversations.create(args);
            return response;
        }
    },

    
};