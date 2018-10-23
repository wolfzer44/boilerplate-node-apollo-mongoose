export default {
    
    Query: {
        users: async (root, args, { Users }, info) => {
            const response = await Users.find()
            return response;
        },
        

        user: async (root, { _id }, { Users }, info) => {
            
            const response = await Users.findById(_id)
            return response;
        }
    },

    User: {
        conversations: async (user, args, { Conversations }) => {
        
            const response = await Conversations.find({
                $or:[
                    {'owner_id': user._id},
                    {'invited_id': user._id}
                ]
            })
            return response;
        },
    },

    Mutation: {
        createUser: async (root, args, { Users }) => {
            const response = await Users.create(args);
            return response;
        },
    },
};