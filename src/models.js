import mongoose from 'mongoose';

// MODELS 
const Users = mongoose.model('Users',{
    name: String
})

const Posts = mongoose.model('Posts',{
    title: String,
    description: String,
    user_id: String
})

export default {Users, Posts};