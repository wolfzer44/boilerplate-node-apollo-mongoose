import mongoose from 'mongoose';

// MODELS 
const Users = mongoose.model('Users',{
    name: String
})

export default Users;