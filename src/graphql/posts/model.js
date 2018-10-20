import mongoose from 'mongoose';

const Posts = mongoose.model('Posts',{
    title: String,
    description: String,
    user_id: String
})

export default Posts;