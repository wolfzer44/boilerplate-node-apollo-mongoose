import mongoose from 'mongoose';

// MODELS 
const User = mongoose.model('User',{
    name: String,
    lastName: String,
    email: String,
    master_key: String,
})




export { User }