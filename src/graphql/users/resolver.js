export default {
    
    Query: {
        users: async (root, args, { Users }, info) => {
            console.log()
            const response = await Users.find()
            return response;
        },
        

        user: async (root, { _id }, { Users }, info) => {
            
            const response = await Users.findById(_id)
            return response;
        }
    },

    User: {
        posts: async (user, args, { Posts }) => {
            console.log(user);
            const response = await Posts.find({ user_id: user._id})
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