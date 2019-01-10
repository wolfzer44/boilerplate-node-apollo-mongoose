import { User } from '../../models';
export default {
    
    Query: {
        users: async (root, args, info) => {
            const response = await User.find()
            return response;
        },
        

        user: async (root, { _id }, info) => {
            
            const response = await User.findById(_id)
            return response;
        }
    },
  
    Mutation: {
        createUser: async (root, args) => {
            const response = await User.create(args);
            return response;
        },
    },
};