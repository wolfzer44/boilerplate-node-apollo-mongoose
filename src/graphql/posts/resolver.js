import { PubSub } from 'apollo-server';

const pubsub = new PubSub();
const POST_ADDED = 'POST_ADDED';
export default {
    
    Query: {

        posts: async (root, args, { Posts }, info) => {
            
            const response = await Posts.find({})
            return response;
        },

        post: async (root, { _id }, { Posts }, info) => {
            
            const response = await Posts.findById(_id)
            return response;
        }
    },

    Post: {
        user: async (post, args, { Users }) => {
            console.log(post);
            
            const response = await Users.findById(post.user_id)
            
            return response;
        },
    },

    Mutation: {
        createPost: async (root, args, { Posts }) => {
            pubsub.publish(POST_ADDED, { postAdded: args });
            
            const response = await Posts.create(args);
            return response;
        }
    },

    Subscription: {
        postAdded: {
          subscribe: () => {
              return pubsub.asyncIterator([POST_ADDED])
          }
        }
    }
};